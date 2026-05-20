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
      className="py-12 md:py-16 bg-white/40"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="Our Services"
          title="Comprehensive Dental"
          scriptAccent="Excellence"
          subtitle="From cosmetic transformations to restorative surgery — every treatment is delivered with precision, care, and the latest clinical technology."
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
                className="glass rounded-2xl shadow-glass border border-rose-gold/30 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  className="w-full flex items-center gap-4 p-4 text-left min-h-[60px]"
                  aria-expanded={isOpen}
                  aria-controls={`service-${service.id}`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen
                        ? 'bg-rose-gradient text-white shadow-luxe'
                        : 'bg-rose-blush/60 text-rose-deep'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="flex-1 font-semibold text-ink text-base tracking-tight">
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
                      <div className="px-4 pb-4 pt-1">
                        {service.image && (
                          <div className="relative aspect-[16/10] mb-3 overflow-hidden rounded-xl">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-wine/30 to-transparent" />
                          </div>
                        )}
                        <p className="text-sm text-ink/70 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-rose-deep"
                        >
                          Learn more
                          <ArrowUpRight className="w-4 h-4" />
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
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="[perspective:1200px]"
              >
                <TiltCard
                  className="group glass rounded-2xl p-5 sm:p-6 shadow-glass border border-rose-gold/30 transition-[border-color,box-shadow] duration-500 hover:border-rose-deep/40 hover:shadow-luxe"
                  intensity={6}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-14 -right-14 w-40 h-40 rounded-full bg-rose-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-rose-deep/30 transition-[box-shadow] duration-500 group-hover:[box-shadow:0_0_0_1px_rgba(196,111,120,0.18),inset_0_0_50px_rgba(196,111,120,0.06)]"
                  />

                  <div className="relative">
                    {service.image && (
                      <div className="relative -mx-1 -mt-1 mb-4 aspect-[16/10] overflow-hidden rounded-xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={500}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rose-wine/55 via-rose-wine/10 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-rose-deep shadow-luxe backdrop-blur-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                            <Icon className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    )}

                    <h3 className="text-base font-semibold text-ink mb-1.5 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-ink/65 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2.5 text-xs font-semibold text-rose-deep uppercase tracking-wider"
                    >
                      <span className="relative">
                        Learn more
                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-rose-deep scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                      </span>
                      <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-full border border-rose-gold/60 text-rose-deep overflow-hidden transition-all duration-500 group-hover:border-rose-deep group-hover:bg-rose-deep group-hover:text-white">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-[20deg]" />
                      </span>
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
