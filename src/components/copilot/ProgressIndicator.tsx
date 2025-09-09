import { useBriefState } from "@/lib/copilot/global-state";
import { cn } from "@/lib/utils";

export function ProgressIndicator() {
  const { stage } = useBriefState();
  
  const stages = [
    { id: "business", label: "Business", description: "Understanding your business" },
    { id: "requirements", label: "Requirements", description: "Defining your needs" },
    { id: "technical", label: "Technical", description: "Implementation details" },
    { id: "intelligence", label: "Goals", description: "Business objectives" },
    { id: "decision", label: "Decision", description: "Stakeholders & concerns" },
    { id: "analysis", label: "Analysis", description: "AI recommendations" },
    { id: "confirmation", label: "Confirm", description: "Final approval" },
  ];

  const currentIndex = stages.findIndex(s => s.id === stage);

  return (
    <div className="w-full bg-white border-b p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Project Brief Collection</h2>
        <span className="text-sm text-gray-500">
          Step {currentIndex + 1} of {stages.length}
        </span>
      </div>
      
      <div className="flex items-center space-x-2">
        {stages.map((stageItem, index) => (
          <div key={stageItem.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                index <= currentIndex 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-500"
              )}>
                {index + 1}
              </div>
              <span className={cn(
                "text-xs mt-1 text-center max-w-16",
                index <= currentIndex ? "text-blue-600" : "text-gray-500"
              )}>
                {stageItem.label}
              </span>
            </div>
            {index < stages.length - 1 && (
              <div className={cn(
                "w-8 h-0.5 mx-2",
                index < currentIndex ? "bg-blue-600" : "bg-gray-200"
              )} />
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-2">
        <p className="text-sm text-gray-600">
          {stages[currentIndex]?.description}
        </p>
      </div>
    </div>
  );
}
