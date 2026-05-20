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

  const inputClass =
    'mt-2 w-full px-4 py-3 rounded-xl border border-rose-soft/60 bg-white/90 text-ink placeholder:text-ink-soft/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/20 focus:border-rose-deep transition';

  const labelClass =
    'block text-[10px] font-semibold text-ink-soft uppercase tracking-[0.18em]';

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] bg-rose-blush/60 p-8 sm:p-12 lg:p-16"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-rose-deep mb-4">
                Book a visit
              </p>
              <h2
                id="contact-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-[1.1] tracking-tightest"
              >
                Begin your smile
                <span className="block italic font-light text-rose-deep">
                  journey today.
                </span>
              </h2>
              <p className="mt-5 text-ink-soft leading-[1.75] max-w-md">
                Schedule a consultation and discover a treatment plan designed
                around you. Our team responds within 24 hours.
              </p>

              <ul className="mt-10 space-y-5 text-ink">
                <li className="flex items-start gap-4">
                  <Clock className="w-4 h-4 mt-1 text-rose-deep shrink-0" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-medium">{brand.hours.weekdays}</p>
                    <p className="text-ink-soft mt-0.5">{brand.hours.sunday}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-4 h-4 text-rose-deep shrink-0" />
                  <a
                    href={brand.phoneHref}
                    className="text-sm font-medium hover:text-rose-deep transition-colors"
                  >
                    {brand.phone}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 mt-1 text-rose-deep shrink-0" />
                  <a
                    href={brand.mapDirections}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm leading-relaxed hover:text-rose-deep transition-colors"
                  >
                    {brand.address}
                  </a>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-full bg-ink text-white text-xs font-semibold tracking-wider transition-colors hover:bg-rose-deep"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call now
                </a>
                <a
                  href={brand.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Chat on WhatsApp"
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-full bg-[#25D366] text-white text-xs font-semibold tracking-wider transition-colors hover:bg-[#1ebe57]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
                <a
                  href={brand.mapDirections}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-full border border-ink/15 text-ink text-xs font-semibold tracking-wider transition-colors hover:border-rose-deep hover:text-rose-deep"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Directions
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <form
                onSubmit={handleSubmit}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-7 sm:p-9 space-y-5 shadow-glass"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className={labelClass}>Full Name</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className={labelClass}>Service</span>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className={inputClass}
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
                    <span className={labelClass}>Preferred Date</span>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className={labelClass}>Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your concerns..."
                    className={`${inputClass} resize-none`}
                  />
                </label>

                <GradientButton
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Confirm Appointment
                </GradientButton>
              </form>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-white text-xs font-medium whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    role="status"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-soft" />
                    Request received — we&apos;ll contact you shortly.
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
