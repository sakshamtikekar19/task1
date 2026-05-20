import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { processSteps } from '../data/content';
import { getIcon } from '../utils/icons';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="process-heading"
          eyebrow="The Process"
          title="Your journey to a"
          scriptAccent="brighter smile"
          subtitle="A simple, transparent process — designed to make premium dental care feel effortless from first contact to final reveal."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-14 lg:gap-x-10"
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
                className="text-left"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-display text-4xl font-normal text-rose-soft leading-none">
                    {step.number}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-blush text-rose-deep">
                    <Icon className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="font-display text-xl font-normal text-ink mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[14px] text-ink-soft leading-[1.75] max-w-[18rem]">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
