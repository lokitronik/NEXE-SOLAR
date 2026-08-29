import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onDiscussClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscussClick, onServicesClick }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white border-b border-slate-200">
      {/* Background technical grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Swedish Headline and Core Message */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Direct B2B Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-100 border border-slate-200 w-fit mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#002B49]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#002B49] font-mono">
                B2B Installationspartner & Underentreprenör
              </span>
              <span className="text-[10px] text-slate-400 font-mono">| Sverige</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] tracking-tight leading-[1.1] font-heading mb-6">
              NI HAR PROJEKTET.<br />
              <span className="text-slate-700">VI HAR INSTALLATIONSTEAMET.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              Professionell installation av solpaneler, DC-kablage, underhåll och förebyggande tjänster för företag och solcellsprojekt i Sverige.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onDiscussClick}
                id="hero-discuss-btn"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001B2E] transition-all rounded shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer group"
              >
                <span>DISKUTERA ERT PROJEKT</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onServicesClick}
                id="hero-services-btn"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-[#002B49] bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all rounded cursor-pointer"
              >
                <span>VÅRA TJÄNSTER</span>
                <ChevronDown className="w-4 h-4 ml-2 text-slate-500" />
              </button>
            </div>

            {/* Quick bullet highlights */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#002B49] shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Takinstallation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#002B49] shrink-0" />
                <span className="text-xs font-semibold text-slate-700">DC-kablage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#002B49] shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Underhåll & service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#002B49] shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Hela Sverige</span>
              </div>
            </div>

          </div>

          {/* Right Column: Generic Professional Scandinavian Rooftop Installation Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-300 bg-slate-100 shadow-xl">
              
              {/* Top technical bar */}
              <div className="bg-[#002B49] text-white px-4 py-2 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  INSTALLATIONSKAPACITET
                </span>
                <span className="text-slate-300 text-[11px]">B2B UNDERENTREPRENAD</span>
              </div>

              {/* Photo */}
              <div className="relative h-72 sm:h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                  alt="Solcellstekniker installerar solpaneler på tak"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B49]/70 via-transparent to-transparent" />

                {/* Floating summary badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded border border-slate-200 text-left shadow-md">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#002B49]">
                      Installationspartner
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">Bostad & Kommersiellt</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    Erfarna installationsteam för solcellsföretag, entreprenörer och projektutvecklare.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-slate-900 text-slate-100 text-[11px] font-mono px-3 py-1.5 rounded border border-slate-700 shadow-md">
              <span>NEXE GROUP AB // DIVISION: SOLAR</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
