import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { faqs } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="py-12 md:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="faq-heading"
          eyebrow="Questions"
          title="Frequently Asked"
          scriptAccent="Questions"
          subtitle="Answers to what patients ask most often before their first visit."
        />

        <motion.div
          className="flex flex-col gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className="glass rounded-2xl shadow-glass border border-rose-gold/30 overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${idx}`}
                    className="w-full flex items-center gap-4 p-4 sm:p-5 text-left min-h-[60px]"
                  >
                    <span className="flex-1 font-semibold text-ink text-[15px] sm:text-base tracking-tight">
                      {item.q}
                    </span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-blush/60 text-rose-deep"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${idx}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 sm:px-5 pb-4 sm:pb-5 -mt-1 text-[14px] text-ink/70 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
