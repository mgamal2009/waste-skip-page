
import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 border-slate-600/50 overflow-hidden shadow-lg flex flex-col h-full">
          <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse relative">
            <div className="absolute top-4 right-4 w-20 h-8 bg-slate-600 rounded-xl animate-pulse"></div>
          </div>
          <div className="p-6 space-y-4 flex-grow flex flex-col">
            <div className="space-y-2">
              <div className="h-6 bg-slate-700 rounded-lg animate-pulse"></div>
              <div className="h-4 bg-slate-700 rounded w-2/3 animate-pulse"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-6 bg-slate-700 rounded-lg w-24 animate-pulse"></div>
              <div className="h-6 bg-slate-700 rounded-lg w-20 animate-pulse"></div>
            </div>
            <div className="h-8 bg-slate-700 rounded-lg w-1/2 animate-pulse"></div>
            <div className="mt-auto">
              <div className="h-12 bg-slate-700 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingState;
