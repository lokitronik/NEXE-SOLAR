import React from 'react';
import { motion } from 'motion/react';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export const InstallationPartner: React.FC = () => {
  const partnerHighlights = [
    {
      icon: Layers,
      title: 'Skalbar kapacitet',
      desc: 'Skala upp ert montageteam snabbt vid arbetstoppar, större etapper eller deadlines.',
    },
    {
      icon: Zap,
      title: 'Montage & DC-kablage',
      desc: 'Vi utför fackmannamässig panelmontering, skensystem, kabeldragning och förläggning.',
    },
    {
      icon: ShieldCheck,
      title: 'Kvalitet & Säkerhet',
      desc: 'Utbildade montörer med certifiering för Heta Arbeten och noggrann egenkontroll.',
    },
  ];

  return (
    <section
      id="installationspartner"
      aria-labelledby="partner-section-heading"
      className="py-16 sm:py-24 lg:py-32 bg-slate-50 border-b border-slate-200 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header & Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20"
        >
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
        </motion.div>

        {/* Dynamic Partner Capability Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {partnerHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-slate-200 p-6 sm:p-7 rounded-xs shadow-2xs hover:shadow-md hover:border-[#002B49]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xs bg-slate-100 flex items-center justify-center text-[#002B49] group-hover:bg-[#002B49] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#002B49] transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#002B49] font-heading tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Strong Architectural B2B Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.005 }}
          className="relative bg-white border border-slate-200/90 rounded-xs p-6 sm:p-12 lg:p-16 border-l-4 sm:border-l-8 border-l-[#002B49] shadow-xs transition-shadow duration-300 hover:shadow-md"
        >
          <div className="max-w-4xl space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] text-slate-400 uppercase block">
              VÅRT LÖFTE TILL ER SOM PROJEKTÄGARE
            </span>
            <div className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black text-[#002B49] tracking-tight font-heading leading-tight sm:leading-[1.1] break-words">
              NI HAR PROJEKTET. VI UTFÖR INSTALLATIONEN.
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
