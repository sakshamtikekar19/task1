import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function PageHeader() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.3em] uppercase text-rose-deep hover:text-rose-wine transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
