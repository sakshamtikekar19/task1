import { MapPin, Navigation, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { brand } from '../data/content';

export default function LocationMap() {
  return (
    <section
      id="location"
      className="py-24 md:py-32"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="location-heading"
          eyebrow="Visit Us"
          title="Find the"
          scriptAccent="clinic"
          subtitle="Conveniently located in Lajpat Nagar, central New Delhi. Tap below to call, message, or get directions."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-2 glass-strong rounded-3xl p-8 flex flex-col">
            <div className="flex items-start gap-4 mb-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-blush text-rose-deep">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-rose-deep mb-2 font-semibold">
                  Clinic Address
                </p>
                <address className="not-italic text-ink leading-relaxed text-[15px]">
                  {brand.addressLines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-blush text-rose-deep shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <a
                  href={brand.phoneHref}
                  className="font-medium hover:text-rose-deep transition-colors"
                >
                  {brand.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-ink-soft">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-blush text-rose-deep shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </span>
                <span>Replies usually within an hour</span>
              </div>
            </div>

            <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={brand.mapDirections}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-ink text-white text-xs font-semibold tracking-wider transition-colors hover:bg-rose-deep"
              >
                <Navigation className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                Get Directions
              </a>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-[#25D366] text-white text-xs font-semibold tracking-wider transition-colors hover:bg-[#1ebe57]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          <a
            href={brand.mapDirections}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open directions in Google Maps"
            className="lg:col-span-3 group relative block rounded-3xl overflow-hidden border border-rose-soft/40 bg-rose-blush/40 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
          >
            <iframe
              title="Clinic location map"
              src={brand.mapEmbed}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-ink text-xs font-semibold transition-all opacity-95 group-hover:opacity-100"
            >
              <Navigation className="w-3.5 h-3.5 text-rose-deep" />
              Open in Google Maps
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
