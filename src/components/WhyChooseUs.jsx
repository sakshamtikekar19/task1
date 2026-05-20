import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import { whyChooseUs } from '../data/content';
import { getIcon } from '../utils/icons';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-14 md:py-20"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Standard of"
          scriptAccent="Premium Care"
          subtitle="We redefine dental experiences through technology, expertise, and an environment designed for your complete comfort."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {whyChooseUs.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="[perspective:1200px]"
              >
                <TiltCard
                  className="group glass rounded-2xl p-5 pl-6 shadow-glass h-full transition-[border-color,box-shadow] duration-500"
                  intensity={5}
                  spotlightColor="rgba(216,144,154,0.2)"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-rose-gradient origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />

                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-rose-blush/0 group-hover:bg-rose-blush/60 blur-3xl transition-colors duration-700"
                    animate={{ rotate: [0, 25, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <div className="relative">
                    <span className="font-display text-4xl font-medium text-rose-gold/40 transition-colors duration-500 group-hover:text-rose-deep/70">
                      {item.number}
                    </span>

                    <div className="relative mt-3 mb-3 inline-flex">
                      <span className="absolute inset-0 rounded-lg bg-rose-deep/50 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-rose-gradient text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(196,111,120,0.55)]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-semibold text-ink mb-1.5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-ink/65 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
