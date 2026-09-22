import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface SectionRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  viewportAmount?: number | 'some' | 'all';
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.65,
  className = '',
  viewportAmount = 0.15,
  ...props
}) => {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 32, x: 0 };
      case 'down':
        return { y: -32, x: 0 };
      case 'left':
        return { x: 32, y: 0 };
      case 'right':
        return { x: -32, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: viewportAmount, margin: '-30px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
