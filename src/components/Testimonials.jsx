import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import { testimonials } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-rose-blush/40"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="Stories from"
          scriptAccent="our patients"
          subtitle="Real experiences from people who trusted us with their smiles."
        />

        <motion.div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:pb-0 md:mx-0 md:px-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="min-w-[320px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink"
            >
              <TiltCard className="group h-full glass-strong rounded-3xl p-8 transition-shadow duration-500 hover:shadow-soft flex flex-col">
                <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-rose-deep text-rose-deep"
                    />
                  ))}
                </div>

                <blockquote className="font-display text-[18px] leading-[1.6] text-ink italic mb-7 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-5 border-t border-rose-soft/40">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-medium text-ink text-sm">{t.name}</p>
                    <p className="text-[10px] text-ink-soft tracking-[0.18em] uppercase mt-0.5">
                      {t.treatment}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl font-normal text-ink">4.9</span>
            <span className="text-ink-soft text-sm">/ 5</span>
          </div>
          <span className="hidden sm:block w-px h-8 bg-rose-soft" />
          <p className="text-sm text-ink-soft">
            from <span className="text-ink font-medium">600+</span> verified patient reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
