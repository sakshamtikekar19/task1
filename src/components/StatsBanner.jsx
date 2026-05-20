import { motion } from 'framer-motion';
import { bigStats } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

const wineBg = {
  background:
    'linear-gradient(135deg, #3D1A22 0%, #5C2A33 40%, #7A2E3A 80%, #A04550 100%)',
};

export default function StatsBanner() {
  return (
    <section aria-label="Clinic by the numbers" className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-4xl p-8 sm:p-12 lg:p-16 shadow-deep [isolation:isolate]"
          style={wineBg}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-rose-deep/40 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-20 w-[32rem] h-[32rem] rounded-full bg-rose-soft/25 blur-3xl"
          />

          <span
            aria-hidden
            className="absolute -top-12 -right-6 font-script text-[12rem] sm:text-[16rem] text-white/[0.07] select-none pointer-events-none leading-none"
          >
            care
          </span>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-white/15 text-rose-blush text-[10px] font-semibold tracking-[0.3em] uppercase backdrop-blur-sm">
                By The Numbers
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.1]">
                A decade of trusted,
                <span className="block font-script text-rose-blush text-4xl sm:text-5xl lg:text-6xl mt-2">
                  premium care.
                </span>
              </h2>
              <p className="mt-5 text-white/80 leading-relaxed max-w-md">
                The numbers reflect what matters most — patients who left smiling and
                returned with confidence.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {bigStats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="border-l-2 border-rose-blush/50 pl-4 sm:pl-6"
                >
                  <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[10px] sm:text-xs text-rose-blush uppercase tracking-[0.25em]">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
