import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-rose-gradient text-white shadow-luxe hover:shadow-[0_30px_60px_-15px_rgba(196,111,120,0.45)]',
  secondary:
    'bg-white/80 text-rose-deep border border-rose-gold/60 hover:bg-white hover:border-rose-deep/40',
  ghost:
    'bg-transparent text-ink border border-ink/15 hover:border-rose-deep/50 hover:text-rose-deep',
  white:
    'bg-white text-rose-deep shadow-luxe hover:shadow-xl hover:bg-cream',
};

const shineByVariant = {
  primary: 'via-white/35',
  secondary: 'via-rose-deep/15',
  ghost: 'via-rose-deep/15',
  white: 'via-rose-deep/15',
};

export default function GradientButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  icon: Icon,
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden';

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent ${shineByVariant[variant]} to-transparent skew-x-[-20deg]`}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && (
          <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.035 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      {content}
    </motion.button>
  );
}
