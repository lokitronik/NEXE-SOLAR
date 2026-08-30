import React from 'react';
import { HardHat } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="erfarenhet" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="bg-white border border-slate-200 p-8 sm:p-14 rounded-xs shadow-2xs">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-xs text-xs font-mono text-slate-700 mb-6">
            <HardHat className="w-3.5 h-3.5 text-[#002B49]" />
            <span>FÄLTKOMPETENS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight font-heading mb-6">
            PRAKTISK ERFARENHET.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
            NEXE SOLAR bygger på praktisk erfarenhet från solcellsinstallation och tekniskt fältarbete. Vi fokuserar på det praktiska arbetet på plats och på att installationen blir korrekt utförd.
          </p>

          <p className="text-sm font-semibold font-mono text-[#002B49] uppercase tracking-wider">
            Erfarenheten finns i teamet.
          </p>

          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 font-mono gap-2">
            <span>Fokus på noggrant takarbete & säkerhet</span>
            <span>NEXE SOLAR • Sverige</span>
          </div>

        </div>

      </div>
    </section>
  );
};
