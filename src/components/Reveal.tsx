import React from 'react';
import { motion } from 'motion/react';

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
}

/**
 * Scroll-triggered entrance wrapper. Content is always present in the DOM
 * (so it stays crawlable) — only opacity/transform animate in on view.
 */
export default function Reveal({ children, className, delay = 0, y = 26, as = 'div', once = true }: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
