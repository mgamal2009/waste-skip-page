
import React, { useState } from 'react';
import { ProcessedSkip } from '@/types/skip';
import { useSkips } from '@/hooks/useSkips';
import ProgressIndicator from '@/components/ProgressIndicator';
import SkipCard from '@/components/SkipCard';
import StickyFooter from '@/components/StickyFooter';
import LoadingState from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';
import EmptyState from '@/components/EmptyState';

const steps = [
  { number: 1, title: 'Postcode', completed: true },
  { number: 2, title: 'Waste Type', completed: true },
  { number: 3, title: 'Select Skip', current: true },
  { number: 4, title: 'Permit Check' },
  { number: 5, title: 'Choose Date' },
  { number: 6, title: 'Payment' },
];

const Index = () => {
  const { skips, loading, error } = useSkips();
  const [selectedSkip, setSelectedSkip] = useState<ProcessedSkip | null>(null);

  const handleSkipSelect = (skip: ProcessedSkip) => {
    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null); // Deselect if already selected
    } else {
      setSelectedSkip(skip);
    }
  };

  const handleStepClick = (stepNumber: number) => {
    console.log(`Navigating to step ${stepNumber}...`);
    // This would navigate to the selected step in the actual app
  };

  const handleBack = () => {
    console.log('Going back to previous step...');
    // This would navigate to the previous step in the actual app
  };

  const handleContinue = () => {
    console.log('Continuing with selected skip:', selectedSkip);
    // This would navigate to the next step with the selected skip data
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="mb-12">
          <ProgressIndicator steps={steps} onStepClick={handleStepClick} />
        </div>

        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm font-medium">Step 3 of 6</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Choose Your
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
              Perfect Skip Size
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Select the skip size that best suits your project needs. All prices include VAT and delivery to your location.
          </p>
        </div>

        {/* Content with Better Spacing - 3 Column Layout */}
        <div className="mb-32">
          {loading && <LoadingState />}
          
          {error && (
            <ErrorState message={error} onRetry={handleRetry} />
          )}
          
          {!loading && !error && skips.length === 0 && <EmptyState />}
          
          {!loading && !error && skips.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSkip?.id === skip.id}
                  onSelect={handleSkipSelect}
                />
              ))}
            </div>
          )}
        </div>

        {/* Sticky Footer */}
        <StickyFooter
          selectedSkip={selectedSkip}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
};

export default Index;
