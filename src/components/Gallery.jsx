import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { gallery } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 md:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="gallery-heading"
          eyebrow="Gallery"
          title="Inside the"
          scriptAccent="clinic"
          subtitle="A glimpse into our serene environment, advanced facilities, and the beautiful transformations created here every day."
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[220px] gap-3 sm:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {gallery.map((item) => (
            <motion.figure
              key={item.id}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-wine/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <figcaption className="text-white font-display text-sm sm:text-base translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {item.caption}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
