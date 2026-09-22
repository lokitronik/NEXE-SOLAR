import React from 'react';
import { motion } from 'motion/react';
import { Zap, Wrench, ShieldCheck, Flame, RefreshCw, ArrowUpRight, ArrowRight, MessageSquare } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: '01',
      title: 'SOLCELLSINSTALLATION & DC-KABLAGE',
      description: 'Komplett mekaniskt montage av solpaneler samt dragning och anslutning av DC-kablage på tak för bostäder, BRF och kommersiella fastigheter.',
      icon: Zap,
    },
    {
      id: '02',
      title: 'UNDERHÅLL & SERVICE',
      description: 'Underhåll, kontroll, felsökning och service av befintliga solcellsanläggningar för optimal driftsäkerhet och produktion.',
      icon: Wrench,
    },
    {
      id: '03',
      title: 'FÖREBYGGANDE TJÄNSTER',
      description: 'BirdBlocker, fågelskydd, rengöring av solpaneler och andra förebyggande åtgärder som skyddar anläggningen över tid.',
      icon: ShieldCheck,
    },
    {
      id: '04',
      title: 'HETA ARBETEN – PAPP',
      description: 'Vi är utbildade och certifierade för Heta Arbeten och utför solcellsinstallationer på papptak med rätt säkerhet och arbetsmetodik.',
      icon: Flame,
    },
    {
      id: '05',
      title: 'DEMONTERING & AVVECKLING',
      description: 'Vi demonterar och avlägsnar befintliga solcellsanläggningar på ett säkert och professionellt sätt, exempelvis vid takrenovering eller byte.',
      icon: RefreshCw,
    },
  ];

  const handleContactScroll = () => {
    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="tjanster"
      aria-labelledby="services-section-heading"
      className="py-16 sm:py-24 lg:py-32 bg-white border-b border-slate-200 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
              03 / VÅRT ERBJUDANDE
            </span>
          </div>
          <h2
            id="services-section-heading"
            className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] tracking-tight font-heading break-words"
          >
            TJÄNSTER
          </h2>
        </motion.div>

        {/* Service Cards Grid with Staggered Motion */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -6 }}
                className="group relative bg-slate-50 border border-slate-200/90 hover:border-[#002B49] hover:bg-white p-6 sm:p-8 lg:p-10 rounded-xs flex flex-col justify-between transition-all duration-300 min-h-[280px] sm:min-h-[330px] shadow-2xs hover:shadow-xl cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-7 border-b border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xs bg-slate-200/70 text-[#002B49] group-hover:bg-[#002B49] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#002B49] tracking-widest">
                        {service.id}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#002B49] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" aria-hidden="true" />
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#002B49] font-heading tracking-tight mb-3 sm:mb-4 leading-snug group-hover:text-[#001D33] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-500 font-medium">
                    NEXE FÄLTTEAM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
                </div>
              </motion.article>
            );
          })}

          {/* 6th Card: Interactive Dynamic B2B Action Card */}
          <motion.article
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ y: -6 }}
            className="group relative bg-[#002B49] text-white p-6 sm:p-8 lg:p-10 rounded-xs flex flex-col justify-between transition-all duration-300 min-h-[280px] sm:min-h-[330px] shadow-md hover:shadow-2xl border border-[#001D33]"
          >
            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-7 border-b border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xs bg-white/10 text-white flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-sky-300" />
                  </div>
                  <span className="text-xs font-mono font-bold text-sky-200 tracking-widest">
                    06 / SAMARBETE
                  </span>
                </div>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                </span>
              </div>

              <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white font-heading tracking-tight mb-3 sm:mb-4 leading-snug">
                ANPASSAD KAPACITET?
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Behöver ni ett dedikerat montageteam för specifika datum eller löpande projekt? Kontakta oss för direkt dialog om resurstillgång.
              </p>
            </div>

            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/15">
              <button
                type="button"
                onClick={handleContactScroll}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#002B49] hover:bg-slate-100 font-mono font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
              >
                <span>BEGÄR TEAMKAPACITET</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};


