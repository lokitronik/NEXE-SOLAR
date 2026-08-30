import React from 'react';
import { Building2, HardHat, Home } from 'lucide-react';

export const ForCompanies: React.FC = () => {
  const customerSegments = [
    {
      title: 'SOLCELLSFÖRETAG',
      description: 'Extra installationskapacitet för era projekt.',
      icon: Building2,
    },
    {
      title: 'ENTREPRENÖRER',
      description: 'Installation som en del av större bygg- och entreprenadprojekt.',
      icon: HardHat,
    },
    {
      title: 'FASTIGHETSBOLAG & BRF',
      description: 'Underhåll, fågelskydd, rengöring och andra tjänster för befintliga solcellsanläggningar.',
      icon: Home,
    },
  ];

  return (
    <section id="for-foretag" className="py-20 bg-white border-b border-slate-200 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono mb-3 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
            <span>MÅLGRUPPER & SAMARBETEN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight font-heading mb-4">
            EN EXTRA RESURS FÖR ERA SOLCELLSPROJEKT
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            När ni behöver fler händer på plats kan NEXE SOLAR gå in som installationspartner.
          </p>
        </div>

        {/* Simple Visual List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {customerSegments.map((segment) => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.title}
                className="bg-slate-50 border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-white text-[#002B49] w-fit rounded border border-slate-200 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#002B49] font-heading tracking-tight mb-2">
                    {segment.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {segment.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                  <span>Samarbetsmodell: Underentreprenad</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
