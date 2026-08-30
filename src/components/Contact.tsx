import React, { useState, forwardRef } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

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
      setErrorMessage('Vänligen fyll i företag, kontaktperson, e-post och telefon.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section
      id="kontakt"
      ref={ref}
      className="py-24 sm:py-32 bg-white border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
              05 / PROJEKTFÖRFRÅGAN
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] tracking-tight font-heading leading-[1.08]">
            HAR NI ETT PROJEKT?
          </h2>

          <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed font-normal pt-1">
            Berätta kort om projektet och vad ni behöver hjälp med.
          </p>
        </div>

        {/* Form Container */}
        {isSubmitted ? (
          <div className="p-12 sm:p-16 bg-slate-50 border border-slate-200 rounded-xs text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#002B49] font-heading">
              Tack för er förfrågan
            </h3>
            <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              Vi har tagit emot informationen för <strong>{formData.foretag}</strong> och återkommer snarast möjligt.
            </p>
            <div className="pt-4">
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
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#002B49] hover:underline"
              >
                Skicka en ny förfrågan
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200/90 p-8 sm:p-12 lg:p-14 rounded-xs space-y-8 shadow-xs">
            
            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xs flex items-center gap-3 text-xs text-red-700 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Row 1: Företag & Kontaktperson */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label
                  htmlFor="field-foretag"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2.5"
                >
                  Företag <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="field-foretag"
                  name="foretag"
                  required
                  value={formData.foretag}
                  onChange={handleChange}
                  placeholder="Företagsnamn"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-kontaktperson"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2.5"
                >
                  Kontaktperson <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="field-kontaktperson"
                  name="kontaktperson"
                  required
                  value={formData.kontaktperson}
                  onChange={handleChange}
                  placeholder="För- och efternamn"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: E-post & Telefon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label
                  htmlFor="field-epost"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2.5"
                >
                  E-post <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="field-epost"
                  name="epost"
                  required
                  value={formData.epost}
                  onChange={handleChange}
                  placeholder="namn@foretag.se"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-telefon"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2.5"
                >
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="field-telefon"
                  name="telefon"
                  required
                  value={formData.telefon}
                  onChange={handleChange}
                  placeholder="07X-XXX XX XX"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Projektets ort, Antal paneler, Planerad start */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <label
                  htmlFor="field-ort"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2.5"
                >
                  Projektets ort
                </label>
                <input
                  type="text"
                  id="field-ort"
                  name="projektetsOrt"
                  value={formData.projektetsOrt}
                  onChange={handleChange}
                  placeholder="T.ex. Stockholm, Malmö..."
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-paneler"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2.5"
                >
                  Antal paneler
                </label>
                <input
                  type="text"
                  id="field-paneler"
                  name="antalPaneler"
                  value={formData.antalPaneler}
                  onChange={handleChange}
                  placeholder="T.ex. 50 st, 200 st..."
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-start"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2.5"
                >
                  Planerad start
                </label>
                <input
                  type="text"
                  id="field-start"
                  name="planeradStart"
                  value={formData.planeradStart}
                  onChange={handleChange}
                  placeholder="T.ex. Q2, Omgående..."
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 4: Meddelande */}
            <div>
              <label
                htmlFor="field-meddelande"
                className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2.5"
              >
                Meddelande
              </label>
              <textarea
                id="field-meddelande"
                name="meddelande"
                rows={5}
                value={formData.meddelande}
                onChange={handleChange}
                placeholder="Beskriv ert projekt och vad ni behöver hjälp med..."
                className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="contact-submit-button"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-4.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] transition-colors rounded-xs cursor-pointer disabled:opacity-60 shadow-xs"
              >
                <span>{isSubmitting ? 'SKICKAR...' : 'SKICKA FÖRFRÅGAN'}</span>
                <Send className="w-4 h-4 text-slate-300" />
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

