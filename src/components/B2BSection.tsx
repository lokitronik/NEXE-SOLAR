import React from 'react';
import { Users, Layers, Sliders, ArrowRight } from 'lucide-react';

interface B2BSectionProps {
  onContactClick: () => void;
}

export const B2BSection: React.FC<B2BSectionProps> = ({ onContactClick }) => {
  const points = [
    {
      title: 'INSTALLATIONSTEAM',
      description: 'Vi hjälper till med det praktiska installationsarbetet på plats.',
      icon: Users,
      badge: '01',
    },
    {
      title: 'FLEXIBEL KAPACITET',
      description: 'Vi kan komplettera ert befintliga team när ni behöver extra resurser.',
      icon: Layers,
      badge: '02',
    },
    {
      title: 'PROJEKTBASERAT',
      description: 'Arbetet anpassas efter projektets omfattning och förutsättningar.',
      icon: Sliders,
      badge: '03',
    },
  ];

  return (
    <section id="b2b" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Dark technical grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl text-left mb-12">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 w-fit mb-5 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>B2B UNDERENTREPRENAD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-6">
            BEHÖVER NI INSTALLATIONSKAPACITET?
          </h2>

          <div className="space-y-3 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
            <p>
              Har ni projekt på gång men behöver ett extra team för installationen?
            </p>
            <p>
              NEXE SOLAR arbetar som installationspartner och underentreprenör för företag som behöver kapacitet på plats.
            </p>
          </div>

          {/* Visually highlighted sentence */}
          <div className="p-4 sm:p-5 bg-white text-[#002B49] rounded border-l-4 border-slate-400 shadow-md">
            <p className="text-lg sm:text-2xl font-bold font-heading tracking-tight">
              Ni har projektet. Vi utför installationen.
            </p>
          </div>

        </div>

        {/* Three simple points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="bg-slate-800/90 border border-slate-700 rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-900 text-slate-200 rounded border border-slate-700">
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
              </div>
            );
          })}
        </div>

        {/* Direct CTA link */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs font-mono text-slate-400">
            NEXE SOLAR // INSTALLATION FÖR FÖRETAG
          </span>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-slate-200 underline underline-offset-4 cursor-pointer"
          >
            <span>Diskutera kapacitet för era projekt</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
