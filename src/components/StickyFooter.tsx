
import React from 'react';
import { ProcessedSkip } from '@/types/skip';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface StickyFooterProps {
  selectedSkip: ProcessedSkip | null;
  onBack: () => void;
  onContinue: () => void;
}

const StickyFooter: React.FC<StickyFooterProps> = ({ selectedSkip, onBack, onContinue }) => {
  if (!selectedSkip) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50 p-6 z-50 shadow-2xl",
      "transform transition-all duration-500 ease-out",
      selectedSkip ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Skip Details - Enhanced */}
          <div className="flex items-center gap-6 flex-1">
            {/* Mini Skip Preview */}
            <div className="hidden sm:block w-16 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-slate-600">
              <img 
                src="/uploads/8e8cac1c-f8a3-4072-bbcb-0196a98cca48.png"
                alt="Selected skip preview"
                className="w-full h-full object-contain p-1"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-400 font-medium">Selected:</span>
              </div>
              
              <h3 className="text-white font-bold text-xl mb-1">{selectedSkip.title}</h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm">
                <span className="text-blue-400 font-bold text-2xl">
                  £{selectedSkip.total_price.toFixed(2)}
                </span>
                <span className="text-slate-300">
                  {selectedSkip.hire_label} • inc. VAT
                </span>
                {selectedSkip.allows_heavy_waste && (
                  <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded-md text-xs">
                    Heavy Waste OK
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons - Enhanced */}
          <div className="flex gap-4 w-full lg:w-auto">
            <button
              onClick={onBack}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-700/70 border border-slate-600 text-slate-200 rounded-xl font-semibold hover:bg-slate-600/70 hover:text-white transition-all duration-200 min-w-[140px]"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            
            <button
              onClick={onContinue}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/30 min-w-[140px]"
            >
              Continue
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
