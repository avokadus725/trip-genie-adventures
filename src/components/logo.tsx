
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };
  
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 28,
  };
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-tripgenie-500 to-tripgenie-600">
        <Sparkles size={iconSize[size]} className="text-white" />
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tighter", sizeClasses[size])}>
          Trip<span className="text-tripgenie-500">Genie</span>
        </span>
      )}
    </div>
  );
}
