import { motion } from 'framer-motion';
import { bigStats } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function StatsBanner() {
  return (
    <section aria-label="Clinic by the numbers" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] bg-rose-blush/50 px-8 sm:px-12 lg:px-16 py-14 lg:py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-rose-deep mb-4">
                By the numbers
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-[1.1] tracking-tightest">
                A decade of trusted,
                <span className="block italic font-light text-rose-deep">
                  premium care.
                </span>
              </h2>
              <p className="mt-5 text-ink-soft leading-[1.75] max-w-md text-base">
                The numbers reflect what matters most — patients who left
                smiling and returned with confidence.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-x-10 gap-y-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {bigStats.map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <p className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-normal text-ink leading-none tracking-tightest">
                    {s.value}
                  </p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
