import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="om-oss"
      className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight font-heading">
            PRAKTISK ERFARENHET.
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
            NEXE SOLAR bygger på praktisk erfarenhet från solcellsinstallation och tekniskt fältarbete. Vi fokuserar på det praktiska arbetet på plats och på att installationen blir korrekt utförd.
          </p>
        </div>

      </div>
    </section>
  );
};
