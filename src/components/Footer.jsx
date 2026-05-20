import { Mail, MapPin, Phone } from 'lucide-react';
import { brand, footerLinks, socialLinks } from '../data/content';
import { getIcon } from '../utils/icons';

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-deep to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-start gap-4 mb-5">
              <div className="relative shrink-0">
                <span
                  aria-hidden
                  className="absolute -inset-4 rounded-full bg-rose-deep/30 blur-2xl"
                />
                <img
                  src={LOGO_SRC}
                  alt="Dr. Ritham Debnath logo"
                  className="relative h-16 w-16 object-contain"
                />
              </div>
              <div className="pt-1">
                <p className="font-script text-2xl text-rose-blush leading-none">
                  Dr. Ritham Debnath
                </p>
                <p className="text-[10px] text-white/55 tracking-[0.3em] uppercase mt-2">
                  Consultant Dental Surgeon
                </p>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-6">
              Premium dental care where expertise meets elegance. Your journey to a
              confident, radiant smile starts here.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-rose-deep hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-blush mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quick.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-blush mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-blush mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-rose-soft" />
                <a
                  href={brand.mapDirections}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white leading-relaxed"
                >
                  {brand.addressLines.join(', ')}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-rose-soft" />
                <a href={brand.phoneHref} className="hover:text-white">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-rose-soft" />
                <a href={brand.emailHref} className="hover:text-white break-all">
                  {brand.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/50">{brand.hours.weekdays}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {year} {brand.name}. All rights reserved.</p>
          <p className="font-script text-base text-rose-blush">Crafted with care for lasting smiles.</p>
        </div>
      </div>
    </footer>
  );
}
