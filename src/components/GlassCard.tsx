import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 shadow-lg transition-all duration-300",
        hoverEffect && "hover:shadow-xl group",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
