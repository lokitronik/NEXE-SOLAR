import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { ExternalLink, Mail } from 'lucide-react';

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
      className="bg-[#001D33] text-slate-300 py-10 sm:py-12 border-t border-white/10 overflow-hidden"
      aria-label="Webbplatsens sidfot"
      style={{
        paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-white/10 items-start">
          
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xs mb-3 block"
              aria-label="NEXE SOLAR Startsida"
            >
              <Logo variant="light" size="sm" />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-3">
              Professionell installationspartner för solcellsanläggningar, DC-kablage, service, underhåll, certifierade Heta Arbeten och demontering i hela Sverige.
            </p>
            <div className="text-xs text-slate-400">
              <a
                href="https://nexegroup.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors underline decoration-slate-600 underline-offset-2"
              >
                <span>NEXE SOLAR · En del av NEXE GROUP AB</span>
                <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: NEXE GROUP & Kontakt */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3 font-mono">
              NEXE GROUP
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://nexegroup.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-200 hover:text-white group transition-colors"
                >
                  <span className="font-semibold text-white">NEXE GROUP AB</span>
                  <span className="text-slate-400 group-hover:text-slate-200 text-xs">– nexegroup.se</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" aria-hidden="true" />
                </a>
              </li>
              <li className="pt-2 border-t border-white/10">
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  E-post
                </span>
                <a
                  href="mailto:kontakt@nexegroup.se"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-200 hover:text-white transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" aria-hidden="true" />
                  <span className="font-mono text-white">kontakt@nexegroup.se</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} NEXE SOLAR. En del av{' '}
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
          <p className="text-slate-400 hidden sm:block">
            Professionell solcellsinstallation för företag och entreprenörer.
          </p>
        </div>

      </motion.div>
    </footer>
  );
};

