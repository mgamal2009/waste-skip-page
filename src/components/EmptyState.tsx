
import React from 'react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">📦</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">No skips available</h3>
      <p className="text-slate-300 max-w-md">
        We couldn't find any skips available for your location. Please try a different area.
      </p>
    </div>
  );
};

export default EmptyState;
