import React from 'react';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  const capacityItems = [
    { title: 'SOLCELLSINSTALLATION & DC-KABLAGE', detail: 'Komplett takmontage och DC-dragning' },
    { title: 'UNDERHÅLL & SERVICE', detail: 'Teknisk översyn, kontroll & service' },
    { title: 'FÖREBYGGANDE TJÄNSTER', detail: 'BirdBlocker, fågelskydd & rengöring' },
  ];

  return (
    <section
      id="kapacitet"
      className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
              04 / INSTALLATIONSKAPACITET
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] tracking-tight font-heading leading-[1.08]">
              NÄR NI BEHÖVER FLER HÄNDER PÅ PLATS.
            </h2>

            <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed font-normal pt-2 max-w-3xl">
              Vi hjälper solcellsföretag och entreprenörer när den egna installationskapaciteten inte räcker till.
            </p>
          </div>

          {/* Simple Visual List */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
            {capacityItems.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 p-6 rounded-xs flex items-start gap-4 shadow-2xs"
              >
                <div className="mt-0.5 p-1 bg-slate-100 rounded-xs text-[#002B49]">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold font-heading text-[#002B49] tracking-tight">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 font-normal mt-1">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

