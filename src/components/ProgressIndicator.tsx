import React from 'react';
import {cn} from '@/lib/utils';

interface Step {
  number: number;
  title: string;
  completed?: boolean;
  current?: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
  onStepClick?: (stepNumber: number) => void;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({steps, onStepClick}) => {
  const handleStepClick = (step: Step) => {
    // Only allow clicking on completed steps (previous steps)
    if (step.completed && onStepClick) {
      onStepClick(step.number);
    }
  };

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between relative">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center flex-1 relative">
            {index !== steps.length - 1 && (
              <div className="absolute top-5 left-1/2 w-full h-0.5 z-0">
                <div
                  className={cn(
                    "w-full h-0.5",
                    steps[index].completed ? "bg-green-500" : "bg-slate-700"
                  )}
                />
              </div>
            )}
            <div
              className={cn(
                "relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                step.current
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : step.completed
                    ? "bg-green-500 text-white cursor-pointer hover:scale-105"
                    : "bg-slate-700 text-slate-400 cursor-not-allowed",
                step.completed && "hover:shadow-lg"
              )}
              onClick={() => handleStepClick(step)}
            >
              {step.number}
            </div>
            <span
              className={cn(
                "text-xs mt-3 text-center max-w-20",
                step.current ? "text-blue-400 font-medium" : "text-slate-400"
              )}>
                            {step.title}
                        </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
