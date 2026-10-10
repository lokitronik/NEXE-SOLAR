import React, { useId, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Flame,
} from 'lucide-react';

interface HetaArbetenPageProps {
  onContactClick: () => void;
  bannerImageSrc?: string;
  projectImageSrc?: string;
  projectImageAlt?: string;
}

const scope = [
  {
    title: 'Infästningar och tätskikt',
    description:
      'Montage av infästningsplattor och tillhörande tätskiktsarbete enligt det valda systemets anvisningar.',
  },
  {
    title: 'Montagesystem, paneler och kablage på taket',
    description:
      'Montering av skenor, montagesystem och solpaneler, inklusive förläggning och infästning av cablage på taket med metallband  enligt systemets anvisningar.',
  },
  {
    title: 'Kabelkanaler och kabeldragning till växelriktaren',
    description:
      'Montering av kabelkanaler och kabeldragning från taket till växelriktaren eller avtalad överlämningspunkt. Omfattningen fastställs innan arbetet påbörjas.',
  },
];

const safetySteps = [
  {
    title: 'Före arbetet',
    description:
      'Riskbedömning genomförs på plats och tillstånd för brandfarliga heta arbeten utfärdas och signeras enligt SBF 506 innan arbetet påbörjas.',
  },
  {
    title: 'Under arbetet',
    description:
      'Skyddsåtgärder vidtas, godkänd släckutrustning finns direkt till hands och erforderlig bevakning upprätthålls under hela arbetsmomentet.',
  },
  {
    title: 'Efter arbetet',
    description:
      'Efterbevakning genomförs enligt tillståndet. Utfört montage kontrolleras och dokumenteras enligt överenskommelse.',
  },
];

const cooperationPoints = [
  'Tydlig omfattning och ansvarsfördelning inför arbetsstart.',
  'Material tillhandahålls av beställaren. Vi har egna verktyg.',
  'Materialhämtning och tillgång till ställning eller lift planeras i förväg.',
  'Arbetsdatum anpassas efter väder och förutsättningarna för tätskiktsarbetet.',
];

const faqs = [
  {
    question: 'Kan ni anlitas som underentreprenör?',
    answer:
      'Ja. Vi samarbetar med solcells- och elinstallationsföretag som behöver ett erfaret montageteam för papptak. Inför projektet kommer vi överens om omfattning, ansvarsfördelning, material och praktiska förutsättningar.',
  },
  {
    question: 'Vilken erfarenhet har teamet av papptak?',
    answer:
      'Vårt team har omfattande erfarenhet av solcellsinstallationer på papptak, inklusive projekt med över 2 000 paneler. Erfarenheten omfattar även uppdrag från tiden före NEXE SOLAR.',
  },
  {
    question: 'Hur planeras arbetet med hänsyn till vädret?',
    answer:
      'Vi planerar tätskiktsarbetet utifrån väderförhållandena och materialtillverkarens anvisningar. Om förutsättningarna inte tillåter att arbetet utförs korrekt och säkert kommer vi överens om en ny tid.',
  },
];

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';
const eyebrow = 'text-xs font-semibold uppercase tracking-[0.18em]';
const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500';

