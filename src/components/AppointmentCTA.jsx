import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Phone, MapPin, CheckCircle2, MessageCircle, Navigation } from 'lucide-react';
import GradientButton from './ui/GradientButton';
import { brand, serviceOptions } from '../data/content';
import { fadeUp, viewportOnce } from '../utils/motion';

const initialForm = {
  name: '',
  phone: '',
  service: '',
  date: '',
  message: '',
};

export default function AppointmentCTA() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-14 md:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-4xl bg-rose-gradient p-7 sm:p-10 lg:p-14 shadow-luxe"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <svg
            className="absolute top-0 right-0 w-64 h-64 text-white/10"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M100 20 C140 60 180 80 160 120 C140 160 100 180 60 160 C20 140 20 80 60 40 Z"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 w-48 h-48 text-white/10 rotate-180"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M100 30 Q150 80 120 140 Q80 180 40 120 Q10 60 100 30 Z"
            />
          </svg>

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase">
                Book Now
              </span>
              <h2
                id="contact-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.15]"
              >
                Begin Your Smile
                <span className="block font-script text-4xl sm:text-5xl lg:text-6xl text-rose-blush mt-2">
                  Journey Today
                </span>
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed max-w-md">
                Schedule a consultation and discover personalized treatment plans designed
                exclusively for you. Our team responds within 24 hours.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 text-white/90">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">{brand.hours.weekdays}</p>
                    <p className="text-sm text-white/75">{brand.hours.sunday}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <Phone className="w-5 h-5 shrink-0" />
                  <a
                    href={brand.phoneHref}
                    className="font-medium hover:underline"
                  >
                    {brand.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <a
                    href={brand.mapDirections}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:underline"
                  >
                    {brand.address}
                  </a>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-white text-rose-deep text-sm font-semibold shadow-luxe transition-all hover:scale-[1.03] hover:bg-cream"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={brand.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Chat on WhatsApp"
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-[#25D366] text-white text-sm font-semibold shadow-luxe transition-all hover:scale-[1.03] hover:bg-[#1ebe57]"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={brand.mapDirections}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-white/15 text-white text-sm font-semibold backdrop-blur-sm border border-white/25 transition-all hover:scale-[1.03] hover:bg-white/25"
                >
                  <Navigation className="w-4 h-4" />
                  Directions
                </a>
              </div>
            </div>

            <div className="relative">
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2.5xl p-6 sm:p-8 space-y-4"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-semibold text-ink/70 uppercase tracking-wider">
                      Full Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="mt-1.5 w-full px-4 py-3 rounded-xl border border-rose-gold/40 bg-white/80 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-rose-deep/30 focus:border-rose-deep transition"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-ink/70 uppercase tracking-wider">
                      Phone
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-1.5 w-full px-4 py-3 rounded-xl border border-rose-gold/40 bg-white/80 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-rose-deep/30 focus:border-rose-deep transition"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-semibold text-ink/70 uppercase tracking-wider">
                    Service
                  </span>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full px-4 py-3 rounded-xl border border-rose-gold/40 bg-white/80 text-ink focus:outline-none focus:ring-2 focus:ring-rose-deep/30 focus:border-rose-deep transition"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-ink/70 uppercase tracking-wider">
                    Preferred Date
                  </span>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full px-4 py-3 rounded-xl border border-rose-gold/40 bg-white/80 text-ink focus:outline-none focus:ring-2 focus:ring-rose-deep/30 focus:border-rose-deep transition"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-ink/70 uppercase tracking-wider">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your concerns..."
                    className="mt-1.5 w-full px-4 py-3 rounded-xl border border-rose-gold/40 bg-white/80 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-rose-deep/30 focus:border-rose-deep transition resize-none"
                  />
                </label>

                <GradientButton type="submit" variant="white" className="w-full">
                  Confirm Appointment
                </GradientButton>
              </form>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-medium shadow-luxe whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    role="status"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose-soft" />
                    Request received! We&apos;ll contact you shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
