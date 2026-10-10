import React, { useId, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Flame,
} from 'lucide-react';

interface HetaArbetenPageProps {
  onBackToHome: () => void;
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
      'Montering av skenor, montagesystem och solpaneler, inklusive förläggning och infästning av kablage på taket med metallband eller andra avsedda kabelfästen enligt systemets anvisningar.',
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

const container = 'mx-auto max-w-7xl px-5 sm:px-8 lg:px-12';

const eyebrow =
  'text-xs font-semibold uppercase tracking-[0.18em]';

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500';

export const HetaArbetenPage: React.FC<HetaArbetenPageProps> = ({
  onBackToHome,
  onContactClick,
  bannerImageSrc = '/heta-arbeten.gif',
  projectImageSrc,
  projectImageAlt = 'Solcellsmontage på papptak utfört av vårt team',
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqId = useId();

  return (
    <div className="bg-white text-slate-900">
      {/* Cabecera con GIF integrado */}
      <section
        aria-labelledby="papptak-title"
        className="relative isolate overflow-hidden bg-[#002B49] text-white"
      >
        <img
          src={bannerImageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#002B49]/80 lg:bg-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-[#002B49]/95 via-[#002B49]/80 to-[#002B49]/35 lg:block"
        />

        <div
          className={`${container} relative z-10 py-12 sm:py-16 lg:py-20`}
        >

          <div className="max-w-3xl">
            <p className={`${eyebrow} mb-5 text-emerald-300`}>
              NEXE SOLAR / För solcells- och elinstallationsföretag
            </p>

            <h1
              id="papptak-title"
              className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Solcellsinstallation
              <br /> på papptak
            </h1>

            <p className="mt-5 text-xl text-emerald-200 sm:text-2xl">
              Heta arbeten, infästningar och tätskikt
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
              Vi hjälper er med montaget på papptak, från
              infästningar och tillhörande tätskiktsarbete till
              montagesystem, paneler och kabelförläggning.
              Ett erfaret team som arbetar som underentreprenör
              i era projekt.
            </p>

            <button
              type="button"
              onClick={onContactClick}
              className={`mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-white px-6 py-3.5 font-semibold text-[#002B49] transition-colors hover:bg-slate-100 ${focus}`}
            >
              Prata med oss om ert projekt
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Experiencia del equipo */}
      <section
        aria-labelledby="experience-title"
        className="border-b border-slate-200 py-16 sm:py-24"
      >
        <div className={container}>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className={`${eyebrow} mb-4 text-slate-500`}>
                Teamets erfarenhet
              </p>

              <h2
                id="experience-title"
                className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#002B49] sm:text-4xl"
              >
                Erfarenhet av papptak i stor skala.
              </h2>

              <p className="mt-6 leading-relaxed text-slate-600">
                Vårt team har omfattande erfarenhet av
                solcellsinstallationer på papptak, inklusive
                projekt med över 2 000 paneler. Den erfarenheten
                tar vi med oss in i varje uppdrag hos NEXE SOLAR.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600">
                Vi är vana vid arbetet med infästningar,
                tätskikt och montage på större takytor, där
                planering och samordning är en del av det
                dagliga arbetet.
              </p>
            </div>

            <div className="border-l-2 border-emerald-500 py-2 pl-7 sm:pl-10">
              <p className="text-sm font-medium text-slate-500">
                Erfarenhet från projekt med
              </p>

              <p className="mt-2 text-5xl font-semibold tracking-tight text-[#002B49] sm:text-7xl">
                över 2 000
              </p>

              <p className="mt-3 text-xl text-[#002B49]">
                solpaneler på papptak
              </p>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-500">
                Avser teamets samlade yrkeserfarenhet,
                även före NEXE SOLAR.
              </p>
            </div>
          </div>

          {projectImageSrc && (
            <figure className="mt-12 overflow-hidden rounded-xl">
              <img
                src={projectImageSrc}
                alt={projectImageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/7]"
              />
            </figure>
          )}
        </div>
      </section>

      {/* Alcance del servicio */}
      <section
        aria-labelledby="scope-title"
        className="py-16 sm:py-24"
      >
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className={`${eyebrow} mb-4 text-slate-500`}>
                Vårt uppdrag
              </p>

              <h2
                id="scope-title"
                className="font-heading text-3xl font-semibold tracking-tight text-[#002B49] sm:text-4xl"
              >
                Montaget, från infästning till panel.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600">
                Vi anpassar omfattningen efter ert projekt
                och arbetar enligt överenskommet underlag
                och tillverkarens anvisningar.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {scope.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-5 py-7"
                >
                  <span
                    className="pt-1 text-xs font-medium text-slate-400"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-[#002B49]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-relaxed text-slate-600">
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
        className="bg-slate-100 py-16 sm:py-24"
      >
        <div className={container}>
          <div className="max-w-3xl">
            <p
              className={`${eyebrow} mb-4 flex items-center gap-2 text-[#002B49]`}
            >
              <Flame size={17} aria-hidden="true" />
              Heta arbeten
            </p>

            <h2
              id="safety-title"
              className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#002B49] sm:text-4xl"
            >
              Brandskydd före, under och efter arbetet.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              När infästningar monteras med värme på papptak
              ingår brandskyddet i planeringen. De montörer
              som utför brandfarliga heta arbeten har giltiga
              personcertifikat. Vi arbetar enligt
              säkerhetsreglerna i SBF 506.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {safetySteps.map((step, index) => (
              <div
                key={step.title}
                className="border-t border-slate-300 pt-6"
              >
                <span className="text-sm font-medium text-slate-500">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-[#002B49]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
        className="py-16 sm:py-24"
      >
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className={`${eyebrow} mb-4 text-slate-500`}>
                Samarbeta med oss
              </p>

              <h2
                id="cooperation-title"
                className="font-heading text-3xl font-semibold tracking-tight text-[#002B49] sm:text-4xl"
              >
                Ett montageteam för era projekt.
              </h2>

              <p className="mt-6 leading-relaxed text-slate-600">
                Skicka ritningar, antal paneler och information
                om taket. Vi går igenom förutsättningarna med
                er och återkommer med ett upplägg för montage
                och bemanning.
              </p>
            </div>

            <ul className="space-y-5 lg:pt-10">
              {cooperationPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 leading-relaxed text-slate-600"
                >
                  <Check
                    size={19}
                    className="mt-1 shrink-0 text-emerald-700"
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
        className="border-t border-slate-200 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2
            id="faq-title"
            className="mb-8 font-heading text-3xl font-semibold tracking-tight text-[#002B49]"
          >
            Frågor inför ett samarbete
          </h2>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const buttonId = `${faqId}-button-${index}`;
              const panelId = `${faqId}-panel-${index}`;

              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className={`flex w-full items-center justify-between gap-5 rounded py-6 text-left font-semibold text-[#002B49] ${focus}`}
                    >
                      <span>{faq.question}</span>

                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 transition-transform motion-reduce:transition-none ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="pb-6 pr-6 leading-relaxed text-slate-600"
                  >
                    {faq.answer}
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
