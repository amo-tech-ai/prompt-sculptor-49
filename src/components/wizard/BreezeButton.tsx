import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface BreezeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
}

export function BreezeButton({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: BreezeButtonProps) {
  const baseStyles = "font-medium transition-all duration-200 rounded-full touch-target";

  const variantStyles = {
    primary: "bg-breeze-orange hover:bg-breeze-orange-hover text-white shadow-sm hover:shadow-md",
    secondary: "bg-breeze-cream hover:bg-breeze-peach text-breeze-text border border-breeze-border",
    outline: "border-2 border-breeze-orange text-breeze-orange hover:bg-breeze-peach",
    ghost: "text-breeze-text-muted hover:text-breeze-text hover:bg-breeze-cream",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm min-h-[36px]",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[52px]",
  };

  return (
    <Button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </Button>
  );
}
