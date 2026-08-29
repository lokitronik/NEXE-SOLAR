import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <Logo variant="light" size="sm" />
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-3">
              Professionell installation av solpaneler, DC-kablage, underhåll och förebyggande tjänster för solcellsföretag och entreprenörer i Sverige.
            </p>
            <p className="text-xs text-slate-500 font-mono">
              En del av NEXE GROUP AB • Sverige
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Hem
                </a>
              </li>
              <li>
                <a href="#tjanster" className="hover:text-white transition-colors">
                  Våra tjänster
                </a>
              </li>
              <li>
                <a href="#for-foretag" className="hover:text-white transition-colors">
                  För företag
                </a>
              </li>
              <li>
                <a href="#erfarenhet" className="hover:text-white transition-colors">
                  Erfarenhet
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition-colors">
                  Kontakt & förfrågan
                </a>
              </li>
            </ul>
          </div>

          {/* Tjänster */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-3">
              Tjänster
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Solcellsinstallation (Bostad & Kommersiellt)</li>
              <li>• DC-kablage och dragning</li>
              <li>• Underhåll och teknisk service</li>
              <li>• Förebyggande tjänster (BirdBlocker, rengöring)</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-900">
              <a
                href="https://lokitronik.github.io/NEXE-GROUP-AB/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white transition-colors underline"
              >
                Besök NEXE GROUP AB →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} NEXE GROUP AB. Alla rättigheter förbehållna.</p>
          <p className="mt-2 sm:mt-0">NEXE SOLAR // SVERIGE</p>
        </div>

      </div>
    </footer>
  );
};
