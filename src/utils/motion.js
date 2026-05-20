export const easePremium = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: easePremium },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const viewportOnce = { once: false, margin: '-80px', amount: 0.15 };

export const fadeDown = {
  hidden: { opacity: 0, y: -25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easePremium },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: easePremium },
  },
};

export const hoverLift = {
  y: -6,
  scale: 1.02,
  transition: { duration: 0.3, ease: easePremium },
};
