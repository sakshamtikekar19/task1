import { motion } from 'framer-motion';
import { hoverLift } from '../../utils/motion';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  as: Component = motion.div,
  ...props
}) {
  const MotionComp = Component;

  return (
    <MotionComp
      className={`glass rounded-2.5xl shadow-glass ${className}`}
      whileHover={hover ? hoverLift : undefined}
      {...props}
    >
      {children}
    </MotionComp>
  );
}
