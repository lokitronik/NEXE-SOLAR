import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  direction?: 'zoom-in-out' | 'subtle-depth' | 'hero-recede';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  direction = 'zoom-in-out',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth out scroll progress with a gentle spring to prevent jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  // Zoom-in as section approaches center, subtle zoom-out as it leaves
  const scale = useTransform(
    smoothProgress,
    [0, 0.28, 0.72, 1],
    direction === 'subtle-depth'
      ? [0.96, 1, 1, 0.98]
      : [0.93, 1, 1, 0.95]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.82, 1],
    [0.75, 1, 1, 0.75]
  );

  const y = useTransform(
    smoothProgress,
    [0, 0.28, 0.72, 1],
    [32, 0, 0, -24]
  );

  return (
    <div ref={containerRef} id={id} className="relative">
      <motion.div
        style={{
          scale,
          opacity,
          y,
          transformOrigin: '50% 50%',
        }}
        className={`w-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
