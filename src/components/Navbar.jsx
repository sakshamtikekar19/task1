import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';
import GradientButton from './ui/GradientButton';
import Logo from './ui/Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (y) => setScrolled(y > 40));
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <motion.nav
        className={`mx-auto max-w-7xl rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-soft' : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#hero"
            aria-label="Dr. Ritham Debnath — back to top"
            className="flex items-center group py-1"
          >
            <Logo size="xs" showName className="gap-3.5" />
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink/75 hover:text-rose-deep transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-rose-deep scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <GradientButton href="#contact" variant="primary">
              Book Appointment
            </GradientButton>
          </div>

          <button
            type="button"
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl glass text-ink"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-0 top-0 z-40 bg-ink/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute top-24 left-4 right-4 glass-strong rounded-2.5xl p-6 shadow-luxe"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block py-3 px-4 rounded-xl text-base font-medium text-ink hover:bg-rose-blush/40 hover:text-rose-deep transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-rose-gold/30">
                <GradientButton
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Book Appointment
                </GradientButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
