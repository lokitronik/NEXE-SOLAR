import React from 'react';
import { ArrowRight, Building2, HardHat, Building } from 'lucide-react';

interface B2BSectionProps {
  onContactClick: () => void;
}

export const B2BSection: React.FC<B2BSectionProps> = ({ onContactClick }) => {
  const categories = [
    {
      title: 'SOLCELLSFÖRETAG',
      description: 'Extra installationskapacitet när ni behöver den.',
      icon: Building2,
      code: 'CAT 01',
    },
    {
      title: 'ENTREPRENÖRER',
      description: 'Installation som en del av era projekt.',
      icon: HardHat,
      code: 'CAT 02',
    },
    {
      title: 'FASTIGHETSBOLAG & BRF',
      description: 'Underhåll och förebyggande tjänster för befintliga solcellsanläggningar.',
      icon: Building,
      code: 'CAT 03',
    },
  ];

  return (
    <section id="b2b" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Intro text */}
        <div className="max-w-4xl text-left mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#002B49] uppercase">
              INSTALLATIONSPARTNER & UNDERENTREPRENAD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight font-heading mb-6">
            BEHÖVER NI ETT INSTALLATIONSTEAM?
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Har ni projekt på gång men behöver ett extra team för att utföra installationen?
            </p>
            <p>
              NEXE SOLAR arbetar som installationspartner och underentreprenör för företag som behöver kapacitet på plats.
            </p>
          </div>
        </div>

        {/* Highlighted Key Statement - One of the strongest visual elements on the page */}
        <div className="my-12 sm:my-16 bg-[#002B49] text-white p-8 sm:p-14 rounded-xs border-l-4 border-slate-400 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <span className="text-8xl sm:text-9xl font-black font-heading leading-none">NEXE</span>
          </div>

          <div className="relative z-10 max-w-3xl text-left">
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase block mb-3">
              KÄRNIDÉ & SAMARBETE
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-heading text-white mb-6">
              NI HAR PROJEKTET. VI UTFÖR INSTALLATIONEN.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed mb-6">
              Vi tillhandahåller det praktiska montageteamet och fältarbetet på plats så att era projekt färdigställs enligt plan.
            </p>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#002B49] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              <span>BOKA KAPACITET</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Three simple categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 p-7 sm:p-8 rounded-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {item.code}
                    </span>
                    <Icon className="w-5 h-5 text-[#002B49]" />
                  </div>

                  <h4 className="text-lg font-bold text-[#002B49] font-heading tracking-tight mb-2.5">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Underentreprenad</span>
                  <span className="text-slate-600 font-semibold">NEXE SOLAR</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
