import React, { useEffect, useRef } from 'react';

type Point = { x: number; y: number };

// Sourced from animata.design's "GitHub Card - Skew" component (MIT licensed,
// https://animata.design/docs/card/github-card-skew) — tracks pointer position
// relative to a ref'd element, rAF-throttled.
export function useMousePosition(
  ref: React.RefObject<HTMLElement | null>,
  callback?: (point: Point) => void
) {
  const callbackRef = useRef(callback);
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const latestPointRef = useRef<Point | null>(null);

  callbackRef.current = callback;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const updateRect = () => {
      rectRef.current = node.getBoundingClientRect();
    };

    const flush = () => {
      frameRef.current = null;
      if (latestPointRef.current) {
        callbackRef.current?.(latestPointRef.current);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!rectRef.current) updateRect();
      const currentRect = rectRef.current;
      if (!currentRect) return;

      latestPointRef.current = {
        x: event.clientX - currentRect.left,
        y: event.clientY - currentRect.top,
      };

      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(flush);
      }
    };

    updateRect();

    node.addEventListener('pointerenter', updateRect);
    node.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true, capture: true });

    return () => {
      node.removeEventListener('pointerenter', updateRect);
      node.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect, true);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [ref]);
}
