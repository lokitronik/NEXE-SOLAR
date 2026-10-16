import React, { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

/* ========================================================================== */
/*  AnimatedSection                                                           */
/* ========================================================================== */

type Direction = 'zoom-in-out' | 'subtle-depth' | 'hero-recede';

interface AnimatedSectionProps {
  children: React.ReactNode;
  /** Obs: sektionerna har redan egna id (scroll-mt-20). Skicka inte samma id hit, annars blir det dubbletter. */
  id?: string;
  /** Klasser för det animerade innehållet */
  className?: string;
  /**
   * Bakgrund/kantlinjer som ska stå still medan innehållet animeras.
   * Flytta sektionens bg-klass hit för att undvika synliga "sömmar" mellan sektioner.
   */
  backgroundClassName?: string;
  direction?: Direction;
}

interface Config {
  entryScale: [number, number];
  entryOpacity: [number, number];
  exitScale: [number, number];
  exitOpacity: [number, number];
}

const CONFIG: Record<Direction, Config> = {
  'zoom-in-out': {
    entryScale: [0.92, 1],
    entryOpacity: [0.35, 1],
    exitScale: [1, 0.94],
    exitOpacity: [1, 0.5],
  },
  'subtle-depth': {
    entryScale: [0.95, 1],
    entryOpacity: [0.6, 1],
    exitScale: [1, 0.97],
    exitOpacity: [1, 0.7],
  },
  // Första sektionen: ingen intoning, tonar bara tillbaka när man scrollar vidare
  'hero-recede': {
    entryScale: [1, 1],
    entryOpacity: [1, 1],
    exitScale: [1, 0.92],
    exitOpacity: [1, 0.35],
  },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  backgroundClassName = '',
  direction = 'zoom-in-out',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const cfg = CONFIG[direction];
  const isHero = direction === 'hero-recede';

  // Intoning: 0 när sektionens topp når skärmens nederkant, 1 när den når 35 % från toppen.
  // Efter det är sektionen i vila, så den är alltid i vila när man landar på ett
  // ankare, oavsett hur hög sektionen är.
  const { scrollYProgress: entry } = useScroll({
    target: ref,
    offset: ['start end', 'start 35%'],
  });

  // Uttoning: börjar först när sektionens underkant närmar sig toppen.
  const { scrollYProgress: exit } = useScroll({
    target: ref,
    offset: isHero ? ['start start', 'end start'] : ['end 70%', 'end start'],
  });

  const entryScale = useTransform(entry, [0, 1], cfg.entryScale);
  const exitScale = useTransform(exit, [0, 1], cfg.exitScale);
  const entryOpacity = useTransform(entry, [0, 1], cfg.entryOpacity);
  const exitOpacity = useTransform(exit, [0, 1], cfg.exitOpacity);

  const scale = useTransform(
    [entryScale, exitScale],
    ([a, b]: number[]) => a * b
  );
  const opacity = useTransform(
    [entryOpacity, exitOpacity],
    ([a, b]: number[]) => a * b
  );

  // Respekterar "minska rörelser" i operativsystemet
  if (prefersReducedMotion) {
    return (
      <div id={id} className={backgroundClassName}>
        <div className={`w-full ${className}`}>{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} id={id} className={`relative ${backgroundClassName}`}>
      <motion.div
        style={{ scale, opacity, willChange: 'transform, opacity' }}
        className={`w-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ========================================================================== */
/*  CountUp: räknar upp ett tal från 0 när det kommer in i bild               */
/*  Ex: <CountUp to={2000} suffix="+" />                                      */
/* ========================================================================== */

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const numberFormat = new Intl.NumberFormat('sv-SE');

export const CountUp: React.FC<CountUpProps> = ({
  to,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();

  const format = (v: number) =>
    `${prefix}${numberFormat.format(Math.round(v))}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = format(v);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, to, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className} aria-label={format(to)}>
      {reduce ? format(to) : format(0)}
    </span>
  );
};

/* ========================================================================== */
/*  RevealText: rubrik där varje ord glider upp (används i hero)              */
/* ========================================================================== */

interface RevealTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  id?: string;
  className?: string;
  delay?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  as = 'h1',
  id,
  className,
  delay = 0.1,
}) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return React.createElement(as, { id, className }, text);
  }

  const Tag = motion[as] as typeof motion.h1;
  const words = text.split(' ');

  return (
    <Tag id={id} className={className} aria-label={text}>
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          <span
            className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom"
            aria-hidden="true"
          >
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </Tag>
  );
};

/* ========================================================================== */
/*  ScrollProgressBar: tunn framstegsstapel högst upp (lägg en gång i App)    */
/* ========================================================================== */

export const ScrollProgressBar: React.FC = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-emerald-500"
    />
  );
};