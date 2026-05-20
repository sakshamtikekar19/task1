import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import { services } from '../data/content';
import { getIcon } from '../utils/icons';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function Services() {
  const [openId, setOpenId] = useState(services[0].id);

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-rose-blush/40"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Treatments crafted with"
          scriptAccent="quiet precision"
          subtitle="From cosmetic refinement to restorative surgery, each treatment is delivered with the latest clinical technology and unhurried care."
          align="left"
        />

        {/* Mobile: accordion */}
        <motion.div
          className="sm:hidden flex flex-col gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            const isOpen = openId === service.id;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="glass-strong rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left min-h-[64px]"
                  aria-expanded={isOpen}
                  aria-controls={`service-${service.id}`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isOpen
                        ? 'bg-rose-deep text-white'
                        : 'bg-rose-blush text-rose-deep'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="flex-1 font-display text-lg font-normal text-ink tracking-tight">
                    {service.title}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-rose-deep"
                    aria-hidden
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-${service.id}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        {service.image && (
                          <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-xl">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        )}
                        <p className="text-[14px] text-ink-soft leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-deep"
                        >
                          Book consult
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tablet / Desktop: grid */}
        <motion.div
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <TiltCard className="group h-full glass-strong rounded-3xl overflow-hidden transition-shadow duration-500 hover:shadow-soft">
                  {service.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={500}
                      />
                    </div>
                  )}

                  <div className="p-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-blush text-rose-deep mb-5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-xl font-normal text-ink mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-ink-soft leading-[1.7] mb-6">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-rose-deep uppercase tracking-[0.18em] transition-colors hover:text-rose-dark"
                    >
                      Book consult
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
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
