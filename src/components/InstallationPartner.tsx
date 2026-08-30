import React from 'react';

export const InstallationPartner: React.FC = () => {
  return (
    <section
      id="installationspartner"
      aria-labelledby="partner-section-heading"
      className="py-16 sm:py-24 lg:py-32 bg-slate-50 border-b border-slate-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header & Subtext */}
        <div className="max-w-4xl space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
              02 / B2B & UNDERENTREPRENAD
            </span>
          </div>

          <h2
            id="partner-section-heading"
            className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] tracking-tight font-heading leading-[1.08] break-words"
          >
            BEHÖVER NI ETT INSTALLATIONSTEAM?
          </h2>

          <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
            <p className="text-lg sm:text-2xl text-slate-800 leading-relaxed font-medium">
              Har ni projektet men behöver ett team för att utföra installationen?
            </p>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
              NEXE SOLAR arbetar som installationspartner och underentreprenör för företag som behöver extra kapacitet på plats.
            </p>
          </div>
        </div>

        {/* Strong Architectural B2B Statement */}
        <div className="relative bg-white border border-slate-200/90 rounded-xs p-6 sm:p-12 lg:p-16 border-l-4 sm:border-l-8 border-l-[#002B49] shadow-xs">
          <div className="max-w-4xl space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] text-slate-400 uppercase block">
              VÅRT LÖFTE TILL ER SOM PROJEKTÄGARE
            </span>
            <div className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black text-[#002B49] tracking-tight font-heading leading-tight sm:leading-[1.1] break-words">
              NI HAR PROJEKTET. VI UTFÖR INSTALLATIONEN.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


