
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <AlertTriangle className="w-16 h-16 text-red-400 mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">Oops! Something went wrong</h3>
      <p className="text-slate-300 mb-6 max-w-md">{message}</p>
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-400 transition-all duration-200 shadow-lg shadow-blue-500/30"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorState;
