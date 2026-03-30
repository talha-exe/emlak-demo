'use client';
import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ target, suffix = '', className = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let current = 0;
            const step = target / 40;
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCount(Math.floor(current));
            }, 35);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={className}>
      <span>{count}</span>
      {suffix && <em className="text-gold not-italic">{suffix}</em>}
    </div>
  );
}
