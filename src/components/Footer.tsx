import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { ExternalLink, Mail, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Tjänster', href: '#tjanster' },
    { label: 'För företag', href: '#installationspartner' },
    { label: 'Kapacitet', href: '#kapacitet' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#001D33] text-slate-300 py-6 sm:py-8 border-t border-white/10 overflow-hidden"
      aria-label="Webbplatsens sidfot"
      style={{
        paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
          
          {/* Brand & Socials Column */}
          <div className="flex flex-col items-start max-w-sm">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xs mb-2 block"
              aria-label="NEXE SOLAR Startsida"
            >
              <Logo variant="light" size="sm" />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Professionell installationspartner för solceller, DC-kablage och service i hela Sverige.
            </p>

            {/* Parent company and social links */}
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://nexegroup.se"
                target="_blank"
                rel="noopener noreferrer"
                translate="no"
                className="notranslate inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors underline decoration-slate-600 underline-offset-2"
              >
                <span>NEXE GROUP AB</span>
                <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
              </a>

              <span className="text-white/20 text-xs hidden xs:inline" aria-hidden="true">|</span>

              {/* Social Profiles: LinkedIn & Instagram */}
              <div className="inline-flex items-center gap-1.5">
                <a
                  href="https://www.linkedin.com/company/nexe-group-ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notranslate inline-flex items-center justify-center p-1.5 rounded-full border border-slate-200/90 bg-slate-50/90 hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/50 text-slate-600 hover:text-[#0A66C2] transition-all duration-200 shadow-xs hover:shadow-sm hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  translate="no"
                  aria-label="Besök NEXE GROUP AB på LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="https://www.instagram.com/nexegroupab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notranslate inline-flex items-center justify-center p-1.5 rounded-full border border-slate-200/90 bg-slate-50/90 hover:bg-pink-500/15 hover:border-pink-500/50 text-slate-600 hover:text-pink-600 transition-all duration-200 shadow-xs hover:shadow-sm hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  translate="no"
                  aria-label="Besök NEXE GROUP AB på Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick links & Contact grouped compactly */}
          <div className="flex flex-wrap items-start gap-8 sm:gap-12 md:gap-16 pt-1 md:pt-0">
            {/* Navigation links */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-white mb-2 font-mono">
                Meny
              </span>
              <ul className="space-y-1.5">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-xs text-slate-300 hover:text-white transition-colors block py-0.5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact info */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-white mb-2 font-mono">
                Kontakt
              </span>
              <div className="space-y-2">
                <a
                  href="mailto:kontakt@nexegroup.se"
                  translate="no"
                  className="notranslate inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-white transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" aria-hidden="true" />
                  <span translate="no" className="notranslate font-mono text-white">kontakt@nexegroup.se</span>
                </a>
                <p className="text-[11px] text-slate-400 font-mono">
                  Sverige
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Compact bottom copyright row */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} NEXE SOLAR · En del av{' '}
            <a
              href="https://nexegroup.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-2"
            >
              NEXE GROUP AB
            </a>
            . Alla rättigheter förbehållna.
          </p>
          <p className="text-slate-400 hidden md:block">
            Installationspartner för solceller
          </p>
        </div>

      </motion.div>
    </footer>
  );
};
