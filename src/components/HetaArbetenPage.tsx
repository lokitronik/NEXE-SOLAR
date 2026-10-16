import React, { useId, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Flame } from 'lucide-react';
import { CountUp, RevealText } from './AnimatedSection';

interface HetaArbetenPageProps {
  onContactClick: () => void;
  bannerImageSrc?: string;
  projectImageSrc?: string;
  projectImageAlt?: string;
}

/* ---------------------------------- Datos --------------------------------- */

const stats: {
  to?: number;
  suffix?: string;
  text?: string;
  label: string;
}[] = [
  { to: 2000, suffix: '+', label: 'paneler på papptak' },
  { text: 'SBF 506', label: 'certifierade heta arbeten' },
  { to: 9, suffix: ' m', label: 'ställningsutbildning' },
];

const scope = [
  {
    title: 'Infästningar och tätskikt',
    description:
      'Montage av infästningsplattor och tillhörande tätskiktsarbete enligt det valda systemets anvisningar.',
  },
  {
    title: 'Montagesystem, paneler och kablage på taket',
    description:
      'Montering av skenor, montagesystem och solpaneler, inklusive förläggning och infästning av kablage på taket med metallband enligt systemets anvisningar.',
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
      'Efterbevakning genomförs enligt tillståndet. Utfört montage kontrolleras och dokumenteras enligt överenskommelse, bland annat med bilder på kabelvägen från tak till växelriktare.',
  },
];

const cooperationPoints = [
  'Tydlig omfattning och ansvarsfördelning inför arbetsstart.',
  'Material tillhandahålls av beställaren. Vi har egna verktyg.',
  'Ställning eller lift och materialhämtning planeras i förväg. Vi har utbildning för ställning upp till 9 m.',
  'Vi stämmer av placeringen av växelriktaren med er och dokumenterar kabelvägen med bilder.',
  'Arbetsdatum anpassas efter väder och förutsättningarna för tätskiktsarbetet.',
];

const needFromYou = [
  'Ritningar och underlag',
  'Antal paneler',
  'Information om taket (typ, lutning, höjd)',
  'Önskad placering av växelriktaren',
];

const processSteps = [
  {
    title: 'Ni skickar underlag',
    description: 'Ritningar, antal paneler och information om taket.',
  },
  {
    title: 'Vi går igenom förutsättningarna',
    description:
      'Omfattning, ansvarsfördelning, material, ställning och kabelväg stäms av.',
  },
  {
    title: 'Upplägg för montage och bemanning',
    description: 'Ni får ett tydligt förslag på tidplan och teamets bemanning.',
  },
  {
    title: 'Montage och dokumentation',
    description:
      'Arbetet utförs enligt systemets anvisningar och dokumenteras enligt överenskommelse.',
  },
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
  {
    question: 'Vad behöver ni från oss för att komma igång?',
    answer:
      'Skicka ritningar, antal paneler och information om taket, samt var växelriktaren ska placeras. Då kan vi gå igenom förutsättningarna och återkomma med ett upplägg för montage och bemanning.',
  },
];

/* ------------------------------ Hjälpkomponenter --------------------------- */

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';
const eyebrow = 'text-xs font-semibold uppercase tracking-[0.18em]';
const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500';

const SectionHeader: React.FC<{
  id: string;
  eyebrowText: string;
  title: string;
  children?: React.ReactNode;
}> = ({ id, eyebrowText, title, children }) => (
  <div>
    <p className={`${eyebrow} mb-3 text-slate-500`}>{eyebrowText}</p>
    <h2
      id={id}
      className="text-balance text-2xl font-semibold leading-tight tracking-tight text-[#002B49] sm:text-4xl"
    >
      {title}
    </h2>
    {children && (
      <p className="mt-4 leading-relaxed text-slate-600 sm:mt-5">{children}</p>
    )}
  </div>
);

/* ---------------------------------- Sida ----------------------------------- */

