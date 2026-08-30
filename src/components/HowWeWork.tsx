import React from 'react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'PROJEKT',
      description: 'Ni berättar vad projektet omfattar och vad ni behöver hjälp med.',
    },
    {
      num: '02',
      title: 'PLANERING',
      description: 'Vi går igenom omfattning, förutsättningar och tidsplan.',
    },
    {
      num: '03',
      title: 'INSTALLATION',
      description: 'Vårt team utför det överenskomna arbetet på plats.',
    },
    {
      num: '04',
      title: 'KLART',
      description: 'Arbetet slutförs enligt överenskommen omfattning.',
    },
  ];

  return (
    <section id="sa-arbetar-vi" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800 scroll-mt-12">
      {/* Dark background pattern */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            SÅ ARBETAR VI
          </h2>
        </div>

        {/* 4 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="bg-slate-800/80 border border-slate-700 rounded p-6 sm:p-7 flex flex-col justify-between relative"
            >
              <div>
                {/* Step Number Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-700">
                  <span className="text-2xl font-extrabold font-mono text-slate-300">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    STEG {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading tracking-tight mb-2.5">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-3 border-t border-slate-700/50 flex items-center gap-2 text-[10px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                <span>NEXE SOLAR Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
