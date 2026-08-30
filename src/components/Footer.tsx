import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-white py-14 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
        
        <div>
          <Logo variant="dark" size="md" showSubtext={true} />
        </div>

        <p className="text-xs font-mono text-slate-700 font-medium">
          En del av NEXE GROUP AB
        </p>

        <p className="text-xs font-mono text-slate-500">
          Sverige
        </p>

        <div className="pt-2 border-t border-slate-200 w-32 mx-auto">
          <p className="text-[11px] font-mono text-slate-400">
            © 2026 NEXE GROUP AB
          </p>
        </div>

      </div>
    </footer>
  );
};