export const HetaArbetenPage: React.FC<HetaArbetenPageProps> = ({
  onContactClick,
  bannerImageSrc = '/heta-arbeten.gif',
  projectImageSrc,
  projectImageAlt = 'Solcellsmontage på papptak utfört av vårt team',
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqId = useId();

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Cabecera con compensación de altura para la barra de navegación fija */}
      <section
        aria-labelledby="papptak-title"
        className="relative isolate overflow-hidden bg-[#002B49] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28"
      >
        <img
          src={bannerImageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#002B49]/85 sm:bg-[#002B49]/75 lg:bg-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-[#002B49] via-[#002B49]/90 to-[#002B49]/40 lg:block"
        />

        <div className={`${container} relative z-10`}>
          <div className="max-w-3xl">
            <h1
              id="papptak-title"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Solcellsinstallation på papptak
            </h1>

            <p className="mt-4 sm:mt-5 text-lg font-medium text-emerald-200 sm:text-2xl">
              Heta arbeten, infästningar och tätskikt
            </p>

            <p className="mt-4 sm:mt-6 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
              Vi hjälper er med montaget på papptak, från infästningar och tillhörande tätskiktsarbete till montagesystem, paneler och kabelförläggning. Ett erfaret team som arbetar som underentreprenör i era projekt.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onContactClick}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-white px-7 py-3.5 font-semibold text-[#002B49] shadow-sm transition hover:bg-slate-100 active:scale-[0.99] ${focus}`}
              >
                <span>Prata med oss om ert projekt</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia del equipo */}
      <section
        aria-labelledby="experience-title"
        className="border-b border-slate-200 py-14 sm:py-20 lg:py-24"
      >
        <div className={container}>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className={`${eyebrow} mb-3 text-slate-500`}>
                Teamets erfarenhet
              </p>

              <h2
                id="experience-title"
                className="text-balance text-2xl font-semibold leading-tight tracking-tight text-[#002B49] sm:text-4xl"
              >
                Erfarenhet av papptak i stor skala.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 sm:text-base">
                Vårt team har omfattande erfarenhet av solcellsinstallationer på papptak, inklusive projekt med över 2 000 paneler. Den erfarenheten tar vi med oss in i varje uppdrag hos NEXE SOLAR.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600 sm:text-base">
                Vi är vana vid arbetet med infästningar, tätskikt och montage på större takytor, där planering och samordning är en del av det dagliga arbetet.
              </p>
            </div>

            <div className="border-t border-emerald-500 pt-6 sm:border-t-0 sm:border-l-2 sm:py-2 sm:pl-10">
              <p className="text-sm font-medium text-slate-500">
                Erfarenhet från projekt med
              </p>

              <p className="mt-2 text-4xl font-semibold tracking-tight text-[#002B49] sm:text-6xl lg:text-7xl">
                över 2 000
              </p>

              <p className="mt-2 text-lg sm:text-xl font-medium text-[#002B49]">
                solpaneler på papptak
              </p>

              <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-500">
                Avser teamets samlade yrkeserfarenhet, även före NEXE SOLAR.
              </p>
            </div>
          </div>

          {projectImageSrc && (
            <figure className="mt-10 sm:mt-14 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <img
                src={projectImageSrc}
                alt={projectImageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/8] lg:aspect-[21/9]"
              />
            </figure>
          )}
        </div>
      </section>

      {/* Alcance del servicio */}
      <section
        aria-labelledby="scope-title"
        className="py-14 sm:py-20 lg:py-24"
      >
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className={`${eyebrow} mb-3 text-slate-500`}>
                Vårt uppdrag
              </p>

              <h2
                id="scope-title"
                className="text-balance text-2xl font-semibold tracking-tight text-[#002B49] sm:text-4xl"
              >
                Montaget, från infästning till panel.
              </h2>

              <p className="mt-4 sm:mt-5 leading-relaxed text-slate-600">
                Vi anpassar omfattningen efter ert projekt och arbetar enligt överenskommet underlag och tillverkarens anvisningar.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {scope.map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-5 py-6 sm:py-7"
                >
                  <span
                    className="font-mono text-xs font-semibold text-emerald-600 sm:pt-1"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-[#002B49]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heta arbeten */}
      <section
        aria-labelledby="safety-title"
        className="bg-slate-100 py-14 sm:py-20 lg:py-24"
      >
        <div className={container}>
          <div className="max-w-3xl">
            <p
              className={`${eyebrow} mb-3 flex items-center gap-2 text-[#002B49]`}
            >
              <Flame size={17} className="text-amber-600" aria-hidden="true" />
              Heta arbeten
            </p>

            <h2
              id="safety-title"
              className="text-balance text-2xl font-semibold leading-tight tracking-tight text-[#002B49] sm:text-4xl"
            >
              Brandskydd före, under och efter arbetet.
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
              När infästningar monteras med värme på papptak ingår brandskyddet i planeringen. De montörer som utför brandfarliga heta arbeten har giltiga personcertifikat. Vi arbetar enligt säkerhetsreglerna i SBF 506.
            </p>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
            {safetySteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg bg-white p-6 shadow-sm border border-slate-200/60"
              >
                <span className="font-mono text-xs font-bold text-emerald-600">
                  STEG 0{index + 1}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-[#002B49]">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colaboración */}
      <section
        aria-labelledby="cooperation-title"
        className="py-14 sm:py-20 lg:py-24"
      >
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className={`${eyebrow} mb-3 text-slate-500`}>
                Samarbeta med oss
              </p>

              <h2
                id="cooperation-title"
                className="text-balance text-2xl font-semibold tracking-tight text-[#002B49] sm:text-4xl"
              >
                Ett montageteam för era projekt.
              </h2>

              <p className="mt-4 sm:mt-6 leading-relaxed text-slate-600">
                Skicka ritningar, antal paneler och information om taket. Vi går igenom förutsättningarna med er och återkommer med ett upplägg för montage och bemanning.
              </p>
            </div>

            <ul className="space-y-4 sm:space-y-5 lg:pt-6">
              {cooperationPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-slate-700"
                >
                  <Check
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section
        aria-labelledby="faq-title"
        className="border-t border-slate-200 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-title"
            className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-semibold tracking-tight text-[#002B49]"
          >
            Frågor inför ett samarbete
          </h2>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const buttonId = `${faqId}-button-${index}`;
              const panelId = `${faqId}-panel-${index}`;

              return (
                <div key={faq.question} className="overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className={`flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left font-semibold text-[#002B49] transition hover:text-emerald-700 ${focus} rounded`}
                    >
                      <span className="text-base sm:text-lg">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
