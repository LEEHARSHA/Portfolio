import { useEffect, useRef, useState } from "react";

interface CounterOptions {
  duration?: number;
  start?: number;
}

export function useAnimatedCounter(
  end: number,
  inView: boolean,
  options: CounterOptions = {}
) {
  const { duration = 2000, start = 0 } = options;
  const [count, setCount] = useState(start);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (end - start) * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration, start]);

  return count;
}
