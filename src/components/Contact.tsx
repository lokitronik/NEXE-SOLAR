import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Send, Mail, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (
      !formData.foretag.trim() ||
      !formData.kontaktperson.trim() ||
      !formData.epost.trim() ||
      !formData.telefon.trim()
    ) {
      setErrorMessage('Vänligen fyll i företag, kontaktperson, e-post och telefon.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      formPayload.append('foretag', formData.foretag.trim());
      formPayload.append('kontaktperson', formData.kontaktperson.trim());
      formPayload.append('email', formData.epost.trim());
      formPayload.append('telefon', formData.telefon.trim());
      formPayload.append('projektetsOrt', formData.projektetsOrt.trim());
      formPayload.append('antalPaneler', formData.antalPaneler.trim());
      formPayload.append('planeradStart', formData.planeradStart.trim());
      formPayload.append('message', formData.meddelande.trim());
      formPayload.append('_subject', 'Ny förfrågan – NEXE SOLAR');

      const response = await fetch('https://formspree.io/f/xkjgrjkb', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formPayload,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          'Förfrågan kunde inte skickas. Försök igen eller mejla direkt till kontakt@nexegroup.se.'
        );
      }
    } catch {
      setErrorMessage(
        'Nätverksfel. Kontrollera din anslutning eller mejla kontakt@nexegroup.se.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-section-heading"
      className="py-16 sm:py-24 lg:py-32 bg-white border-b border-slate-200 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
              05 / PROJEKTFÖRFRÅGAN
            </span>
          </div>

          <h2
            id="contact-section-heading"
            className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] tracking-tight font-heading leading-[1.08] break-words"
          >
            HAR NI ETT PROJEKT?
          </h2>

          <p className="text-base sm:text-xl lg:text-2xl text-slate-700 leading-relaxed font-normal pt-1">
            Berätta kort om projektet och vad ni behöver hjälp med. Vi återkopplar snabbt.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-slate-600">
            <span>Föredrar ni direktkontakt? E-post:</span>
            <a
              href="mailto:kontakt@nexegroup.se"
              translate="no"
              className="notranslate text-[#002B49] font-bold hover:underline inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 transition-colors px-3 py-1.5 rounded-xs border border-slate-200"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span translate="no" className="notranslate">kontakt@nexegroup.se</span>
            </a>
          </div>
        </motion.div>

        {/* Form Container */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 lg:p-16 bg-slate-50 border border-slate-200 rounded-xs text-center space-y-5"
          >
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#002B49] font-heading">
              Tack för er förfrågan
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
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
                className="min-h-[44px] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#002B49] hover:underline"
              >
                Skicka en ny förfrågan
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-slate-50 border border-slate-200/90 p-6 sm:p-10 lg:p-14 rounded-xs space-y-6 sm:space-y-8 shadow-xs"
          >
            {errorMessage && (
              <div
                role="alert"
                className="p-4 bg-red-50 border border-red-200 rounded-xs flex items-center gap-3 text-xs sm:text-sm text-red-700 font-medium"
              >
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                <span>
                  {errorMessage.includes('kontakt@nexegroup.se') ? (
                    <>
                      {errorMessage.split('kontakt@nexegroup.se')[0]}
                      <span translate="no" className="notranslate font-semibold">kontakt@nexegroup.se</span>
                      {errorMessage.split('kontakt@nexegroup.se')[1]}
                    </>
                  ) : (
                    errorMessage
                  )}
                </span>
              </div>
            )}

            {/* Row 1: Företag & Kontaktperson */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
              <div>
                <label
                  htmlFor="field-foretag"
                  className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Företag <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="field-foretag"
                  name="foretag"
                  required
                  autoComplete="organization"
                  value={formData.foretag}
                  onChange={handleChange}
                  placeholder="Företagsnamn"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-2 focus:ring-[#002B49]/20 rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-kontaktperson"
                  className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Kontaktperson <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="field-kontaktperson"
                  name="kontaktperson"
                  required
                  autoComplete="name"
                  value={formData.kontaktperson}
                  onChange={handleChange}
                  placeholder="För- och efternamn"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-2 focus:ring-[#002B49]/20 rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: E-post & Telefon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
              <div>
                <label
                  htmlFor="field-epost"
                  className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2"
                >
                  E-post <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="field-epost"
                  name="epost"
                  required
                  inputMode="email"
                  autoComplete="email"
                  value={formData.epost}
                  onChange={handleChange}
                  placeholder="namn@foretag.se"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-2 focus:ring-[#002B49]/20 rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-telefon"
                  className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Telefon <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="tel"
                  id="field-telefon"
                  name="telefon"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  value={formData.telefon}
                  onChange={handleChange}
                  placeholder="07X-XXX XX XX"
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-2 focus:ring-[#002B49]/20 rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Projektets ort, Antal paneler, Planerad start */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              <div>
                <label
                  htmlFor="field-ort"
                  className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2"
                >
                  Projektets ort
                </label>
                <input
                  type="text"
                  id="field-ort"
                  name="projektetsOrt"
                  autoComplete="address-level2"
                  value={formData.projektetsOrt}
                  onChange={handleChange}
                  placeholder="T.ex. Stockholm, Malmö..."
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-2 focus:ring-[#002B49]/20 rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-paneler"
                  className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2"
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
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-2 focus:ring-[#002B49]/20 rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="field-start"
                  className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2"
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
                  className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-2 focus:ring-[#002B49]/20 rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 4: Meddelande */}
            <div>
              <label
                htmlFor="field-meddelande"
                className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2"
              >
                Meddelande
              </label>
              <textarea
                id="field-meddelande"
                name="meddelande"
                rows={4}
                value={formData.meddelande}
                onChange={handleChange}
                placeholder="Beskriv ert projekt och vad ni behöver hjälp med..."
                className="w-full bg-white border border-slate-300 focus:border-[#002B49] focus:ring-2 focus:ring-[#002B49]/20 rounded-xs px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition-colors resize-y min-h-[110px]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="contact-submit-button"
                disabled={isSubmitting}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 min-h-[48px] sm:min-h-[52px] px-10 sm:px-12 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] active:scale-[0.98] transition-all rounded-xs cursor-pointer disabled:opacity-60 shadow-xs"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-300" />
                    <span>SKICKAR FÖRFRÅGAN...</span>
                  </>
                ) : (
                  <>
                    <span>SKICKA FÖRFRÅGAN</span>
                    <Send className="w-4 h-4 text-slate-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};
