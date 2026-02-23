import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ModernButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const ModernButton = forwardRef<HTMLButtonElement, ModernButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 overflow-hidden",
          "hover:shadow-lg active:scale-95",
          size === "sm" && "text-xs px-3 py-1.5",
          size === "md" && "text-sm px-4 py-2",
          size === "lg" && "text-base px-6 py-3",
          variant === "primary" && "hero-gradient text-primary-foreground shadow-md hover:opacity-90",
          variant === "secondary" && "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80",
          variant === "outline" && "bg-transparent border border-primary text-primary hover:bg-primary/10",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

ModernButton.displayName = "ModernButton";
export { ModernButton };
