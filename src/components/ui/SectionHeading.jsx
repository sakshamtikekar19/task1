import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';

export default function SectionHeading({
  id,
  eyebrow,
  title,
  scriptAccent,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'left'
        ? 'text-left'
        : 'text-right';

  return (
    <motion.div
      className={`max-w-2xl mb-12 md:mb-16 ${alignClass}`}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {eyebrow && (
        <p
          className={`text-[10px] font-semibold tracking-[0.35em] uppercase mb-4 ${
            light ? 'text-rose-blush' : 'text-rose-deep'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tightest ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
        {scriptAccent && (
          <span
            className={`italic font-light ${
              light ? 'text-rose-blush' : 'text-rose-deep'
            }`}
          >
            {' '}
            {scriptAccent}.
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-[17px] leading-[1.7] ${
            light ? 'text-white/80' : 'text-ink-soft'
          } ${align === 'center' ? 'max-w-xl mx-auto' : 'max-w-xl'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
