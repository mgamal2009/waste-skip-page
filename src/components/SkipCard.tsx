
import React from 'react';
import { ProcessedSkip } from '@/types/skip';
import { cn } from '@/lib/utils';
import { AlertTriangle, Check, Truck } from 'lucide-react';

interface SkipCardProps {
  skip: ProcessedSkip;
  isSelected: boolean;
  onSelect: (skip: ProcessedSkip) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  return (
    <div
      className={cn(
        "relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group hover:scale-[1.02] hover:shadow-2xl flex flex-col h-full",
        isSelected
          ? "border-blue-400 shadow-2xl shadow-blue-500/25 ring-4 ring-blue-400/20 scale-[1.02]"
          : "border-slate-600/50 hover:border-slate-500/70 shadow-lg"
      )}
      onClick={() => onSelect(skip)}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-4 left-4 z-20 bg-blue-500 text-white rounded-full p-2 shadow-lg">
          <Check className="w-4 h-4" />
        </div>
      )}

      {/* Size Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
          {skip.size} Yard
        </div>
      </div>

      {/* Skip Image with Professional Integration */}
      <div className="h-48 bg-gradient-to-br from-slate-700/30 to-slate-800/50 flex items-center justify-center relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/10"/>
        <img
          src="/uploads/8e8cac1c-f8a3-4072-bbcb-0196a98cca48.png"
          alt={`${skip.size} yard We Want Waste skip - professional waste disposal`}
          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105 drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
          }}
        />
      </div>

      {/* Warning Banner */}
      {!skip.allowed_on_road && (
        <div className="bg-gradient-to-r from-orange-600 to-red-600 border-l-4 border-orange-300 p-3 flex items-center gap-3 shadow-inner">
          <div className="bg-white/20 rounded-full p-1">
            <AlertTriangle className="w-4 h-4 text-orange-100" />
          </div>
          <div>
            <span className="text-orange-50 font-semibold text-sm block">Road Placement Restricted</span>
            <span className="text-orange-200 text-xs">Private property only</span>
          </div>
        </div>
      )}

      {/* Card Content - Flexible grow area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{skip.title}</h3>
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Truck className="w-4 h-4" />
            <span>{skip.hire_label}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skip.allows_heavy_waste && (
            <div className="bg-slate-700/70 border border-slate-600 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Heavy Waste OK
            </div>
          )}
          {skip.allowed_on_road && (
            <div className="bg-slate-700/70 border border-slate-600 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Road Placement
            </div>
          )}
        </div>

        {/* Price - grows to push button down */}
        <div className="flex-grow flex flex-col justify-end">
          <div className="mb-4">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-blue-400">
                £{skip.total_price.toFixed(2)}
              </span>
              <span className="text-slate-400 text-sm">inc. VAT</span>
            </div>
          </div>

          {/* Action Button - Always at bottom */}
          <button
            className={cn(
              "w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg mt-auto",
              isSelected
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-500/30 hover:from-blue-400 hover:to-blue-500 ring-2 ring-blue-400/50"
                : "bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 hover:from-slate-600 hover:to-slate-500 hover:text-white hover:shadow-xl"
            )}
          >
            {isSelected && <Check className="w-5 h-5" />}
            <span>{isSelected ? "Selected" : "Choose This Skip"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
