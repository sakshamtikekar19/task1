import { Mail, MapPin, Phone } from 'lucide-react';
import { brand, footerLinks, socialLinks } from '../data/content';
import { getIcon } from '../utils/icons';

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-cream text-ink">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-deep/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-9 lg:py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          <div>
            <div className="flex items-start gap-3 mb-3">
              <div className="relative shrink-0">
                <span
                  aria-hidden
                  className="absolute -inset-3 rounded-full bg-rose-deep/15 blur-xl"
                />
                <img
                  src={LOGO_SRC}
                  alt="Dr. Ritham Debnath logo"
                  className="relative h-11 w-11 object-contain"
                />
              </div>
              <div className="pt-0.5">
                <p className="font-script text-lg text-rose-deep leading-none">
                  Dr. Ritham Debnath
                </p>
                <p className="text-[9px] text-ink/55 tracking-[0.3em] uppercase mt-1.5">
                  Consultant Dental Surgeon
                </p>
              </div>
            </div>
            <p className="text-[13px] text-ink/65 leading-relaxed mb-4">
              Premium dental care where expertise meets elegance.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-blush/50 text-rose-deep hover:bg-rose-gradient hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-deep mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1.5">
              {footerLinks.quick.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-ink/65 hover:text-rose-deep transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-deep mb-3">
              Services
            </h3>
            <ul className="space-y-1.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-ink/65 hover:text-rose-deep transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-deep mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-[13px] text-ink/65">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-rose-deep" />
                <a
                  href={brand.mapDirections}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-rose-deep leading-relaxed"
                >
                  {brand.addressLines.join(', ')}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0 text-rose-deep" />
                <a href={brand.phoneHref} className="hover:text-rose-deep">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0 text-rose-deep" />
                <a href={brand.emailHref} className="hover:text-rose-deep break-all">
                  {brand.email}
                </a>
              </li>
            </ul>
            <p className="mt-3 text-[11px] text-ink/50">{brand.hours.weekdays}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-rose-gold/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-ink/55">
          <p>© {year} {brand.name}. All rights reserved.</p>
          <p className="font-script text-sm text-rose-deep">Crafted with care for lasting smiles.</p>
        </div>
      </div>
    </footer>
  );
}
