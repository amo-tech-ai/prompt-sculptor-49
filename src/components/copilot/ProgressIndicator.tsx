import { useBriefState } from "@/lib/copilot/global-state";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export function ProgressIndicator() {
  const { stage } = useBriefState();
  
  const stages = [
    { id: "business", label: "Business", description: "Understanding your business", weight: 20 },
    { id: "requirements", label: "Requirements", description: "Defining your needs", weight: 15 },
    { id: "technical", label: "Technical", description: "Implementation details", weight: 15 },
    { id: "intelligence", label: "Goals", description: "Business objectives", weight: 15 },
    { id: "decision", label: "Decision", description: "Stakeholders & concerns", weight: 15 },
    { id: "analysis", label: "Analysis", description: "AI recommendations", weight: 10 },
    { id: "confirmation", label: "Confirm", description: "Final approval", weight: 10 },
  ];

  const currentIndex = stages.findIndex(s => s.id === stage);
  
  // Calculate percentage complete based on weights
  const calculateProgress = () => {
    let progress = 0;
    for (let i = 0; i <= currentIndex; i++) {
      if (i < currentIndex) {
        progress += stages[i].weight;
      } else {
        // Add half of current stage weight for in-progress
        progress += stages[i].weight / 2;
      }
    }
    return Math.min(Math.round(progress), 100);
  };

  const progressPercentage = calculateProgress();

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 border-b p-6">
      {/* Header with Progress */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Project Brief Collection</h2>
          <p className="text-sm text-gray-600 mt-1">
            {stages[currentIndex]?.description}
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-blue-600">
              {progressPercentage}%
            </div>
            <div className="text-sm text-gray-500">
              <div>Step {currentIndex + 1} of {stages.length}</div>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="h-3 w-3" />
                <span>~{15 - Math.floor(progressPercentage * 0.15)} min left</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative mb-6">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Stage Steps */}
      <div className="flex items-center justify-between relative">
        {/* Connection Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200" />
        <div 
          className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: `${(currentIndex / (stages.length - 1)) * 100}%` }}
        />
        
        {stages.map((stageItem, index) => (
          <div key={stageItem.id} className="relative flex flex-col items-center group">
            {/* Stage Circle */}
            <div className={cn(
              "relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform",
              index < currentIndex 
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-100" 
                : index === currentIndex
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-110 shadow-lg ring-4 ring-blue-100"
                : "bg-white border-2 border-gray-300 text-gray-400 scale-90"
            )}>
              {index < currentIndex ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : index === currentIndex ? (
                <div className="animate-pulse">
                  <Circle className="h-5 w-5" />
                </div>
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            
            {/* Stage Label */}
            <div className={cn(
              "mt-2 text-xs font-medium text-center transition-all duration-300",
              index <= currentIndex 
                ? "text-gray-900 opacity-100" 
                : "text-gray-400 opacity-70"
            )}>
              <div className={cn(
                index === currentIndex && "font-bold text-blue-600"
              )}>
                {stageItem.label}
              </div>
              {index === currentIndex && (
                <div className="text-[10px] text-gray-500 mt-0.5">
                  {stageItem.weight}% complete
                </div>
              )}
            </div>

            {/* Hover Tooltip */}
            {index !== currentIndex && (
              <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {index < currentIndex ? "Completed" : "Upcoming"}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile View - Simplified */}
      <div className="mt-4 lg:hidden">
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Current Stage:</span>
            <span className="text-sm font-bold text-blue-600">
              {stages[currentIndex]?.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}