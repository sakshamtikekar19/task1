import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { faqs } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <SectionHeading
          id="faq-heading"
          eyebrow="Questions"
          title="Frequently asked"
          scriptAccent="questions"
          subtitle="Answers to what patients ask most often before their first visit."
        />

        <motion.div
          className="flex flex-col divide-y divide-rose-soft/40 border-y border-rose-soft/40"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <motion.div key={item.q} variants={fadeUp}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${idx}`}
                    className="w-full flex items-center gap-5 py-6 text-left group"
                  >
                    <span className="flex-1 font-display text-lg sm:text-xl font-normal text-ink tracking-tight pr-4">
                      {item.q}
                    </span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rose-soft text-rose-deep group-hover:bg-rose-blush transition-colors duration-300"
                    >
                      <Plus className="w-4 h-4" />
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
                      <p className="pb-6 -mt-2 pr-12 text-[14.5px] text-ink-soft leading-[1.75]">
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
