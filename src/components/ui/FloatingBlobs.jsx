import { motion } from 'framer-motion';

const blobs = [
  {
    className: 'top-24 -left-32 w-[26rem] h-[26rem] bg-rose-blush/70',
    animate: { y: [0, -18, 0], x: [0, 12, 0] },
    duration: 16,
  },
  {
    className: 'bottom-24 -right-24 w-[30rem] h-[30rem] bg-rose-soft/40',
    animate: { y: [0, 20, 0], x: [0, -16, 0] },
    duration: 20,
  },
];

export default function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
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
