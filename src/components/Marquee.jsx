import { marqueeKeywords } from '../data/content';

const Star = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 sm:w-5 sm:h-5 text-rose-deep shrink-0"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
  </svg>
);

export default function Marquee() {
  const items = [...marqueeKeywords, ...marqueeKeywords];

  return (
    <section
      aria-label="Featured services"
      className="relative border-y border-rose-gold/40 bg-rose-blush/30 overflow-hidden py-6"
    >
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform">
        {items.map((kw, i) => (
          <div key={`${kw}-${i}`} className="flex items-center gap-12">
            <span className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-ink/80">
              {kw}
            </span>
            <Star />
          </div>
        ))}
      </div>
    </section>
  );
}
