import { useEffect, useState } from 'react';

/**
 * Plain `matchMedia` equivalent of framer-motion's `useReducedMotion` —
 * used by components that don't otherwise need the animation library, so
 * checking this preference doesn't pull it in just for that.
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return reduced;
}
