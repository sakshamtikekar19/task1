import { motion } from 'framer-motion';

const blobs = [
  {
    className: 'top-20 -left-24 w-[22rem] h-[22rem] bg-rose-soft/35',
    animate: { y: [0, -30, 0], x: [0, 24, 0], scale: [1, 1.05, 1] },
    duration: 11,
  },
  {
    className: 'top-1/3 -right-16 w-[28rem] h-[28rem] bg-rose-deep/15',
    animate: { y: [0, 40, 0], x: [0, -28, 0], scale: [1, 1.08, 1] },
    duration: 14,
  },
  {
    className: 'bottom-16 left-1/4 w-[18rem] h-[18rem] bg-rose-gold/45',
    animate: { y: [0, -22, 0], rotate: [0, 18, 0], scale: [1, 1.06, 1] },
    duration: 9,
  },
];

export default function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