export const HetaArbetenPage: React.FC<HetaArbetenPageProps> = ({
  onContactClick,
  bannerImageSrc = '/heta-arbeten.gif',
  projectImageSrc,
  projectImageAlt = 'Solcellsmontage på papptak utfört av vårt team',
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqId = useId();

  // Datos estructurados para que Google pueda mostrar las FAQ como resultado enriquecido
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Cabecera: el foco es el equipo de montaje; heta arbeten es la prueba de confianza */}
      <section
        aria-labelledby="papptak-title"
        className="relative isolate overflow-hidden bg-[#002B49] pt-24 text-white sm:pt-28 lg:pt-36"
      >
        <img
          src={bannerImageSrc}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
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
            <p className={`${eyebrow} mb-4 text-emerald-200`}>
              Underentreprenör · Solceller på papptak
            </p>

            <RevealText
              as="h1"
              id="papptak-title"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              text="Montageteamet för era solcellsprojekt på papptak"
            />

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-100 sm:mt-6 sm:text-lg">
              Från infästningar och tätskikt till paneler och kabelförläggning. Vi har certifierade heta arbeten, ställningsutbildning och erfarenhet från projekt med över 2 000 paneler, så att ni kan lägga tiden på nästa projekt.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onContactClick}
                className={`inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-7 py-3.5 font-semibold text-[#002B49] shadow-sm transition hover:bg-slate-100 active:scale-[0.99] sm:w-auto ${focus}`}
              >
                <span>Prata med oss om ert projekt</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <a
                href="#scope-title"
                className={`inline-flex w-full items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 font-medium text-white transition hover:bg-white/10 sm:w-auto ${focus}`}
              >
                Se vad vi utför
              </a>
            </div>
          </div>

          {/* Cifras clave + certificación */}
          <div className="mt-12 grid items-center gap-8 border-t border-white/15 py-8 sm:mt-16 lg:grid-cols-[1fr_auto] lg:gap-12">
            <dl className="grid grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tracking-tight sm:text-3xl">
                      {stat.to !== undefined ? (
                        <CountUp to={stat.to} suffix={stat.suffix} />
                      ) : (
                        stat.text
                      )}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-slate-300 sm:text-sm">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-slate-200 backdrop-blur-sm">
              <img
                src="/Svebra-konceptagare-brandfarliga-heta-arbeten.png"
                alt="Svensk Certifiering SBF 2022 - Konceptägare Brandfarliga Heta Arbeten"
                width={80}
                height={40}
                className="h-10 w-auto shrink-0 drop-shadow-sm"
              />
              <div className="text-xs leading-tight">
                <span className="block font-semibold text-white">
                  SBF 2022 & SBF 506
                </span>
                <span className="text-slate-300">Konceptägare: SVEBRA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section
        aria-labelledby="experience-title"
        className="border-b border-slate-200 py-14 sm:py-20 lg:py-24"
      >
        <div className={container}>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                id="experience-title"
                eyebrowText="Teamets erfarenhet"
                title="Erfarenhet av papptak i stor skala."
              >
                Vårt team har omfattande erfarenhet av solcellsinstallationer på papptak, inklusive projekt med över 2 000 paneler, bland annat i bostads- och BRF-projekt. Den erfarenheten tar vi med oss in i varje uppdrag hos NEXE SOLAR.
              </SectionHeader>

              <p className="mt-4 leading-relaxed text-slate-600 sm:text-base">
                Vi är vana vid arbetet med infästningar, tätskikt och montage på större takytor, där planering och samordning är en del av det dagliga arbetet.
              </p>
            </div>

            <div className="border-t border-emerald-500 pt-6 sm:border-l-2 sm:border-t-0 sm:py-2 sm:pl-10">
              <p className="text-sm font-medium text-slate-500">
                Erfarenhet från projekt med
              </p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-[#002B49] sm:text-6xl lg:text-7xl">
                över 2 000
              </p>
              <p className="mt-2 text-lg font-medium text-[#002B49] sm:text-xl">
                solpaneler på papptak
              </p>
              <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">
                Avser teamets samlade yrkeserfarenhet, även före NEXE SOLAR.
              </p>
            </div>
          </div>

          {projectImageSrc && (
            <figure className="mt-10 overflow-hidden rounded-xl border border-slate-200 shadow-sm sm:mt-14">
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

      {/* Alcance */}
      <section
        aria-labelledby="scope-title"
        className="scroll-mt-20 py-14 sm:py-20 lg:py-24"
      >
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeader
              id="scope-title"
              eyebrowText="Vårt uppdrag"
              title="Montaget, från infästning till panel."
            >
              Vi anpassar omfattningen efter ert projekt och arbetar enligt överenskommet underlag och tillverkarens anvisningar.
            </SectionHeader>

            <ol className="divide-y divide-slate-200 border-y border-slate-200">
              {scope.map((item, index) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 py-6 sm:flex-row sm:gap-5 sm:py-7"
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
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Heta arbeten (ahora como garantía de seguridad, no como protagonista) */}
      <section
        aria-labelledby="safety-title"
        className="bg-slate-100 py-14 sm:py-20 lg:py-24"
      >
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
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
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
                När infästningar monteras med värme på papptak ingår brandskyddet i planeringen. De montörer som utför brandfarliga heta arbeten har giltiga personcertifikat. Vi arbetar enligt säkerhetsreglerna i SBF 506.
              </p>
            </div>

            <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <img
                  src="/svebra-brandfarliga-heta-arbeten-full.png"
                  alt="SVEBRA Brandfarliga Arbeten • Svensk Certifiering SBF 2022 • Konceptägare Brandfarliga Heta Arbeten"
                  className="mx-auto h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <ol className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-3">
            {safetySteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-slate-200/60 bg-white p-6 shadow-sm"
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
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Colaboración + qué necesitamos */}
      <section
        aria-labelledby="cooperation-title"
        className="py-14 sm:py-20 lg:py-24"
      >
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                id="cooperation-title"
                eyebrowText="Samarbeta med oss"
                title="Ett montageteam för era projekt."
              >
                Skicka underlag så går vi igenom förutsättningarna med er och återkommer med ett upplägg för montage och bemanning.
              </SectionHeader>

              <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <h3 className="text-sm font-semibold text-[#002B49]">
                  Det här behöver vi för att komma igång
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {needFromYou.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="space-y-4 sm:space-y-5 lg:pt-6">
              {cooperationPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 sm:text-base"
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

      {/* Proceso */}
      <section
        aria-labelledby="process-title"
        className="bg-slate-50 py-14 sm:py-20"
      >
        <div className={container}>
          <h2
            id="process-title"
            className="mb-8 text-2xl font-semibold tracking-tight text-[#002B49] sm:mb-10 sm:text-3xl"
          >
            Så går ett samarbete till
          </h2>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="border-t-2 border-emerald-500 pt-4"
              >
                <span className="font-mono text-xs font-bold text-emerald-600">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold text-[#002B49]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-title"
        className="border-t border-slate-200 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-title"
            className="mb-6 text-2xl font-semibold tracking-tight text-[#002B49] sm:mb-8 sm:text-3xl"
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
                      className={`flex w-full items-center justify-between gap-4 rounded py-5 text-left font-semibold text-[#002B49] transition hover:text-emerald-700 sm:py-6 ${focus}`}
                    >
                      <span className="text-base sm:text-lg">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                          isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-relaxed text-slate-600 sm:pb-6 sm:text-base">
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

      {/* CTA final */}
      <section
        aria-labelledby="cta-title"
        className="bg-[#002B49] py-14 text-white sm:py-20"
      >
        <div className={`${container} text-center`}>
          <h2
            id="cta-title"
            className="text-balance text-2xl font-semibold tracking-tight sm:text-4xl"
          >
            Har ni ett papptak som ska monteras?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Skicka ritningar, antal paneler och information om taket så återkommer vi med ett upplägg för montage och bemanning.
          </p>
          <button
            type="button"
            onClick={onContactClick}
            className={`mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-white px-7 py-3.5 font-semibold text-[#002B49] shadow-sm transition hover:bg-slate-100 active:scale-[0.99] ${focus}`}
          >
            <span>Prata med oss om ert projekt</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
};