import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { B2BSection } from './components/B2BSection';
import { Services } from './components/Services';
import { ForCompanies } from './components/ForCompanies';
import { HowWeWork } from './components/HowWeWork';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('tjanster');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#002B49] selection:text-white">
      {/* Fixed top navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Sektion 1: HERO */}
        <Hero
          onContactClick={scrollToContact}
          onServicesClick={scrollToServices}
        />

        {/* Sektion 2: B2B SECTION */}
        <B2BSection onContactClick={scrollToContact} />

        {/* Sektion 3: TJÄNSTER */}
        <Services />

        {/* Sektion 4: FÖR FÖRETAG */}
        <ForCompanies />

        {/* Sektion 5: SÅ ARBETAR VI */}
        <HowWeWork />

        {/* Sektion 6: PRAKTISK ERFARENHET */}
        <Experience />

        {/* Sektion 7: HAR NI ETT PROJEKT? (KONTAKT) */}
        <Contact ref={contactRef} />
      </main>

      {/* Sektion 8: FOOTER */}
      <Footer />
    </div>
  );
}
