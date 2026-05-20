import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import FloatingBlobs from './ui/FloatingBlobs';
import GradientButton from './ui/GradientButton';
import { heroImage } from '../data/content';
import { fadeUp, staggerContainer } from '../utils/motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const fadeOnScroll = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-blush-radial pt-28 pb-16 lg:pb-20"
      aria-label="Hero"
    >
      <FloatingBlobs />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold uppercase tracking-[0.4em] text-rose-deep mb-7"
            >
              Consultant Dental Surgeon · New Delhi
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5rem] font-normal leading-[1.02] text-ink tracking-tightest"
            >
              Expert care.
              <span className="block mt-1.5">
                <span className="italic font-light text-rose-deep">Lasting smiles.</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-base sm:text-lg text-ink-soft max-w-md mx-auto lg:mx-0 leading-[1.75]"
            >
              Quiet luxury meets clinical excellence. Personalised dental care, crafted
              around the way you live, look, and smile.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <GradientButton href="/#contact" variant="primary">
                Book an Appointment
              </GradientButton>
              <GradientButton href="/#services" variant="ghost" icon={ArrowRight}>
                Explore Services
              </GradientButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative mx-auto w-full max-w-sm lg:max-w-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ y: imageY }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] max-h-[600px]">
              <div className="absolute -inset-3 rounded-[2.75rem] border border-rose-soft/40" />
              <div className="absolute inset-0 rounded-[2.25rem] overflow-hidden shadow-luxe">
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="/#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-ink/30 hover:text-rose-deep transition-colors"
        style={{ opacity: fadeOnScroll }}
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
}
