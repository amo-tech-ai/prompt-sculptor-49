import { ReactNode } from "react";

interface BreezeCardProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

export function BreezeCard({
  children,
  className = "",
  padding = "md",
  hover = false,
}: BreezeCardProps) {
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        bg-white rounded-2xl border border-breeze-border
        shadow-sm transition-all duration-200
        ${hover ? "hover:shadow-md hover:border-breeze-orange/30 cursor-pointer" : ""}
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
