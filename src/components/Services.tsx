import React from 'react';
import { Sun, Cable, Wrench, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      id: '01',
      title: 'SOLCELLSINSTALLATION',
      description: 'Installation av solpaneler på tak för bostäder, BRF och kommersiella fastigheter.',
      icon: Sun,
    },
    {
      id: '02',
      title: 'DC-KABLAGE',
      description: 'Dragning och installation av DC-kablage i samband med solcellsinstallation.',
      icon: Cable,
    },
    {
      id: '03',
      title: 'UNDERHÅLL & SERVICE',
      description: 'Underhåll, kontroll och service av befintliga solcellsanläggningar.',
      icon: Wrench,
    },
    {
      id: '04',
      title: 'FÖREBYGGANDE TJÄNSTER',
      description: 'BirdBlocker, fågelskydd, rengöring av solpaneler och andra förebyggande åtgärder.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="tjanster" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#002B49] uppercase">
              KOMPETENSOMRÅDEN
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight font-heading">
            TJÄNSTER
          </h2>
        </div>

        {/* 4 Clean Minimal Service Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-50/70 border border-slate-200 p-7 sm:p-8 rounded-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {service.id}
                    </span>
                    <div className="p-2 bg-white text-[#002B49] rounded-xs border border-slate-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#002B49] font-heading tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 text-[11px] font-mono text-slate-500">
                  <span>Fältarbete • Montering</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
