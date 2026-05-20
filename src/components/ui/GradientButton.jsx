import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-rose-deep text-white shadow-soft hover:bg-rose-dark hover:shadow-luxe',
  secondary:
    'bg-cream text-rose-deep border border-rose-soft hover:border-rose-deep',
  ghost:
    'bg-transparent text-ink border border-ink/15 hover:border-rose-deep hover:text-rose-deep',
  white: 'bg-white text-rose-deep shadow-soft hover:bg-cream',
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
    'group inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300';

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.button>
  );
}
