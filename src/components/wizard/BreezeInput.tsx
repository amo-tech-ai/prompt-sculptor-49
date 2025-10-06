import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputHTMLAttributes } from "react";

interface BreezeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function BreezeInput({
  label,
  error,
  helperText,
  className = "",
  ...props
}: BreezeInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-sm font-medium text-breeze-text">
          {label}
          {props.required && <span className="text-breeze-orange ml-1">*</span>}
        </Label>
      )}
      <Input
        className={`
          bg-white border-breeze-border text-breeze-text
          focus:border-breeze-orange focus:ring-breeze-orange/20
          rounded-xl px-4 py-3 min-h-[44px]
          placeholder:text-breeze-text-muted
          transition-all duration-200
          ${error ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
      {helperText && !error && <p className="text-sm text-breeze-text-muted">{helperText}</p>}
    </div>
  );
}
