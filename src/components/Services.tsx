import React from 'react';
import { Sun, Cable, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const services = [
    {
      id: 'solcellsinstallation',
      title: 'SOLCELLSINSTALLATION',
      description: 'Professionell installation av solpaneler på bostäder och kommersiella fastigheter.',
      badge: 'Montage & Takarbete',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
      alt: 'Installation av solpaneler',
    },
    {
      id: 'dc-kablage',
      title: 'DC-KABLAGE',
      description: 'Installation och dragning av DC-kablage för solcellsanläggningar.',
      badge: 'DC-infrastruktur',
      icon: Cable,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      alt: 'Kabeldragning och DC-montage',
    },
    {
      id: 'underhall',
      title: 'UNDERHÅLL',
      description: 'Underhåll och teknisk service av befintliga solcellsanläggningar.',
      badge: 'Teknisk Service',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      alt: 'Tekniskt underhåll och service',
    },
    {
      id: 'forebyggande-tjanster',
      title: 'FÖREBYGGANDE TJÄNSTER',
      description: 'BirdBlocker, fågelskydd, rengöring av solpaneler och andra förebyggande tjänster kring solcellsanläggningar.',
      badge: 'Skalskydd & Drift',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      alt: 'Fågelskydd och förebyggande underhåll',
    },
  ];

  return (
    <section id="tjanster" className="py-20 bg-slate-50 border-b border-slate-200 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-200/80 text-slate-700 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
              <span>VÅRT ARBETSOMRÅDE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B49] tracking-tight font-heading">
              VÅRA TJÄNSTER
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              NEXE SOLAR fokuserar uteslutande på praktiskt montage, kablage, underhåll och förebyggande åtgärder för solcellsprojekt.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-slate-500 font-mono">
            <span>REN INSTALLATION & UNDERENTREPRENAD</span>
          </div>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={`tjanst-${service.id}`}
                className="bg-white rounded-lg border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden group text-left"
              >
                {/* Photo container */}
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#002B49] text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded shadow-2xs">
                    {service.badge}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 right-3 p-2 bg-[#002B49] text-white rounded shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#002B49] font-heading tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-[#002B49] bg-slate-50 hover:bg-[#002B49] hover:text-white border border-slate-200 hover:border-[#002B49] transition-colors rounded flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                    >
                      <span>Välj för förfrågan</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
