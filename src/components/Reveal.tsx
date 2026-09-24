import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds of delay before the reveal starts. */
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
  /** Render as a specific element (default div). */
  as?: 'div' | 'section' | 'li' | 'span';
  once?: boolean;
  /** Seconds the animation itself takes. */
  duration?: number;
}

/**
 * Scroll-triggered entrance wrapper. Content is always present in the DOM
 * (so it stays crawlable) — only opacity/transform animate in on view.
 */
export default function Reveal({ children, className, delay = 0, y = 26, as = 'div', once = true, duration = 0.6 }: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  const shouldReduceMotion = useReducedMotion();

  // Users who've asked the OS for reduced motion get the content immediately,
  // with no transform/opacity animation at all.
  if (shouldReduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
