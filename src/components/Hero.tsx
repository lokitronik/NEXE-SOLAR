import React from 'react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onServicesClick }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200">
      {/* Background technical grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Small label: NEXE SOLAR */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-100 border border-slate-200 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#002B49]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#002B49] font-mono">
                NEXE SOLAR
              </span>
              <span className="text-[11px] text-slate-500 font-mono">| B2B Installation & Underentreprenad</span>
            </div>

            {/* Main headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] tracking-tight leading-[1.08] font-heading mb-6">
              SOLCELLSINSTALLATION FÖR FÖRETAG.
            </h1>

            {/* Supporting text */}
            <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl mb-8">
              Installation av solpaneler och DC-kablage. Underhåll och förebyggande tjänster för solcellsanläggningar.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onContactClick}
                id="hero-contact-btn"
                className="inline-flex items-center justify-center px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001B2E] transition-all rounded active:scale-[0.99] cursor-pointer group shadow-xs"
              >
                <span>KONTAKTA OSS</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onServicesClick}
                id="hero-services-btn"
                className="inline-flex items-center justify-center px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 hover:text-[#002B49] bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all rounded cursor-pointer"
              >
                <span>VÅRA TJÄNSTER</span>
                <ChevronDown className="w-4 h-4 ml-2 text-slate-500" />
              </button>
            </div>

            {/* Core attributes list */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#002B49] shrink-0" />
                <span>Montering & takmontage</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#002B49] shrink-0" />
                <span>DC-kablage & dragning</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#002B49] shrink-0" />
                <span>Underhåll & service</span>
              </div>
            </div>

          </div>

          {/* Right Column: Generic Professional Stock Image of Technicians */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-300 bg-slate-100 shadow-lg">
              
              {/* Technical framing bar */}
              <div className="bg-[#002B49] text-white px-4 py-2 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  INSTALLATION PÅ PLATS
                </span>
                <span className="text-slate-300 text-[11px]">SVERIGE</span>
              </div>

              {/* Generic stock image (Image 1 of max 2-3) */}
              <div className="relative h-72 sm:h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                  alt="Solcellstekniker installerar solpaneler på tak"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B49]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded border border-slate-200 text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#002B49] block mb-1">
                    B2B Installationspartner
                  </span>
                  <p className="text-xs text-slate-600 leading-snug">
                    Praktiskt montage och tekniskt fältarbete för solcellsföretag och entreprenörer.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
