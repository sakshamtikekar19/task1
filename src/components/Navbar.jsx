import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { brand, navLinks } from '../data/content';
import GradientButton from './ui/GradientButton';
import Logo from './ui/Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    return scrollY.on('change', (y) => setScrolled(y > 40));
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const closeMenu = () => setOpen(false);

  const handleAnchor = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `/${hash}`);
      closeMenu();
    } else {
      e.preventDefault();
      navigate(`/${hash}`);
      closeMenu();
    }
  };

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
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <Link
            to="/"
            aria-label="Dr. Ritham Debnath — back to home"
            className="flex items-center group py-1"
            onClick={closeMenu}
          >
            <Logo size="xs" showName className="gap-3.5" />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <GradientButton href="/#contact" variant="primary">
                Book Appointment
              </GradientButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="primary-menu"
              className="relative flex h-11 w-11 items-center justify-center rounded-xl glass text-ink hover:text-rose-deep transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-0 z-40 bg-ink/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            aria-hidden
          >
            <motion.div
              id="primary-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="absolute top-20 right-4 sm:right-6 lg:right-8 w-[calc(100%-2rem)] sm:w-[420px] glass-strong rounded-2.5xl p-6 shadow-luxe"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-deep mb-3">
                Menu
              </p>
              <ul className="flex flex-col gap-0.5">
                {navLinks.map((link, i) => {
                  const isAnchor = link.kind === 'anchor';
                  const counter = String(i + 1).padStart(2, '0');

                  if (isAnchor) {
                    const hash = link.to.split('#')[1];
                    return (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.03, duration: 0.22 }}
                      >
                        <a
                          href={`#${hash}`}
                          onClick={(e) => handleAnchor(e, `#${hash}`)}
                          className="flex items-center justify-between py-2.5 px-4 rounded-xl text-[15px] font-medium text-ink hover:bg-rose-blush/40 hover:text-rose-deep transition-colors"
                        >
                          <span>{link.label}</span>
                          <span aria-hidden className="font-script text-rose-deep/40 text-lg">
                            {counter}
                          </span>
                        </a>
                      </motion.li>
                    );
                  }
                  return (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.03, duration: 0.22 }}
                    >
                      <Link
                        to={link.to}
                        onClick={closeMenu}
                        className="flex items-center justify-between py-2.5 px-4 rounded-xl text-[15px] font-medium text-ink hover:bg-rose-blush/40 hover:text-rose-deep transition-colors"
                      >
                        <span>{link.label}</span>
                        <span aria-hidden className="font-script text-rose-deep/40 text-lg">
                          {counter}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-4 pt-4 border-t border-rose-gold/30 space-y-3">
                <a
                  href="/#contact"
                  onClick={closeMenu}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden w-full bg-rose-gradient text-white shadow-luxe hover:shadow-[0_30px_60px_-15px_rgba(196,111,120,0.45)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-20deg]"
                  />
                  <span className="relative z-10">Book Appointment</span>
                </a>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <a
                    href={brand.phoneHref}
                    onClick={closeMenu}
                    className="text-center py-2 rounded-full bg-rose-blush/50 text-rose-deep font-semibold hover:bg-rose-blush"
                  >
                    Call
                  </a>
                  <a
                    href={brand.whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={closeMenu}
                    className="text-center py-2 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe57]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
