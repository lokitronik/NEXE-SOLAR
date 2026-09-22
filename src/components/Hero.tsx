import React from 'react';
import { ArrowRight, ChevronDown, Zap, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
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
      {/* Background Solar Installation Image with gentle ambient zoom and contrast overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src={heroSolarImage}
          alt="Professionell solcellsinstallation på tak i Sverige - NEXE SOLAR"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic dark gradient overlays for crystal-clear readability */}
        <div className="absolute inset-0 bg-slate-950/65 sm:bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          className="max-w-4xl text-left space-y-6 sm:space-y-8 lg:space-y-10"
        >
          {/* Small Brand Label with Active Ping Radar */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/95 backdrop-blur-xs border border-white/30 rounded-xs shadow-xs"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#002B49]" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#002B49] uppercase">
              NEXE SOLAR • SVERIGE
            </span>
          </motion.div>

          {/* Main Headline with responsive clamp */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="space-y-1 sm:space-y-2"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] font-heading break-words drop-shadow-xs">
              SOLCELLSINSTALLATION
            </h1>
            <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-200 tracking-tight leading-[1.06] font-heading drop-shadow-xs">
              FÖR FÖRETAG.
            </div>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-base sm:text-xl lg:text-2xl text-slate-100 font-normal leading-relaxed max-w-3xl drop-shadow-xs"
          >
            Installation av solpaneler och DC-kablage. Underhåll och förebyggande tjänster för solcellsanläggningar i hela Sverige.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <button
              onClick={onContactClick}
              id="hero-contact-button"
              className="group inline-flex items-center justify-center gap-3 min-h-[48px] sm:min-h-[52px] px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] active:scale-[0.98] transition-all cursor-pointer rounded-xs shadow-md border border-white/10"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-4 h-4 text-slate-300 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onServicesClick}
              id="hero-services-button"
              className="group inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[52px] px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-900 bg-white/95 hover:bg-white active:scale-[0.98] border border-white/40 transition-all cursor-pointer rounded-xs shadow-md"
            >
              <span>VÅRA TJÄNSTER</span>
              <ChevronDown className="w-4 h-4 text-slate-600 transition-transform duration-200 group-hover:translate-y-0.5" />
            </button>
          </motion.div>

          {/* Dynamic Trust Badges */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="pt-4 sm:pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/90"
          >
            <div className="flex items-center gap-2.5 bg-slate-900/40 backdrop-blur-xs px-3.5 py-2.5 rounded-xs border border-white/10 hover:border-white/25 transition-colors">
              <Zap className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-xs font-mono font-semibold tracking-wide text-slate-200">
                Montage & DC-kablage
              </span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-900/40 backdrop-blur-xs px-3.5 py-2.5 rounded-xs border border-white/10 hover:border-white/25 transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-mono font-semibold tracking-wide text-slate-200">
                Certifierade Heta Arbeten
              </span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-900/40 backdrop-blur-xs px-3.5 py-2.5 rounded-xs border border-white/10 hover:border-white/25 transition-colors">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-mono font-semibold tracking-wide text-slate-200">
                Uppdrag i hela Sverige
              </span>
            </div>
          </motion.div>

        </motion.div>

        {/* Animated Scroll Prompt Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="hidden md:flex items-center gap-2 text-white/70 hover:text-white pt-10 sm:pt-14 cursor-pointer text-xs font-mono tracking-widest uppercase transition-colors"
          onClick={onServicesClick}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
          <span>Skrolla för att utforska</span>
          <ChevronDown className="w-4 h-4 text-white/70" />
        </motion.div>

      </div>
    </section>
  );
};


