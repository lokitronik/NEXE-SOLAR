import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';

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
    entryScale: [0.96, 1],
    entryOpacity: [0.6, 1],
    exitScale: [1, 0.97],
    exitOpacity: [1, 0.7],
  },
  'subtle-depth': {
    entryScale: [0.98, 1],
    entryOpacity: [0.8, 1],
    exitScale: [1, 0.99],
    exitOpacity: [1, 0.85],
  },
  // Första sektionen: ingen intoning, tonar bara tillbaka när man scrollar vidare
  'hero-recede': {
    entryScale: [1, 1],
    entryOpacity: [1, 1],
    exitScale: [1, 0.95],
    exitOpacity: [1, 0.5],
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

  // Intoning: 0 när sektionens topp når skärmens nederkant, 1 när den når toppen.
  // Sektionen är alltså alltid i vila (scale 1) när man landar på ett ankare,
  // oavsett hur hög sektionen är.
  const { scrollYProgress: entry } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  // Uttoning: börjar först när sektionens underkant lämnar skärmen.
  const { scrollYProgress: exit } = useScroll({
    target: ref,
    offset: isHero ? ['start start', 'end start'] : ['end end', 'end start'],
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