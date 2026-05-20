import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { brand } from '../data/content';
import { fadeUp, viewportOnce } from '../utils/motion';

export default function LocationMap() {
  return (
    <section id="location" className="py-14 md:py-20" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find the"
          scriptAccent="Clinic"
          subtitle="Conveniently located in Lajpat Nagar, central New Delhi. Tap below to call, message, or get directions instantly."
        />

        <motion.div
          className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="lg:col-span-2 glass rounded-2xl p-5 sm:p-6 shadow-glass border border-rose-gold/30 flex flex-col">
            <div className="flex items-start gap-3.5 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-gradient text-white shadow-luxe">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-rose-deep mb-1 font-semibold">
                  Clinic Address
                </p>
                <address className="not-italic text-ink leading-snug text-sm sm:text-base">
                  {brand.addressLines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>

            <div className="mt-1 space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-ink/80">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-blush/60 text-rose-deep shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <a href={brand.phoneHref} className="font-medium text-[13px] hover:text-rose-deep">
                  {brand.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-ink/80">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-blush/60 text-rose-deep shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </span>
                <span className="text-ink/70 text-[13px]">Replies usually within an hour</span>
              </div>
            </div>

            <div className="mt-auto pt-5 flex flex-col sm:flex-row gap-2.5">
              <a
                href={brand.mapDirections}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] rounded-full bg-rose-gradient text-white text-xs font-semibold shadow-luxe transition-all hover:scale-[1.03]"
              >
                <Navigation className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                Get Directions
              </a>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] rounded-full bg-[#25D366] text-white text-xs font-semibold shadow-soft transition-all hover:scale-[1.03] hover:bg-[#1ebe57]"
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
            className="lg:col-span-3 group relative block rounded-2.5xl overflow-hidden shadow-glass border border-rose-gold/40 bg-rose-blush/40 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
          >
            <iframe
              title="Clinic location map"
              src={brand.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-2 ring-rose-deep/40 transition-all duration-300 rounded-2.5xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-rose-deep text-xs font-semibold shadow-luxe opacity-90 group-hover:opacity-100 group-hover:translate-y-[-2px] transition-all"
            >
              <Navigation className="w-3.5 h-3.5" />
              Open in Google Maps
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
