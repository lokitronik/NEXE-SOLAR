import React from 'react';
import { Sun, Cable, Wrench, ShieldAlert } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'solcellsinstallation',
      title: 'SOLCELLSINSTALLATION',
      description: 'Installation av solpaneler på tak för bostäder, BRF och kommersiella fastigheter.',
      icon: Sun,
      category: 'Montage & Tak',
    },
    {
      id: 'dc-kablage',
      title: 'DC-KABLAGE',
      description: 'Dragning och installation av DC-kablage i samband med solcellsinstallation.',
      icon: Cable,
      category: 'Kabeldragning',
    },
    {
      id: 'underhall-service',
      title: 'UNDERHÅLL & SERVICE',
      description: 'Underhåll, kontroll och service av befintliga solcellsanläggningar.',
      icon: Wrench,
      category: 'Drift & Kontroll',
    },
    {
      id: 'forebyggande-tjanster',
      title: 'FÖREBYGGANDE TJÄNSTER',
      description: 'BirdBlocker, fågelskydd, rengöring av solpaneler och andra förebyggande åtgärder.',
      icon: ShieldAlert,
      category: 'Skydd & Rengöring',
    },
  ];

  return (
    <section id="tjanster" className="py-20 bg-slate-50 border-b border-slate-200 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-200/80 text-slate-700 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
            <span>VÅRT ARBETSOMRÅDE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight font-heading mb-4">
            TJÄNSTER
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Vi utför det praktiska arbetet på taket och anläggningen med fokus på säkerhet, noggrannhet och kvalitet.
          </p>
        </div>

        {/* Four Clean Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="bg-white rounded border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-slate-100 text-[#002B49] rounded border border-slate-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#002B49] font-heading tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-400">
                    B2B Utförande
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
