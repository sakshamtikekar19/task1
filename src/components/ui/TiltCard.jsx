import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';

const SPRING = { stiffness: 180, damping: 22, mass: 0.5 };

export default function TiltCard({
  children,
  className = '',
  intensity = 6,
  spotlight = true,
  spotlightColor = 'rgba(196,111,120,0.22)',
  spotlightSize = 420,
  lift = -8,
  as: Component = motion.div,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(tiltY, [-0.5, 0.5], [intensity, -intensity]),
    SPRING,
  );
  const rotateY = useSpring(
    useTransform(tiltX, [-0.5, 0.5], [-intensity, intensity]),
    SPRING,
  );

  const spotlightBg = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${mouseX}% ${mouseY}%, ${spotlightColor}, transparent 60%)`;

  const handleMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    tiltX.set(xPct - 0.5);
    tiltY.set(yPct - 0.5);
    mouseX.set(xPct * 100);
    mouseY.set(yPct * 100);
  };

  const handleEnter = () => {
    if (prefersReducedMotion) return;
    glowOpacity.set(1);
  };

  const handleLeave = () => {
    glowOpacity.set(0);
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 1200 }
      }
      whileHover={prefersReducedMotion || lift === 0 ? undefined : { y: lift }}
      transition={{ y: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
      className={`relative overflow-hidden will-change-transform ${className}`}
      {...rest}
    >
      {spotlight && !prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlightBg, opacity: glowOpacity }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </Component>
  );
}
