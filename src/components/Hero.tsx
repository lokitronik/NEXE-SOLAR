import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onServicesClick }) => {
  return (
    <section
      id="hero"
      aria-label="Introduktion"
      className="relative pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-32 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Small Brand Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-100 border border-slate-200 rounded-xs">
            <span className="w-2 h-2 rounded-full bg-[#002B49]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#002B49] uppercase">
              NEXE SOLAR • SVERIGE
            </span>
          </div>

          {/* Main Headline with responsive clamp and hyphen prevention */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#002B49] tracking-tight leading-[1.06] font-heading break-words">
              SOLCELLSINSTALLATION
            </h1>
            <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-500 tracking-tight leading-[1.06] font-heading">
              FÖR FÖRETAG.
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl lg:text-2xl text-slate-700 font-normal leading-relaxed max-w-3xl">
            Installation av solpaneler och DC-kablage. Underhåll och förebyggande tjänster för solcellsanläggningar i hela Sverige.
          </p>

          {/* CTAs with >= 48px touch targets */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onContactClick}
              id="hero-contact-button"
              className="inline-flex items-center justify-center gap-3 min-h-[48px] sm:min-h-[52px] px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] active:scale-[0.98] transition-all cursor-pointer rounded-xs shadow-xs"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </button>

            <button
              onClick={onServicesClick}
              id="hero-services-button"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[52px] px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#002B49] bg-slate-100 hover:bg-slate-200 active:scale-[0.98] border border-slate-300 transition-all cursor-pointer rounded-xs"
            >
              <span>VÅRA TJÄNSTER</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};


