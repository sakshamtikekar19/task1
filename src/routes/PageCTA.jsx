import { Link } from 'react-router-dom';
import GradientButton from '../components/ui/GradientButton';

export default function PageCTA() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-rose-deep mb-4">
          Ready to begin
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-5 tracking-tightest font-normal leading-[1.15]">
          Book your consultation
          <span className="italic font-light text-rose-deep"> today.</span>
        </h2>
        <p className="text-ink-soft mb-9 text-base max-w-xl mx-auto leading-[1.75]">
          Our team responds within 24 hours — with a plan built around your
          smile, comfort, and schedule.
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
