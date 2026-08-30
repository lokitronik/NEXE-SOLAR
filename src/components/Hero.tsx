import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left space-y-8">
          
          {/* Display: NEXE SOLAR */}
          <div className="inline-block">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-slate-500 uppercase">
              NEXE SOLAR
            </span>
          </div>

          {/* Large headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#002B49] tracking-tight leading-[1.04] font-heading">
              SOLCELLSINSTALLATION
            </h1>
            <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-500 tracking-tight leading-[1.04] font-heading">
              FÖR FÖRETAG.
            </div>
          </div>

          {/* Text */}
          <p className="text-lg sm:text-2xl text-slate-700 font-normal leading-relaxed max-w-3xl">
            Installation av solpaneler och DC-kablage. Underhåll och förebyggande tjänster för solcellsanläggningar.
          </p>

          {/* Button */}
          <div className="pt-2">
            <button
              onClick={onContactClick}
              id="hero-contact-button"
              className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] transition-colors cursor-pointer rounded-xs shadow-xs"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
