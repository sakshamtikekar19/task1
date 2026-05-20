import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { stats, aboutImage } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 overflow-hidden lg:overflow-visible">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-2 rounded-[2.25rem] border border-rose-soft/40" />
            <img
              src={aboutImage}
              alt="Dr. Ritham Debnath in clinical setting"
              className="relative w-full aspect-[4/5] object-cover rounded-[2rem] shadow-soft"
              width={700}
              height={875}
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <div className="lg:col-span-7">
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title="A patient-first approach to"
              scriptAccent="modern dentistry"
              align="left"
            />

            <motion.div
              className="space-y-6 text-ink-soft text-base sm:text-[17px] leading-[1.8] max-w-xl -mt-4"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.p variants={fadeUp}>
                Dr. Ritham Debnath is a consultant dental surgeon dedicated to
                world-class oral healthcare — combining advanced clinical
                technology with the calm, considered approach of a private
                studio.
              </motion.p>
              <motion.p variants={fadeUp}>
                Every treatment is thoughtfully planned around you. The result
                is natural, lasting work — and a smile that quietly feels like
                your own again.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 max-w-md"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <p className="font-display text-3xl sm:text-4xl font-normal text-ink leading-none tracking-tightest">
                    {stat.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-ink-soft mt-3">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
