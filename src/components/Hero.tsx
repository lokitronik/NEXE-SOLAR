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
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Technical Typography */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Small Brand Label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-slate-100 border border-slate-200/80 rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#002B49] uppercase">
                NEXE SOLAR
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[11px] font-mono text-slate-500 uppercase">
                B2B Installation
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#002B49] tracking-tight leading-[1.04] font-heading">
                SOLCELLSINSTALLATION
              </h1>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-500 tracking-tight leading-[1.04] font-heading">
                FÖR FÖRETAG.
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
              Installation av solpaneler och DC-kablage. Underhåll och förebyggande tjänster för solcellsanläggningar.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onContactClick}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001B2E] transition-all rounded-xs active:scale-[0.98] cursor-pointer shadow-xs"
              >
                <span>KONTAKTA OSS</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                onClick={onServicesClick}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wider text-[#002B49] bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all rounded-xs active:scale-[0.98] cursor-pointer font-mono"
              >
                <span>VÅRA TJÄNSTER</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Subtle Technical Meta Spec Line */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                Underentreprenad
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                Takarbete & Fältmontage
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                Sverige
              </span>
            </div>

          </div>

          {/* Right Column: ONE large professional rooftop technician image */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-slate-200 rounded-xs overflow-hidden bg-slate-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                alt="Tekniker utför solcellsinstallation på tak"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center grayscale-[20%] contrast-[1.05]"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Overlay architectural tag */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-900/85 backdrop-blur-xs border-t border-slate-800 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                    Fältarbete & Montering
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Praktisk installation på tak och fastighet
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Decorative technical coordinate accents */}
            <div className="hidden sm:flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2 px-1">
              <span>NEXE SOLAR — OPERATION</span>
              <span>SE / B2B</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
