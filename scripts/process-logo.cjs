/**
 * Converts public/logo.png from RGB (white bg) to RGBA with transparent
 * background. Also slightly enriches the rose tones so the logo reads
 * cleanly on the blush UI.
 */
const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const SRC = path.resolve(__dirname, '..', 'public', 'logo.png');
const OUT = SRC;

const data = fs.readFileSync(SRC);

PNG.sync.read(data); // sanity parse first to throw on bad file

const png = PNG.sync.read(data);
const { width, height } = png;

// Build a new RGBA image
const out = new PNG({ width, height });

const WHITE_THRESHOLD = 245; // anything brighter than this becomes transparent
const SOFT_EDGE = 30; // smooth falloff window

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (width * y + x) << 2;

    // png may already be RGBA after parse, regardless of source colorType.
    const r = png.data[i];
    const g = png.data[i + 1];
    const b = png.data[i + 2];

    // luminance-ish brightness
    const bright = (r * 0.299 + g * 0.587 + b * 0.114);

    let alpha;
    if (bright >= WHITE_THRESHOLD) {
      alpha = 0;
    } else if (bright >= WHITE_THRESHOLD - SOFT_EDGE) {
      // smooth feather between fully transparent and original
      const t = (WHITE_THRESHOLD - bright) / SOFT_EDGE;
      alpha = Math.round(255 * t);
    } else {
      alpha = 255;
    }

    out.data[i] = r;
    out.data[i + 1] = g;
    out.data[i + 2] = b;
    out.data[i + 3] = alpha;
  }
}

const buffer = PNG.sync.write(out, { colorType: 6 });
fs.writeFileSync(OUT, buffer);

console.log(`Wrote transparent logo (${width}x${height}) → ${path.relative(process.cwd(), OUT)}`);
