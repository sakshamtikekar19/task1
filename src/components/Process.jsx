import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { processSteps } from '../data/content';
import { getIcon } from '../utils/icons';
import { fadeUp, staggerContainer, viewportOnce, hoverLift } from '../utils/motion';

export default function Process() {
  return (
    <section id="process" className="py-12 md:py-16" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="process-heading"
          eyebrow="How It Works"
          title="Your Journey to a"
          scriptAccent="Brighter Smile"
          subtitle="A simple, transparent process designed to make premium dental care feel effortless from first contact to final reveal."
        />

        <div className="relative">
          <span
            aria-hidden
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent"
          />

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {processSteps.map((step) => {
              const Icon = getIcon(step.icon);
              return (
                <motion.article
                  key={step.number}
                  variants={fadeUp}
                  whileHover={hoverLift}
                  className="relative text-center"
                >
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-rose-blush/60" />
                    <div className="absolute inset-2 rounded-full bg-white shadow-soft flex items-center justify-center">
                      <Icon className="w-9 h-9 text-rose-deep" />
                    </div>
                    <span className="absolute -top-2 -right-2 font-display text-sm font-bold text-white bg-rose-gradient rounded-full h-9 w-9 flex items-center justify-center shadow-luxe">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
