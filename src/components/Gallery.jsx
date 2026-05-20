import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { gallery } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-20" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Our Clinic &"
          scriptAccent="Smiles"
          subtitle="A glimpse into our serene environment, advanced facilities, and the beautiful transformations we create every day."
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-3 sm:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {gallery.map((item) => (
            <motion.figure
              key={item.id}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-2.5xl ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-rose-deep/0 group-hover:bg-rose-deep/50 transition-colors duration-300 flex items-end justify-start p-4 sm:p-6">
                <figcaption className="text-white font-semibold text-sm sm:text-base opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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
