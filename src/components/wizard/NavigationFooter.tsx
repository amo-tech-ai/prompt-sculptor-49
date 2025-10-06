import { BreezeButton } from "./BreezeButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationFooterProps {
  onBack?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
  nextLabel?: string;
  backLabel?: string;
  loading?: boolean;
}

export function NavigationFooter({
  onBack,
  onNext,
  onSubmit,
  canGoBack,
  canGoNext,
  nextLabel = "Continue",
  backLabel = "Back",
  loading = false,
}: NavigationFooterProps) {
  return (
    <div className="sticky bottom-0 bg-breeze-cream border-t border-breeze-border py-4 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        {canGoBack && onBack ? (
          <BreezeButton variant="ghost" onClick={onBack} disabled={loading}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLabel}
          </BreezeButton>
        ) : (
          <div />
        )}

        {onSubmit ? (
          <BreezeButton
            variant="primary"
            onClick={onSubmit}
            disabled={!canGoNext}
            loading={loading}
            size="lg"
          >
            Submit Brief
          </BreezeButton>
        ) : (
          <BreezeButton
            variant="primary"
            onClick={onNext}
            disabled={!canGoNext}
            loading={loading}
            size="lg"
          >
            {nextLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </BreezeButton>
        )}
      </div>
    </div>
  );
}
