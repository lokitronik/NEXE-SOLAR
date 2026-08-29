import React from 'react';
import { ArrowRight, Wrench, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

interface ForCompaniesProps {
  onDiscussClick: () => void;
}

export const ForCompanies: React.FC<ForCompaniesProps> = ({ onDiscussClick }) => {
  const points = [
    {
      title: 'ERFARENHET',
      description: 'Praktisk erfarenhet av solcellsinstallation och tekniskt arbete.',
      icon: Wrench,
      badge: '01',
    },
    {
      title: 'FLEXIBILITET',
      description: 'Vi anpassar vårt arbete efter projektets omfattning och behov.',
      icon: Sparkles,
      badge: '02',
    },
    {
      title: 'PROFESSIONELLT UTFÖRANDE',
      description: 'Fokus på säkerhet, kvalitet och att arbetet genomförs enligt överenskommelse.',
      icon: Shield,
      badge: '03',
    },
  ];

  return (
    <section id="for-foretag" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-12">
      {/* Background technical dark grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-xs">
          
          <div className="max-w-3xl mb-12 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-700/60 border border-slate-600 text-slate-300 w-fit mb-5 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>KAPACITET FÖR ENTREPRENÖRER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              BEHÖVER NI ETT INSTALLATIONSTEAM?
            </h2>

            <p className="text-lg sm:text-xl font-medium text-slate-200 mb-4 leading-snug">
              Har ni projektet men behöver ett pålitligt team för att utföra installationen?
            </p>

            <p className="text-base text-slate-300 font-normal leading-relaxed">
              NEXE SOLAR arbetar som installationspartner och underentreprenör för företag som behöver extra kapacitet inom solcellsinstallation.
            </p>
          </div>

          {/* 3 Concise Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-700 rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-slate-800 text-slate-200 rounded">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 font-bold">
                        {pt.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white font-heading tracking-tight mb-2">
                      {pt.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                    <span>NEXE Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-slate-700">
            <p className="text-sm text-slate-300 italic font-medium text-left">
              "Ni har projektet. Vi har installationsteamet."
            </p>
            <button
              onClick={onDiscussClick}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 transition-all rounded shadow-md active:scale-[0.98] cursor-pointer group shrink-0"
            >
              <span>DISKUTERA ERT PROJEKT</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
