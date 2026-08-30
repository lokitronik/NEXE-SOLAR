import React from 'react';

export const InstallationPartner: React.FC = () => {
  return (
    <section
      id="installationspartner"
      className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="max-w-4xl space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight font-heading">
            BEHÖVER NI ETT INSTALLATIONSTEAM?
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
            Har ni projektet men behöver ett team för att utföra installationen?
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            NEXE SOLAR arbetar som installationspartner och underentreprenör för företag som behöver extra kapacitet på plats.
          </p>
        </div>

        {/* Large Statement */}
        <div className="p-8 sm:p-14 bg-white border border-slate-200 rounded-xs border-l-4 border-l-[#002B49] shadow-2xs">
          <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#002B49] tracking-tight font-heading leading-tight">
            NI HAR PROJEKTET. VI UTFÖR INSTALLATIONEN.
          </div>
        </div>

      </div>
    </section>
  );
};
