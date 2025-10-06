import { AlertCircle } from "lucide-react";
import { ValidationError } from "@/lib/validation";

interface ErrorAlertProps {
  errors: ValidationError[];
  className?: string;
}

export function ErrorAlert({ errors, className = "" }: ErrorAlertProps) {
  if (errors.length === 0) return null;

  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-red-800 mb-2">
            Please fix the following errors:
          </h3>
          <ul className="space-y-1">
            {errors.map((error, index) => (
              <li key={index} className="text-sm text-red-700">
                • {error.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
