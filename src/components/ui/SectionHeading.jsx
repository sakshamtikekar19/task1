import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';

export default function SectionHeading({
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
      className={`max-w-2xl mb-9 md:mb-12 ${alignClass}`}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {eyebrow && (
        <span
          className={`inline-block mb-4 px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase ${
            light
              ? 'bg-white/20 text-white'
              : 'bg-rose-blush/60 text-rose-deep'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
        {scriptAccent && (
          <span
            className={`block font-script text-4xl sm:text-5xl lg:text-6xl mt-2 ${
              light ? 'text-rose-blush' : 'text-rose-deep'
            }`}
          >
            {scriptAccent}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-white/85' : 'text-ink/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
