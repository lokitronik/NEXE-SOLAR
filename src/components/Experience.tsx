import React from 'react';
import { HardHat } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="erfarenhet" className="py-16 md:py-20 bg-slate-100/70 border-b border-slate-200 relative scroll-mt-12">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 shadow-xs">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono mb-4 border border-slate-200">
            <HardHat className="w-3.5 h-3.5 text-[#002B49]" />
            <span>PRAKTISKT KUNNANDE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002B49] tracking-tight font-heading mb-6">
            ERFARENHETEN FINNS I TEAMET
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              NEXE SOLAR bygger på praktisk erfarenhet från solcellsinstallation och tekniskt fältarbete. Vårt team tar med sig denna erfarenhet in i varje projekt vi genomför som NEXE SOLAR.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>Fokus på kvalitet & taksäkerhet</span>
            <span>NEXE SOLAR • Sverige</span>
          </div>

        </div>
      </div>
    </section>
  );
};
