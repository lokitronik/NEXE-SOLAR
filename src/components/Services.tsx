import React from 'react';
import { motion, MotionConfig } from 'motion/react';
import {
  ArrowRight,
  Flame,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

interface ServicesProps {
  onNavigateHetaArbeten?: () => void;
  /** Om ingen anges scrollar knappen till elementet med id="kontakt" */
  onContactClick?: () => void;
}

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Visuellt framhävt kort (papptak / heta arbeten) */
  highlight?: boolean;
}

// Huvudspår: montage åt installatörer och entreprenörer (underentreprenad)
const installationServices: Service[] = [
  {
    title: 'Solcellsinstallation & DC-kablage',
    description:
      'Komplett mekaniskt montage av solpaneler samt dragning och förläggning av DC-kablage på tak i bostads-, BRF- och kommersiella projekt.',
    icon: Zap,
  },
  {
    title: 'Papptak: infästningar & tätskikt',
    description:
      'Montage av solceller på papptak, inklusive infästningar och tillhörande tätskiktsarbete. Våra montörer som utför brandfarliga heta arbeten har giltiga personcertifikat och vi arbetar enligt SBF 506.',
    icon: Flame,
    highlight: true,
  },
];

// Sidospår: tjänster för ägare av befintliga anläggningar
const ownerServices: Service[] = [
  {
    title: 'Underhåll & service',
    description:
      'Underhåll, kontroll, felsökning och service av befintliga solcellsanläggningar för optimal driftsäkerhet och produktion.',
    icon: Wrench,
  },
  {
    title: 'Förebyggande tjänster',
    description:
      'BirdBlocker, fågelskydd, rengöring av solpaneler och andra förebyggande åtgärder som skyddar anläggningen över tid.',
    icon: ShieldCheck,
  },
  {
    title: 'Demontering & avveckling',
    description:
      'Vi demonterar och avlägsnar befintliga solcellsanläggningar på ett säkert och professionellt sätt, exempelvis vid takrenovering eller byte.',
    icon: RefreshCw,
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const viewport = { once: true, margin: '-50px' } as const;

const bigCard =
  'relative flex min-h-[280px] flex-col justify-between rounded-xs p-6 sm:min-h-[330px] sm:p-8 lg:p-10';

const focusDark =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002B49]';
const focusLight =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export const Services: React.FC<ServicesProps> = ({
  onNavigateHetaArbeten,
  onContactClick,
}) => {
  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
      return;
    }
    const prefersReduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    document
      .getElementById('kontakt')
      ?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="tjanster"
        aria-labelledby="services-section-heading"
        className="scroll-mt-20 overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          {/* Rubrik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 sm:mb-14"
          >
            <span className="mb-3 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
              03 / Vårt erbjudande
            </span>
            <h2
              id="services-section-heading"
              className="text-balance font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-[#002B49] sm:text-5xl lg:text-6xl"
            >
              Det här utför vi
            </h2>
          </motion.div>

          {/* Huvudspår: montage åt installatörer och entreprenörer */}
          <div>
            <h3 className="mb-5 font-heading text-xl font-semibold tracking-tight text-[#002B49] sm:mb-6 sm:text-2xl">
              Montage åt installatörer och entreprenörer
            </h3>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={gridVariants}
              className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {installationServices.map((service, index) => {
                const Icon = service.icon;
                const hl = Boolean(service.highlight);

                return (
                  <motion.li
                    key={service.title}
                    variants={cardVariants}
                    whileHover={{ y: -6 }}
                    className={`group ${bigCard} shadow-2xs transition-all duration-300 hover:bg-white hover:shadow-xl ${
                      hl
                        ? 'border-2 border-amber-400/60 bg-amber-50/40 hover:border-amber-500'
                        : 'border border-slate-200/90 bg-slate-50 hover:border-[#002B49]'
                    }`}
                  >
                    <div>
                      <div className="mb-5 flex items-center gap-2.5 border-b border-slate-200 pb-4 sm:mb-7 sm:pb-5">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-xs transition-colors duration-300 ${
                            hl
                              ? 'bg-amber-500 text-slate-950'
                              : 'bg-slate-200/70 text-[#002B49] group-hover:bg-[#002B49] group-hover:text-white'
                          }`}
                          aria-hidden="true"
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-xs font-bold tracking-widest text-[#002B49]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h4 className="mb-3 font-heading text-lg font-bold leading-snug tracking-tight text-[#002B49] sm:mb-4 lg:text-xl">
                        {service.title}
                      </h4>

                      <p className="mb-4 text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                        {service.description}
                      </p>

                      {hl && onNavigateHetaArbeten && (
                        <button
                          type="button"
                          onClick={onNavigateHetaArbeten}
                          className={`mt-2 inline-flex w-full items-center justify-between gap-1.5 rounded-xs border border-amber-400/50 bg-amber-400/25 px-3 py-2 font-mono text-xs font-bold text-amber-900 transition-colors hover:bg-amber-400/40 hover:text-amber-950 ${focusDark}`}
                        >
                          <span>LÄS MER OM PAPPTAK & HETA ARBETEN</span>
                          <ArrowRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>

                    <div className="mt-4 border-t border-slate-200/60 pt-4 sm:mt-6 sm:pt-6">
                      <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-slate-500 sm:text-[11px]">
                        {hl ? 'Certifierade montörer' : 'NEXE fältteam'}
                      </span>
                    </div>
                  </motion.li>
                );
              })}

              {/* Kontaktkort */}
              <motion.li
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`${bigCard} border border-[#001D33] bg-[#002B49] text-white shadow-md transition-all duration-300 hover:shadow-2xl md:col-span-2 lg:col-span-1`}
              >
                <div>
                  <div className="mb-5 flex items-center gap-2.5 border-b border-white/15 pb-4 sm:mb-7 sm:pb-5">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-xs bg-white/10"
                      aria-hidden="true"
                    >
                      <MessageSquare className="h-4 w-4 text-sky-300" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-sky-200">
                      {String(installationServices.length + 1).padStart(2, '0')} /
                      SAMARBETE
                    </span>
                  </div>

                  <h4 className="mb-3 font-heading text-lg font-bold leading-snug tracking-tight sm:mb-4 lg:text-xl">
                    Planerar ni ett projekt?
                  </h4>

                  <p className="text-sm font-normal leading-relaxed text-slate-200 sm:text-base">
                    Behöver ni montage för specifika datum eller löpande projekt? Hör av er så går vi igenom förutsättningarna och bemanningen tillsammans.
                  </p>
                </div>

                <div className="mt-4 border-t border-white/15 pt-4 sm:mt-6 sm:pt-6">
                  <button
                    type="button"
                    onClick={handleContact}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xs bg-white px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#002B49] transition-colors hover:bg-slate-100 ${focusLight}`}
                  >
                    <span>Prata med oss</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </motion.li>
            </motion.ul>
          </div>

          {/* Sidospår: ägare av befintliga anläggningar (medvetet lugnare) */}
          <div className="mt-14 border-t border-slate-200 pt-10 sm:mt-20 sm:pt-14">
            <div className="mb-6 max-w-3xl sm:mb-8">
              <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                Även för anläggningsägare
              </span>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-[#002B49] sm:text-2xl">
                Service och underhåll av befintliga anläggningar
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Vi hjälper också fastighetsägare och BRF som har en solcellsanläggning på taket.
              </p>
            </div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={gridVariants}
              className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3"
            >
              {ownerServices.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.li
                    key={service.title}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className="group rounded-xs border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-[#002B49]/50 hover:bg-white hover:shadow-md sm:p-6"
                  >
                    <div
                      className="mb-4 flex h-8 w-8 items-center justify-center rounded-xs bg-slate-200/70 text-[#002B49] transition-colors duration-300 group-hover:bg-[#002B49] group-hover:text-white"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <h4 className="mb-2 font-heading text-base font-bold tracking-tight text-[#002B49]">
                      {service.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};