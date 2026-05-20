import { motion, useReducedMotion } from 'framer-motion';

export default function TiltCard({
  children,
  className = '',
  lift = -3,
  as: Component = motion.div,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Component
      whileHover={
        prefersReducedMotion || lift === 0
          ? undefined
          : { y: lift, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
      }
      className={`relative ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
