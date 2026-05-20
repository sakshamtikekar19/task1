import { marqueeKeywords } from '../data/content';

export default function Marquee() {
  const items = [...marqueeKeywords, ...marqueeKeywords];

  return (
    <section
      aria-label="Featured services"
      className="relative border-y border-rose-soft/40 bg-cream overflow-hidden py-7"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee gap-14 whitespace-nowrap will-change-transform">
        {items.map((kw, i) => (
          <div key={`${kw}-${i}`} className="flex items-center gap-14">
            <span className="font-display italic text-xl sm:text-2xl lg:text-[1.75rem] font-light text-ink/85 tracking-tight">
              {kw}
            </span>
            <span
              aria-hidden
              className="block w-1.5 h-1.5 rounded-full bg-rose-deep shrink-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
