import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      id: '01',
      title: 'SOLCELLSINSTALLATION & DC-KABLAGE',
      description: 'Komplett mekaniskt montage av solpaneler samt dragning och anslutning av DC-kablage på tak för bostäder, BRF och kommersiella fastigheter.',
    },
    {
      id: '02',
      title: 'UNDERHÅLL & SERVICE',
      description: 'Underhåll, kontroll, felsökning och service av befintliga solcellsanläggningar.',
    },
    {
      id: '03',
      title: 'FÖREBYGGANDE TJÄNSTER',
      description: 'BirdBlocker, fågelskydd, rengöring av solpaneler och andra förebyggande åtgärder.',
    },
  ];

  return (
    <section
      id="tjanster"
      className="py-24 sm:py-32 bg-white border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Headline */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
              03 / VÅRT ERBJUDANDE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] tracking-tight font-heading">
            TJÄNSTER
          </h2>
        </div>

        {/* 3 Large Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 border border-slate-200/90 hover:border-slate-300 p-8 sm:p-10 rounded-xs flex flex-col justify-between transition-colors min-h-[320px] sm:min-h-[360px]"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-7 border-b border-slate-200">
                  <span className="text-xs font-mono font-bold text-[#002B49] tracking-widest">
                    {service.id}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#002B49] font-heading tracking-tight mb-4 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-medium">
                  NEXE FÄLTTEAM
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

