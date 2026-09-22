import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ClipboardCheck, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const capacityItems = [
    { title: 'SOLCELLSINSTALLATION & DC-KABLAGE', detail: 'Komplett takmontage och DC-dragning' },
    { title: 'UNDERHÅLL & SERVICE', detail: 'Teknisk översyn, kontroll & service' },
    { title: 'FÖREBYGGANDE TJÄNSTER', detail: 'BirdBlocker, fågelskydd & rengöring' },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Projektavstämning',
      desc: 'Genomgång av taktyp, ritningar, tidsplan och projektomfattning.',
      icon: ClipboardCheck,
    },
    {
      step: '02',
      title: 'Resursallokering',
      desc: 'Vi bemannar uppdraget med utrustat montageteam med rätt certifikat.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Montage & DC-arbete',
      desc: 'Strukturerat, fackmannamässigt och säkert montage enligt svensk standard.',
      icon: ShieldCheck,
    },
    {
      step: '04',
      title: 'Dokumentation',
      desc: 'Noggrann egenkontroll, protokoll och fotodokumentation vid överlämning.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="kapacitet"
      aria-labelledby="capacity-section-heading"
      className="py-16 sm:py-24 lg:py-32 bg-slate-50 border-b border-slate-200 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
                04 / INSTALLATIONSKAPACITET
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h2
                id="capacity-section-heading"
                className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] tracking-tight font-heading leading-[1.08] break-words"
              >
                NÄR NI BEHÖVER FLER HÄNDER PÅ PLATS.
              </h2>

              <p className="text-base sm:text-xl lg:text-2xl text-slate-700 leading-relaxed font-normal pt-1 max-w-3xl">
                Vi hjälper solcellsföretag och entreprenörer när den egna installationskapaciteten inte räcker till.
              </p>
            </div>
          </motion.div>

          {/* Interactive Visual Capacity Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl"
          >
            {capacityItems.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-slate-200 hover:border-[#002B49] p-5 sm:p-6 rounded-xs flex items-start gap-3.5 sm:gap-4 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                <div className="mt-0.5 p-1.5 bg-slate-100 group-hover:bg-[#002B49] group-hover:text-white rounded-xs text-[#002B49] shrink-0 transition-colors duration-200" aria-hidden="true">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold font-heading text-[#002B49] tracking-tight">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 font-normal mt-1">
                    {item.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Interactive Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-slate-200"
        >
          <div className="mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-slate-400 uppercase block mb-1">
              ARBETSMETODIK
            </span>
            <h3 className="text-lg sm:text-2xl font-extrabold text-[#002B49] font-heading tracking-tight">
              SÅ SAMARBETAR VI PÅ PLATS
            </h3>
          </div>

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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {workflowSteps.map((stepItem, index) => {
              const StepIcon = stepItem.icon;
              return (
                <motion.div
                  key={stepItem.step}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white border border-slate-200 p-5 sm:p-6 rounded-xs hover:border-[#002B49]/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xs bg-slate-100 text-[#002B49] group-hover:bg-[#002B49] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <StepIcon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STEG {stepItem.step}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-[#002B49] font-heading tracking-tight mb-2">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stepItem.desc}
                  </p>

                  {/* Horizontal flow line connector for desktop */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};


