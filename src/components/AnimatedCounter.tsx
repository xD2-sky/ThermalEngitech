import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';
import usePageAnimated from '../hooks/usePageAnimated';

interface AnimatedCounterProps {
  value: number;
  /** Seconds to count from 0 to value. */
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Counts up from 0 to `value` the first time it scrolls into view, then
 * holds at the final value — used for the "Why Thermal Engitech" stat
 * numbers. Skips straight to the final value, with no count-up, on a page
 * that's already been seen this session (navigating back shouldn't replay
 * it from 0 again).
 */
export default function AnimatedCounter({ value, duration = 4, prefix = '', suffix = '', className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px 150px 0px' });
  const shouldReduceMotion = useReducedMotion();
  const alreadyAnimated = usePageAnimated();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplay(0);
      return;
    }
    if (shouldReduceMotion || alreadyAnimated) {
      setDisplay(value);
      return;
    }
    let frame: number;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, shouldReduceMotion, alreadyAnimated, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(display).toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
