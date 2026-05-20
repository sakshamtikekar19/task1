import { Link } from 'react-router-dom';
import GradientButton from '../components/ui/GradientButton';

export default function PageCTA() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center glass rounded-3xl p-8 sm:p-12 shadow-soft border border-rose-gold/30">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-deep mb-3">
          Ready to begin
        </p>
        <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
          Book your consultation today
        </h2>
        <p className="text-ink/65 mb-6 text-sm sm:text-base">
          Our team responds within 24 hours. We'll craft a plan around your smile, comfort, and schedule.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/#contact">
            <GradientButton variant="primary">Book Appointment</GradientButton>
          </Link>
          <Link to="/">
            <GradientButton variant="ghost">Back to Home</GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
