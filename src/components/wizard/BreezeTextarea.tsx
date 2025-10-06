import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TextareaHTMLAttributes } from "react";

interface BreezeTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function BreezeTextarea({
  label,
  error,
  helperText,
  className = "",
  ...props
}: BreezeTextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-sm font-medium text-breeze-text">
          {label}
          {props.required && <span className="text-breeze-orange ml-1">*</span>}
        </Label>
      )}
      <Textarea
        className={`
          bg-white border-breeze-border text-breeze-text
          focus:border-breeze-orange focus:ring-breeze-orange/20
          rounded-xl px-4 py-3 min-h-[120px]
          placeholder:text-breeze-text-muted
          transition-all duration-200 resize-none
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
