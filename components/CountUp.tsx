"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  once?: boolean;
}

export default function CountUp({
  end,
  start = 0,
  duration = 1200,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
  once = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once,
    margin: "-100px",
  });

  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    let animationFrame: number;
    let startTime: number;

    const easeOutCubic = (t: number) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);

      const easedProgress = easeOutCubic(progress);

      const currentValue =
        start + (end - start) * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, start, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}