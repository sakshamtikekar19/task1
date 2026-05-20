import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, CalendarCheck, Play, ChevronDown } from 'lucide-react';
import FloatingBlobs from './ui/FloatingBlobs';
import GradientButton from './ui/GradientButton';
import { heroImage } from '../data/content';
import { fadeUp, staggerContainer } from '../utils/motion';

const floatCard = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const fadeOnScroll = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-blush-radial pt-24 pb-12 lg:pb-16"
      aria-label="Hero"
    >
      <FloatingBlobs />

      <span
        aria-hidden
        className="hidden lg:block absolute -bottom-10 left-0 font-display italic text-[10rem] xl:text-[14rem] text-outline opacity-30 leading-none pointer-events-none select-none -translate-x-6"
      >
        smile
      </span>
      <span
        aria-hidden
        className="hidden lg:block absolute top-32 right-6 font-script text-[6rem] xl:text-[8rem] text-rose-deep/15 leading-none pointer-events-none select-none"
      >
        care
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            style={{ y: textY }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[0.95] text-ink tracking-tight"
            >
              Expert Care.
              <span className="block mt-3">
                <span className="font-script text-rose-deep text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] leading-none">
                  Lasting
                </span>{' '}
                <span className="italic">Smiles.</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-base sm:text-lg text-ink/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Where clinical excellence meets quiet luxury. Personalized dental experiences,
              crafted entirely around the way you live, look, and smile.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <GradientButton href="#contact" variant="primary">
                Book Appointment
              </GradientButton>
              <GradientButton href="#services" variant="ghost" icon={ArrowRight}>
                Explore Services
              </GradientButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { v: '12+', l: 'Years' },
                { v: '5000+', l: 'Smiles' },
                { v: '4.9★', l: 'Rated' },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className={`text-center lg:text-left ${
                    i > 0 ? 'border-l border-rose-gold/50 pl-4 sm:pl-8' : ''
                  }`}
                >
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-rose-deep">
                    {s.v}
                  </p>
                  <p className="text-[10px] text-ink/55 uppercase tracking-[0.2em] mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative mx-auto w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y: imageY }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] max-h-[560px] lg:max-h-[640px]">
              <div className="absolute -inset-6 rounded-[3rem] bg-rose-gradient opacity-25 blur-3xl" />
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-luxe">
                <img
                  src={heroImage}
                  alt="Dr. Ritham Debnath, Consultant Dental Surgeon"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1250}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-wine/40 via-transparent to-transparent" />
              </div>

              <motion.div
                className="absolute -left-2 sm:-left-10 top-6 sm:top-10 glass-strong rounded-2xl p-3 sm:p-4 shadow-soft"
                variants={floatCard}
                animate="animate"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-rose-deep text-rose-deep" />
                  ))}
                </div>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-ink">4.9 Rating</p>
                <p className="text-[10px] sm:text-xs text-ink/60">600+ reviews</p>
              </motion.div>

              <motion.div
                className="absolute -right-2 sm:-right-8 top-1/3 glass-strong rounded-2xl p-3 sm:p-4 shadow-soft"
                variants={floatCard}
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-rose-gradient">
                    <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-ink">Next Available</p>
                    <p className="text-[10px] sm:text-xs text-rose-deep">Today, 4:30 PM</p>
                  </div>
                </div>
              </motion.div>

              <motion.a
                href="/gallery"
                className="absolute right-6 bottom-6 group flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                aria-label="View clinic gallery"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-rose-deep shadow-luxe group-hover:bg-rose-deep group-hover:text-white transition-colors">
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </span>
                <span className="hidden sm:block text-xs font-semibold uppercase tracking-[0.25em] text-white drop-shadow-md">
                  Clinic Tour
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-ink/40 hover:text-rose-deep transition-colors"
        style={{ opacity: fadeOnScroll }}
        animate={{ y: [0, 8, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity } }}
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
