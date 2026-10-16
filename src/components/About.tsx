import React, { useRef, useState } from 'react';
import {
  motion,
  MotionConfig,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  type MotionValue,
} from 'motion/react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

interface AboutProps {
  onContactClick?: () => void;
}

const capacityItems = [
  {
    title: 'Solcellsinstallation & DC-kablage',
    detail: 'Takmontage och DC-kabeldragning, från infästning till panel',
  },
  {
    title: 'Underhåll & service',
    detail: 'Teknisk översyn, kontroll & service',
  },
  {
    title: 'Förebyggande tjänster',
    detail: 'BirdBlocker, fågelskydd & rengöring',
  },
];

const workflowSteps: {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    step: '01',
    title: 'Projektavstämning',
    desc: 'Genomgång av taktyp, ritningar, tidsplan, projektomfattning och var växelriktaren placeras.',
    icon: ClipboardCheck,
  },
  {
    step: '02',
    title: 'Bemanning',
    desc: 'Vi bemannar uppdraget med ett utrustat montageteam med rätt certifikat.',
    icon: Users,
  },
  {
    step: '03',
    title: 'Montage & DC-arbete',
    desc: 'Strukturerat, fackmannamässigt och säkert montage enligt tillverkarens anvisningar.',
    icon: ShieldCheck,
  },
  {
    step: '04',
    title: 'Dokumentation',
    desc: 'Egenkontroll och fotodokumentation vid överlämning, bland annat av kabelvägen.',
    icon: CheckCircle2,
  },
];

const gridVariants = (stagger: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: stagger } },
});

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002B49]';

/* ------------------------------ Tidslinje ---------------------------------- */

interface TimelineStepProps {
  item: (typeof workflowSteps)[number];
  progress: MotionValue<number>;
  threshold: number;
  forceActive: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({
  item,
  progress,
  threshold,
  forceActive,
}) => {
  const [reached, setReached] = useState(forceActive);
  const StepIcon = item.icon;

  useMotionValueEvent(progress, 'change', (v) => {
    setReached(v >= threshold);
  });

  const active = forceActive || reached;

  return (
    <li className="relative pb-12 last:pb-0 sm:pb-16">
      <div
        aria-hidden="true"
        className={`absolute -left-14 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-500 sm:-left-20 sm:h-14 sm:w-14 ${
          active
            ? 'border-[#002B49] bg-[#002B49] text-white'
            : 'border-slate-300 bg-white text-slate-400'
        }`}
      >
        <StepIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      <div
        className={`transition-opacity duration-500 ${
          active ? 'opacity-100' : 'opacity-45'
        }`}
      >
        <span className="font-mono text-xs font-bold tracking-widest text-slate-500">
          STEG {item.step}
        </span>
        <h4 className="mt-1 font-heading text-xl font-semibold tracking-tight text-[#002B49] sm:text-2xl">
          {item.title}
        </h4>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {item.desc}
        </p>
      </div>
    </li>
  );
};

const Timeline: React.FC = () => {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 55%'],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const last = workflowSteps.length - 1;

  return (
    <ol ref={ref} className="relative max-w-3xl pl-14 sm:pl-20">
      {/* Linje: grå bana + fylld del som följer scrollen */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-slate-200 sm:left-[27px]"
      >
        <motion.div
          style={{ scaleY: reduce ? 1 : smooth, transformOrigin: 'top' }}
          className="h-full w-full bg-[#002B49]"
        />
      </div>

      {workflowSteps.map((item, index) => (
        <TimelineStep
          key={item.step}
          item={item}
          progress={smooth}
          threshold={index / last - 0.02}
          forceActive={Boolean(reduce)}
        />
      ))}
    </ol>
  );
};

/* --------------------------------- Sida ----------------------------------- */

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="kapacitet"
        aria-labelledby="capacity-section-heading"
        className="scroll-mt-20 overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                04 / Installationskapacitet
              </span>

              <div className="space-y-3 sm:space-y-4">
                <h2
                  id="capacity-section-heading"
                  className="text-balance font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-[#002B49] sm:text-5xl lg:text-6xl"
                >
                  När ni behöver fler händer på plats.
                </h2>

                <p className="max-w-3xl pt-1 text-base font-normal leading-relaxed text-slate-700 sm:text-xl lg:text-2xl">
                  Vi hjälper solcellsföretag och entreprenörer när den egna installationskapaciteten inte räcker till.
                </p>
              </div>
            </motion.div>

            {/* Kapacitet */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={gridVariants(0.1)}
              className="grid max-w-4xl grid-cols-1 gap-3 pt-2 sm:grid-cols-3 sm:gap-4 sm:pt-4"
            >
              {capacityItems.map((item) => (
                <motion.li
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group flex items-start gap-3.5 rounded-xs border border-slate-200 bg-white p-5 shadow-2xs transition-all duration-300 hover:border-[#002B49] hover:shadow-md sm:gap-4 sm:p-6"
                >
                  <div
                    className="mt-0.5 shrink-0 rounded-xs bg-slate-100 p-1.5 text-[#002B49] transition-colors duration-200 group-hover:bg-[#002B49] group-hover:text-white"
                    aria-hidden="true"
                  >
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xs font-bold tracking-tight text-[#002B49] sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-normal text-slate-500">
                      {item.detail}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Arbetsmetodik: tidslinje som fylls när man scrollar */}
          <div className="mt-12 border-t border-slate-200 pt-8 sm:mt-16 sm:pt-12 lg:mt-20">
            <div className="mb-8 sm:mb-12">
              <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                Arbetsmetodik
              </span>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-[#002B49] sm:text-2xl">
                Så samarbetar vi på plats
              </h3>
            </div>

            <Timeline />

            {onContactClick && (
              <div className="mt-10 sm:mt-14">
                <button
                  type="button"
                  onClick={onContactClick}
                  className={`inline-flex items-center justify-center gap-3 rounded-lg bg-[#002B49] px-6 py-3.5 font-semibold text-white transition hover:bg-[#003a63] active:scale-[0.99] ${focus}`}
                >
                  <span>Prata med oss om ert projekt</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};