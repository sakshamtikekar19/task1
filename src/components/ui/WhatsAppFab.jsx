import { motion } from 'framer-motion';
import { brand } from '../../data/content';

function WhatsAppGlyph(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden {...props}>
      <path d="M16.004 3.2c-7.07 0-12.802 5.732-12.802 12.802 0 2.262.59 4.473 1.71 6.42L3.2 28.8l6.553-1.687a12.78 12.78 0 0 0 6.249 1.605h.006c7.07 0 12.8-5.732 12.802-12.802 0-3.42-1.333-6.635-3.752-9.057-2.42-2.42-5.636-3.659-9.054-3.659zm0 23.36h-.005a10.61 10.61 0 0 1-5.41-1.481l-.388-.231-4.026 1.037 1.075-3.926-.253-.404a10.56 10.56 0 0 1-1.626-5.65c0-5.86 4.77-10.63 10.633-10.63 2.84 0 5.51 1.107 7.516 3.117a10.567 10.567 0 0 1 3.113 7.518c-.003 5.86-4.772 10.63-10.629 10.65zm5.83-7.96c-.32-.16-1.887-.93-2.18-1.036-.292-.107-.504-.16-.717.16-.213.32-.823 1.036-1.008 1.249-.187.213-.373.24-.692.08-.32-.16-1.349-.497-2.57-1.587-.95-.847-1.59-1.893-1.777-2.213-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.717-1.733-.984-2.373-.259-.624-.522-.538-.717-.548-.187-.01-.4-.012-.612-.012-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.572 1.147 3.091 1.307 3.305.16.213 2.255 3.444 5.464 4.83.764.33 1.36.527 1.823.674.766.244 1.464.21 2.014.127.614-.092 1.887-.77 2.153-1.515.266-.747.266-1.386.186-1.516-.08-.133-.293-.213-.612-.373z" />
    </svg>
  );
}

export default function WhatsAppFab() {
  return (
    <motion.a
      href={brand.whatsappHref}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-soft ring-1 ring-white/30"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
    >
      <WhatsAppGlyph className="relative w-6 h-6 sm:w-7 sm:h-7" />
    </motion.a>
  );
}
