import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import { stats, aboutImage } from '../data/content';
import { getIcon } from '../utils/icons';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden lg:overflow-visible">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              className="absolute -top-6 -left-6 w-32 h-32 text-rose-gold/40"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden
            >
              <path
                d="M10 50 Q50 10 90 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className="absolute -inset-3 rounded-4xl border-2 border-rose-gold/50" />
            <img
              src={aboutImage}
              alt="Dr. Ritham Debnath in clinical setting"
              className="relative w-full aspect-[4/5] object-cover rounded-4xl shadow-luxe"
              width={700}
              height={875}
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <div>
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title="Meet"
              scriptAccent="Dr. Ritham Debnath"
              subtitle="A trusted consultant dental surgeon dedicated to delivering world-class oral healthcare with compassion, precision, and an unwavering commitment to patient comfort."
              align="left"
            />

            <motion.p
              className="text-ink/70 leading-relaxed mb-8 -mt-6"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              With over a decade of surgical expertise, Dr. Debnath combines advanced
              technology with a patient-first philosophy. Every treatment is thoughtfully
              planned to ensure natural, lasting results — because your smile deserves
              nothing less than excellence.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {stats.map((stat) => {
                const Icon = getIcon(stat.icon);
                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className="[perspective:1100px]"
                  >
                    <TiltCard
                      className="group glass rounded-xl p-4 shadow-glass h-full border border-rose-gold/30 hover:border-rose-deep/40 transition-colors duration-500"
                      intensity={4}
                      spotlightSize={260}
                    >
                      <div className="relative inline-flex mb-2.5">
                        <span className="absolute inset-0 rounded-lg bg-rose-deep/40 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-rose-blush/60 text-rose-deep transition-all duration-500 group-hover:bg-rose-gradient group-hover:text-white group-hover:scale-110">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <p className="font-display text-xl font-bold text-rose-deep">
                        {stat.value}
                      </p>
                      <p className="text-xs text-ink/65 mt-0.5">{stat.label}</p>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
