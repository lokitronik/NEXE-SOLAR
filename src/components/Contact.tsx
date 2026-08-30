import React, { useState, forwardRef } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const [formData, setFormData] = useState({
    foretag: '',
    kontaktperson: '',
    epost: '',
    telefon: '',
    projektetsOrt: '',
    antalPaneler: '',
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
      className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B49] tracking-tight font-heading">
            HAR NI ETT PROJEKT?
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
            Berätta kort om projektet och vad ni behöver hjälp med.
          </p>
        </div>

        {/* Form Container */}
        {isSubmitted ? (
          <div className="p-10 sm:p-14 bg-slate-50 border border-slate-200 rounded-xs text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002B49] font-heading">
              Tack för er förfrågan
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Vi har tagit emot informationen för {formData.foretag} och återkommer inom kort.
            </p>
            <div className="pt-2">
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
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xs flex items-center gap-3 text-xs text-red-700 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Row 1: Företag & Kontaktperson */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="field-foretag"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-kontaktperson"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                  placeholder="Namn"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: E-post & Telefon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="field-epost"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-telefon"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                  placeholder="Telefonnummer"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Projektets ort & Antal paneler */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="field-ort"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
                >
                  Projektets ort
                </label>
                <input
                  type="text"
                  id="field-ort"
                  name="projektetsOrt"
                  value={formData.projektetsOrt}
                  onChange={handleChange}
                  placeholder="Ort"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-paneler"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
                >
                  Antal paneler
                </label>
                <input
                  type="text"
                  id="field-paneler"
                  name="antalPaneler"
                  value={formData.antalPaneler}
                  onChange={handleChange}
                  placeholder="Antal"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 4: Meddelande */}
            <div>
              <label
                htmlFor="field-meddelande"
                className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
              >
                Meddelande
              </label>
              <textarea
                id="field-meddelande"
                name="meddelande"
                rows={5}
                value={formData.meddelande}
                onChange={handleChange}
                placeholder="Beskriv projektet..."
                className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-1 focus:ring-[#002B49] rounded-xs px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="contact-submit-button"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] transition-colors rounded-xs cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? 'SKICKAR...' : 'SKICKA FÖRFRÅGAN'}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
