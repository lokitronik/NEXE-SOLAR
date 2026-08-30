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
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left space-y-8 sm:space-y-10">
          
          {/* Small Brand Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-100 border border-slate-200 rounded-xs">
            <span className="w-2 h-2 rounded-full bg-[#002B49]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#002B49] uppercase">
              NEXE SOLAR
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#002B49] tracking-tight leading-[1.03] font-heading">
              SOLCELLSINSTALLATION
            </h1>
            <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-500 tracking-tight leading-[1.03] font-heading">
              FÖR FÖRETAG.
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-relaxed max-w-3xl">
            Installation av solpaneler och DC-kablage. Underhåll och förebyggande tjänster för solcellsanläggningar.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onContactClick}
              id="hero-contact-button"
              className="inline-flex items-center justify-center gap-3 px-9 py-4.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] transition-colors cursor-pointer rounded-xs shadow-xs"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </button>

            <button
              onClick={onServicesClick}
              id="hero-services-button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4.5 text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#002B49] bg-slate-100 hover:bg-slate-200/80 border border-slate-300 transition-colors cursor-pointer rounded-xs"
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

