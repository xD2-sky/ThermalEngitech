import React, { useEffect, useRef, useState } from 'react';
import usePageAnimated from '../hooks/usePageAnimated';
import useReducedMotion from '../hooks/useReducedMotion';

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
 * (so it stays crawlable) — only opacity/transform animate in on view, once,
 * the first time this page is seen this session.
 *
 * Plain CSS transition + IntersectionObserver, not framer-motion: this
 * effect (fade + translateY on first scroll into view) doesn't need a full
 * animation library, and Reveal is used directly throughout Home (which is
 * never lazy-loaded) — keeping it dependency-free here is what keeps
 * framer-motion out of the bundle every visitor pays for on first load,
 * rather than confined to the lazy-loaded pages that use it for richer
 * scroll-linked effects.
 */
export default function Reveal({ children, className, delay = 0, y = 26, as = 'div', once = true, duration = 0.6 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const alreadyAnimated = usePageAnimated();
  const skipAnimation = shouldReduceMotion || alreadyAnimated;
  const [isVisible, setIsVisible] = useState(skipAnimation);

  useEffect(() => {
    if (skipAnimation) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: '-70px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [skipAnimation, once]);

  const Tag = as as React.ElementType;

  // Users who've asked the OS for reduced motion get the content immediately,
  // with no transform/opacity animation at all. Same for a page the visitor
  // has already scrolled through this session — navigating back to it
  // shouldn't replay the entrance animation, so it just renders in place.
  if (skipAnimation) {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}
