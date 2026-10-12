"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.16 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div className={`reveal ${visible ? "is-visible" : ""} ${className}`} ref={ref}>{children}</div>;
}
