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
                  className="group glass rounded-2xl shadow-glass h-full overflow-hidden transition-[border-color,box-shadow] duration-500"
                  intensity={5}
                  spotlightColor="rgba(216,144,154,0.2)"
                >
                  {item.image && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={450}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-wine/70 via-rose-wine/15 to-transparent" />
                      <span className="absolute top-2 left-3 font-display text-3xl font-medium text-white/85 drop-shadow-md">
                        {item.number}
                      </span>
                      <div className="absolute bottom-2 left-3 flex items-center gap-2">
                        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-rose-deep shadow-luxe transition-all duration-500 group-hover:bg-rose-gradient group-hover:text-white group-hover:-rotate-6 group-hover:scale-110">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  )}

                  <span
                    aria-hidden
                    className="absolute left-0 top-1/3 bottom-1/3 w-[3px] rounded-full bg-rose-gradient origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />

                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-rose-blush/0 group-hover:bg-rose-blush/60 blur-3xl transition-colors duration-700"
                    animate={{ rotate: [0, 25, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <div className="relative p-5">
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
