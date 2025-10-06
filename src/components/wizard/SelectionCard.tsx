import { Check } from "lucide-react";
import { ReactNode } from "react";

interface SelectionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  selected: boolean;
  onClick: () => void;
}

export function SelectionCard({
  title,
  description,
  icon,
  selected,
  onClick,
}: SelectionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full text-left p-6 rounded-2xl border-2
        transition-all duration-200 min-h-[44px]
        ${
          selected
            ? "border-breeze-orange bg-breeze-peach shadow-md"
            : "border-breeze-border bg-white hover:border-breeze-orange/50 hover:shadow-sm"
        }
      `}
    >
      {selected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-breeze-orange rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      )}
      <div className="flex items-start gap-4 pr-8">
        {icon && <div className="flex-shrink-0 text-breeze-orange">{icon}</div>}
        <div className="flex-1">
          <h3 className="font-semibold text-breeze-text mb-1">{title}</h3>
          {description && <p className="text-sm text-breeze-text-muted">{description}</p>}
        </div>
      </div>
    </button>
  );
}
