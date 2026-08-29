import React, { useState, forwardRef } from 'react';
import { Send, CheckCircle2, Building, Mail, MapPin, AlertCircle } from 'lucide-react';
import { Logo } from './Logo';

interface ContactFormProps {
  selectedServicePreset?: string;
}

export const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(({ selectedServicePreset }, ref) => {
  const [formData, setFormData] = useState({
    namn: '',
    foretag: '',
    epost: '',
    telefon: '',
    ort: '',
    antalPaneler: '',
    meddelande: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // If a preset service is passed from a service card, we can pre-populate message or notes
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({
        ...prev,
        meddelande: prev.meddelande || `Gäller förfrågan: ${selectedServicePreset}`,
      }));
    }
  }, [selectedServicePreset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePanelPreset = (range: string) => {
    setFormData((prev) => ({ ...prev, antalPaneler: range }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.namn.trim() || !formData.foretag.trim() || !formData.epost.trim() || !formData.telefon.trim()) {
      setErrorMessage('Vänligen fyll i namn, företag, e-post och telefonnummer.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const panelOptions = ['20–80 paneler', '80–250 paneler', '250–1 000 paneler', '1 000+ paneler'];

  return (
    <section id="kontakt" ref={ref} className="py-20 bg-slate-900 text-white relative scroll-mt-12">
      {/* Dark pattern */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>B2B FÖRFRÅGAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            HAR NI ETT PROJEKT ÅT OSS?
          </h2>

          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Berätta vad ni behöver hjälp med så återkommer vi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Corporate Identity */}
          <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700 rounded-xl p-6 sm:p-8 text-left">
            <div className="mb-6">
              <Logo variant="light" size="sm" />
            </div>

            <div className="p-4 bg-slate-900/90 rounded border border-slate-700/80 mb-6">
              <h3 className="text-sm font-bold text-white mb-1">NEXE SOLAR</h3>
              <p className="text-xs text-slate-300 mb-1">En del av NEXE GROUP AB</p>
              <p className="text-xs text-slate-400 font-mono">Sverige</p>
            </div>

            <div className="space-y-4 mb-6 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Verksamma med installationsteam över hela Sverige</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Direkt B2B-kontakt för projekt & förfrågningar</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-800 rounded border border-slate-700 text-xs text-slate-400 font-mono">
              <p className="text-slate-300 font-bold mb-1">Underentreprenad</p>
              <p>Vi återkopplar skyndsamt kring tillgänglighet, tidsplan och kapacitet.</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8 bg-slate-800/95 border border-slate-700 rounded-xl p-6 sm:p-10 shadow-2xl text-left">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                  Tack för er förfrågan!
                </h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed mb-6">
                  Vi har tagit emot er projektförfrågan för <span className="font-semibold text-white">{formData.foretag}</span>. Vi går igenom uppgifterna och återkommer till <span className="font-semibold text-white">{formData.namn}</span> inom kort.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      namn: '',
                      foretag: '',
                      epost: '',
                      telefon: '',
                      ort: '',
                      antalPaneler: '',
                      meddelande: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded transition-all cursor-pointer"
                >
                  Skicka en ny förfrågan
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMessage && (
                  <div className="p-3 bg-red-900/40 border border-red-500/50 rounded flex items-center gap-2 text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Namn */}
                  <div>
                    <label htmlFor="form-namn" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Namn <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-namn"
                      name="namn"
                      required
                      value={formData.namn}
                      onChange={handleChange}
                      placeholder="För- och efternamn"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Företag */}
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
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* E-post */}
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
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Telefon */}
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
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Projektets ort */}
                  <div>
                    <label htmlFor="form-ort" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Projektets ort
                    </label>
                    <input
                      type="text"
                      id="form-ort"
                      name="ort"
                      value={formData.ort}
                      onChange={handleChange}
                      placeholder="T.ex. Stockholm, Göteborg, Malmö..."
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Ungefärligt antal paneler */}
                  <div>
                    <label htmlFor="form-antal-paneler" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Ungefärligt antal paneler
                    </label>
                    <input
                      type="text"
                      id="form-antal-paneler"
                      name="antalPaneler"
                      value={formData.antalPaneler}
                      onChange={handleChange}
                      placeholder="T.ex. 120 paneler / ca 50 kWp"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Quick panel selection tags */}
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1.5 font-mono">Snabbval antal paneler:</span>
                  <div className="flex flex-wrap gap-2">
                    {panelOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handlePanelPreset(opt)}
                        className={`text-xs px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                          formData.antalPaneler === opt
                            ? 'bg-white text-slate-900 border-white font-bold'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Meddelande */}
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
                    placeholder="Beskriv ert projekt, typ av tak, önskad starttidpunkt eller vad ni behöver hjälp med..."
                    className="w-full bg-slate-900 border border-slate-700 focus:border-white focus:ring-1 focus:ring-white rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all resize-y"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="form-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 transition-all rounded shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
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

ContactForm.displayName = 'ContactForm';
