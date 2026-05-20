import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function PageHeader() {
  return (
    <div className="pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.3em] uppercase text-ink-soft hover:text-rose-deep transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
