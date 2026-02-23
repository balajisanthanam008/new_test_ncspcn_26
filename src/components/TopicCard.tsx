import React from "react";
import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";

interface TopicCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

export function TopicCard({ title, icon, className }: TopicCardProps) {
  return (
    <GlassCard className={cn("h-full", className)}>
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="text-conference-topic-icon group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{title}</p>
      </div>
    </GlassCard>
  );
}
