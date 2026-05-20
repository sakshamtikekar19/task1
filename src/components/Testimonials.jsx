import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import { testimonials } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

const starVariants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -25 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.15 + i * 0.07,
      type: 'spring',
      stiffness: 320,
      damping: 18,
    },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 bg-white/40"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="Stories From Our"
          scriptAccent="Patients"
          subtitle="Real experiences from people who trusted us with their smiles."
        />

        <motion.div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="min-w-[300px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink [perspective:1200px]"
            >
              <TiltCard
                className="group h-full glass rounded-2xl p-6 shadow-glass border border-rose-gold/30 hover:border-rose-deep/40 transition-[border-color,box-shadow] duration-500 hover:shadow-luxe"
                intensity={5}
                spotlightSize={420}
              >
                <Quote
                  aria-hidden
                  className="absolute top-4 right-4 w-10 h-10 text-rose-blush/60 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:text-rose-soft/80"
                  strokeWidth={1.2}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-14 -left-8 w-40 h-40 rounded-full bg-rose-soft/0 group-hover:bg-rose-soft/30 blur-3xl transition-colors duration-700"
                />

                <div className="relative">
                  <motion.div
                    className="flex gap-1 mb-4"
                    role="img"
                    aria-label={`${t.rating} out of 5 stars`}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {[...Array(t.rating)].map((_, i) => (
                      <motion.span key={i} custom={i} variants={starVariants}>
                        <Star className="w-3.5 h-3.5 fill-rose-deep text-rose-deep transition-transform duration-300 group-hover:scale-110" />
                      </motion.span>
                    ))}
                  </motion.div>

                  <blockquote className="text-ink/80 italic leading-relaxed mb-5 text-[13.5px]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-3 pt-4 border-t border-rose-gold/20">
                    <div className="relative">
                      <span className="absolute -inset-0.5 rounded-full bg-rose-gradient opacity-0 blur transition-opacity duration-500 group-hover:opacity-60" />
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="relative w-10 h-10 rounded-full object-cover ring-2 ring-rose-gold/50 transition-all duration-500 group-hover:ring-rose-deep group-hover:ring-[3px]"
                        width={40}
                        height={40}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{t.name}</p>
                      <p className="text-[10px] text-rose-deep tracking-[0.2em] uppercase">
                        {t.treatment}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 glass rounded-full px-8 py-5 max-w-md mx-auto shadow-soft"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl font-semibold text-rose-deep">4.9</span>
            <span className="text-ink/60">/ 5</span>
          </div>
          <span className="hidden sm:block w-px h-8 bg-rose-gold/60" />
          <p className="text-sm text-ink/70 text-center sm:text-left">
            from <strong className="text-ink">600+</strong> verified patient reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
