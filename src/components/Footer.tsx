import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="mb-4">
          <Logo variant="light" size="sm" />
        </div>

        <p className="text-xs text-slate-400 font-medium mb-1">
          En del av NEXE GROUP AB
        </p>

        <p className="text-[11px] text-slate-500 font-mono">
          © 2026 NEXE GROUP AB
        </p>

      </div>
    </footer>
  );
};
