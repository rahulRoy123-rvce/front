import React from "react";
import { cn } from "@/lib/utils";

export const DotBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("relative w-full bg-black", className)}>
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 w-full h-full bg-black [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}; 