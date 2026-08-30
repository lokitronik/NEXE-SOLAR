import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      id: '01',
      title: 'SOLCELLSINSTALLATION',
      description: 'Installation av solpaneler på tak.',
    },
    {
      id: '02',
      title: 'DC-KABLAGE',
      description: 'Installation och dragning av DC-kablage.',
    },
    {
      id: '03',
      title: 'UNDERHÅLL & SERVICE',
      description: 'Underhåll och service av befintliga solcellsanläggningar.',
    },
    {
      id: '04',
      title: 'FÖREBYGGANDE TJÄNSTER',
      description: 'BirdBlocker, fågelskydd, rengöring och andra förebyggande tjänster.',
    },
  ];

  return (
    <section
      id="tjanster"
      className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Headline */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight font-heading">
            TJÄNSTER
          </h2>
        </div>

        {/* 4 Clean Minimal Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 border border-slate-200 p-8 rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-slate-400 pb-4 mb-5 border-b border-slate-200">
                  {service.id}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#002B49] font-heading tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
