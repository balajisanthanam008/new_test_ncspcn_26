import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeSection({ children, className, delay = 0, direction = "up" }: FadeSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => setIsVisible(entry.isIntersecting), delay);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [delay]);

  const getTransform = () => {
    const map = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(40px)", right: "translateX(-40px)" };
    return isVisible ? "translate(0)" : map[direction];
  };

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-1000 ease-out will-change-transform", className)}
      style={{ opacity: isVisible ? 1 : 0, transform: getTransform() }}
    >
      {children}
    </div>
  );
}
