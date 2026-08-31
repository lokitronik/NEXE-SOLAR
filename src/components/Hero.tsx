import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroSolarImage from '../assets/images/rooftop_solar_panels_1788180941974.jpg';

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onServicesClick }) => {
  return (
    <section
      id="hero"
      aria-label="Introduktion"
      className="relative pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 lg:pb-36 bg-slate-900 border-b border-slate-200 overflow-hidden"
    >
      {/* Background Solar Installation Image with contrast overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSolarImage}
          alt="Professionell solcellsinstallation på tak i Sverige - NEXE SOLAR"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic dark gradient overlays for crystal-clear readability */}
        <div className="absolute inset-0 bg-slate-950/65 sm:bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Small Brand Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/95 backdrop-blur-xs border border-white/30 rounded-xs shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#002B49]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#002B49] uppercase">
              NEXE SOLAR • SVERIGE
            </span>
          </div>

          {/* Main Headline with responsive clamp */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] font-heading break-words drop-shadow-xs">
              SOLCELLSINSTALLATION
            </h1>
            <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-200 tracking-tight leading-[1.06] font-heading drop-shadow-xs">
              FÖR FÖRETAG.
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl lg:text-2xl text-slate-100 font-normal leading-relaxed max-w-3xl drop-shadow-xs">
            Installation av solpaneler och DC-kablage. Underhåll och förebyggande tjänster för solcellsanläggningar i hela Sverige.
          </p>

          {/* CTAs */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onContactClick}
              id="hero-contact-button"
              className="inline-flex items-center justify-center gap-3 min-h-[48px] sm:min-h-[52px] px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] active:scale-[0.98] transition-all cursor-pointer rounded-xs shadow-md border border-white/10"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </button>

            <button
              onClick={onServicesClick}
              id="hero-services-button"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[52px] px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-900 bg-white/95 hover:bg-white active:scale-[0.98] border border-white/40 transition-all cursor-pointer rounded-xs shadow-md"
            >
              <span>VÅRA TJÄNSTER</span>
              <ChevronDown className="w-4 h-4 text-slate-600" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};


