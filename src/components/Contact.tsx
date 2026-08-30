import React, { useState, forwardRef } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, MapPin, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const [formData, setFormData] = useState({
    foretag: '',
    kontaktperson: '',
    epost: '',
    telefon: '',
    projektetsOrt: '',
    antalPaneler: '',
    planeradStart: '',
    meddelande: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.foretag.trim() || !formData.kontaktperson.trim() || !formData.epost.trim() || !formData.telefon.trim()) {
      setErrorMessage('Vänligen fyll i företag, kontaktperson, e-post och telefonnummer.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="kontakt" ref={ref} className="py-20 sm:py-28 bg-slate-900 text-white relative scroll-mt-12">
      {/* Dark background technical pattern */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-xs text-slate-300 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>B2B KONTAKT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            HAR NI ETT PROJEKT?
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            Berätta kort om projektet och vad ni behöver hjälp med.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Presentation */}
          <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700/80 rounded-xs p-6 sm:p-8 text-left">
            <div className="mb-6">
              <Logo variant="light" size="sm" />
            </div>

            <div className="p-4 bg-slate-900/90 rounded-xs border border-slate-700/70 mb-6">
              <h3 className="text-sm font-bold text-white mb-1 font-heading">NEXE SOLAR</h3>
              <p className="text-xs text-slate-300 mb-1">En del av NEXE GROUP AB</p>
              <p className="text-xs text-slate-400 font-mono">Sverige</p>
            </div>

            <div className="space-y-4 mb-6 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Installationspartner & underentreprenör för företag</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Installationsteam för solcellsprojekt i Sverige</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Snabba svar på projektförfrågningar</span>
              </div>
            </div>

            <div className="p-4 bg-slate-900/60 rounded-xs border border-slate-800 text-[11px] text-slate-400 font-mono">
              <p className="text-slate-200 font-bold mb-1">Kapacitetsförfrågan</p>
              <p>Vi återkopplar skyndsamt kring tillgänglighet, omfattning och planering.</p>
            </div>
          </div>

          {/* Right Column: Clean B2B Form */}
          <div className="lg:col-span-8 bg-slate-800/95 border border-slate-700/80 rounded-xs p-6 sm:p-10 text-left">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                  Tack för er förfrågan!
                </h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed mb-6">
                  Vi har tagit emot uppgifterna för <span className="font-semibold text-white">{formData.foretag}</span> och kontaktar <span className="font-semibold text-white">{formData.kontaktperson}</span> inom kort.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      foretag: '',
                      kontaktperson: '',
                      epost: '',
                      telefon: '',
                      projektetsOrt: '',
                      antalPaneler: '',
                      planeradStart: '',
                      meddelande: '',
                    });
                  }}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-xs transition-all cursor-pointer font-mono"
                >
                  Skicka en ny förfrågan
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMessage && (
                  <div className="p-3 bg-red-900/40 border border-red-500/50 rounded-xs flex items-center gap-2 text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Row 1: Företag & Kontaktperson */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-foretag" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Företag <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-foretag"
                      name="foretag"
                      required
                      value={formData.foretag}
                      onChange={handleChange}
                      placeholder="Företagsnamn"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-kontaktperson" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Kontaktperson <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-kontaktperson"
                      name="kontaktperson"
                      required
                      value={formData.kontaktperson}
                      onChange={handleChange}
                      placeholder="För- och efternamn"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: E-post & Telefon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-epost" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      E-post <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-epost"
                      name="epost"
                      required
                      value={formData.epost}
                      onChange={handleChange}
                      placeholder="namn@foretag.se"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-telefon" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Telefon <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="form-telefon"
                      name="telefon"
                      required
                      value={formData.telefon}
                      onChange={handleChange}
                      placeholder="070-123 45 67"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Projektets ort, Antal paneler, Planerad start */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="form-ort" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Projektets ort
                    </label>
                    <input
                      type="text"
                      id="form-ort"
                      name="projektetsOrt"
                      value={formData.projektetsOrt}
                      onChange={handleChange}
                      placeholder="Ort / Stad"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-antal-paneler" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Antal paneler
                    </label>
                    <input
                      type="text"
                      id="form-antal-paneler"
                      name="antalPaneler"
                      value={formData.antalPaneler}
                      onChange={handleChange}
                      placeholder="T.ex. 120 st"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-start" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Planerad start
                    </label>
                    <input
                      type="text"
                      id="form-start"
                      name="planeradStart"
                      value={formData.planeradStart}
                      onChange={handleChange}
                      placeholder="T.ex. Månad / Vecka"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 4: Meddelande */}
                <div>
                  <label htmlFor="form-meddelande" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Meddelande
                  </label>
                  <textarea
                    id="form-meddelande"
                    name="meddelande"
                    rows={4}
                    value={formData.meddelande}
                    onChange={handleChange}
                    placeholder="Beskriv ert projekt och vad ni behöver hjälp med..."
                    className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="form-submit-button"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 transition-all rounded-xs active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 font-mono"
                  >
                    {isSubmitting ? (
                      <span>SKICKAR FÖRFRÅGAN...</span>
                    ) : (
                      <>
                        <span>SKICKA FÖRFRÅGAN</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
