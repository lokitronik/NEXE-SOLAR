import React from 'react';
import { motion, MotionConfig } from 'motion/react';
import { ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react';

interface InstallationPartnerProps {
  onContactClick?: () => void;
  /** Länk till sidan om papptak / heta arbeten */
  papptakHref?: string;
}

const partnerHighlights = [
  {
    icon: Layers,
    title: 'Flexibel start',
    desc: 'Vi kan hoppa in vid arbetstoppar, större etapper eller tajta deadlines. Bemanning stäms av i förväg.',
  },
  {
    icon: Zap,
    title: 'Montage & DC-kablage',
    desc: 'Fackmannamässig panelmontering, skensystem samt DC-kabeldragning och förläggning, även på papptak med infästningar och tätskikt.',
  },
  {
    icon: ShieldCheck,
    title: 'Kvalitet & säkerhet',
    desc: 'Montörer med giltiga personcertifikat för brandfarliga heta arbeten och noggrann egenkontroll.',
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002B49]';

export const InstallationPartner: React.FC<InstallationPartnerProps> = ({
  onContactClick,
  papptakHref,
}) => {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="installationspartner"
        aria-labelledby="partner-section-heading"
        className="scroll-mt-20 overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          {/* Rubrik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 max-w-4xl space-y-4 sm:mb-16 sm:space-y-6 lg:mb-20"
          >
            <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
              02 / B2B & underentreprenad
            </span>

            <h2
              id="partner-section-heading"
              className="text-balance font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-[#002B49] sm:text-5xl lg:text-6xl"
            >
              Behöver ni ett montageteam?
            </h2>

            <div className="space-y-3 pt-1 sm:space-y-4 sm:pt-2">
              <p className="text-lg font-medium leading-relaxed text-slate-800 sm:text-2xl">
                NEXE SOLAR arbetar som installationspartner och underentreprenör för företag som behöver extra kapacitet på plats.
              </p>

              <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-lg">
                Vi utför montaget och DC-kabeldragningen. AC-arbeten och elanslutning utförs av er elinstallatör.
              </p>
            </div>
          </motion.div>

          {/* Förmågor */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={gridVariants}
            className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:gap-6 md:grid-cols-3"
          >
            {partnerHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  variants={cardVariants}
                  className="rounded-xs border border-slate-200 bg-white p-6 shadow-2xs sm:p-7"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-slate-100 text-[#002B49]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span
                      className="font-mono text-[11px] font-bold text-slate-400"
                      aria-hidden="true"
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mb-2 font-heading text-base font-bold tracking-tight text-[#002B49] sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.desc}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Löfte + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xs border border-l-4 border-slate-200/90 border-l-[#002B49] bg-white p-6 shadow-xs sm:border-l-8 sm:p-12 lg:p-16"
          >
            <div className="max-w-4xl space-y-2 sm:space-y-3">
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-[0.25em]">
                Vårt löfte till er som projektägare
              </span>
              <p className="text-balance font-heading text-2xl font-semibold leading-tight tracking-tight text-[#002B49] sm:text-4xl sm:leading-[1.1] lg:text-5xl">
                Ni har projektet. Vi utför montaget.
              </p>
            </div>

            {(onContactClick || papptakHref) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                {onContactClick && (
                  <button
                    type="button"
                    onClick={onContactClick}
                    className={`inline-flex items-center justify-center gap-3 rounded-lg bg-[#002B49] px-6 py-3.5 font-semibold text-white transition hover:bg-[#003a63] active:scale-[0.99] ${focus}`}
                  >
                    <span>Prata med oss</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                )}

                {papptakHref && (
                  <a
                    href={papptakHref}
                    className={`inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3.5 font-medium text-[#002B49] transition hover:bg-slate-100 ${focus}`}
                  >
                    Läs mer om vårt montage på papptak
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};