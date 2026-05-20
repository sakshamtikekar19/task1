import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brand, footerLinks, socialLinks } from '../data/content';
import { getIcon } from '../utils/icons';

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

function FooterLink({ link, className }) {
  if (link.kind === 'route') {
    return (
      <Link to={link.to} className={className}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.to} className={className}>
      {link.label}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const heading =
    'text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-deep mb-5';
  const link =
    'text-[13px] text-ink-soft hover:text-rose-deep transition-colors';

  return (
    <footer className="relative bg-cream text-ink border-t border-rose-soft/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-start gap-3 mb-5">
              <img
                src={LOGO_SRC}
                alt="Dr. Ritham Debnath logo"
                className="h-10 w-10 object-contain shrink-0"
              />
              <div className="pt-0.5">
                <p className="font-display text-base text-ink leading-tight tracking-tight">
                  Dr. Ritham Debnath
                </p>
                <p className="text-[9px] text-ink-soft tracking-[0.3em] uppercase mt-1.5">
                  Consultant Dental Surgeon
                </p>
              </div>
            </div>
            <p className="text-[13.5px] text-ink-soft leading-[1.75] mb-6 max-w-[16rem]">
              Quiet luxury meets clinical excellence — personalised dental care
              for the way you live.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noreferrer noopener' : undefined}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-rose-soft text-rose-deep hover:bg-rose-blush transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className={heading}>Visit</h3>
            <ul className="space-y-2.5">
              {footerLinks.quick.map((l) => (
                <li key={l.label}>
                  <FooterLink link={l} className={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <FooterLink link={l} className={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Contact</h3>
            <ul className="space-y-3 text-[13px] text-ink-soft">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 mt-1 shrink-0 text-rose-deep" />
                <a
                  href={brand.mapDirections}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-rose-deep leading-relaxed"
                >
                  {brand.addressLines.join(', ')}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 shrink-0 text-rose-deep" />
                <a href={brand.phoneHref} className="hover:text-rose-deep">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 shrink-0 text-rose-deep" />
                <a
                  href={brand.emailHref}
                  className="hover:text-rose-deep break-all"
                >
                  {brand.email}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-[11px] text-ink-soft/80 leading-relaxed">
              {brand.hours.weekdays}
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-rose-soft/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-ink-soft">
          <p>© {year} {brand.name}. All rights reserved.</p>
          <p className="italic text-rose-deep">
            Crafted with care for lasting smiles.
          </p>
        </div>
      </div>
    </footer>
  );
}
