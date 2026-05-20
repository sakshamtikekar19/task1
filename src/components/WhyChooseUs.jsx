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
      className="py-24 md:py-32"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="why-us-heading"
          eyebrow="Why Choose Us"
          title="A standard of"
          scriptAccent="quiet excellence"
          subtitle="We redefine the dental experience through technology, expertise, and an environment built around your comfort."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {whyChooseUs.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div key={item.number} variants={fadeUp}>
                <TiltCard className="group h-full glass-strong rounded-3xl overflow-hidden transition-shadow duration-500 hover:shadow-soft">
                  {item.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={500}
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-blush text-rose-deep">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-display text-sm text-rose-deep tracking-widest">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-normal text-ink mb-2.5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-ink-soft leading-[1.7]">
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
