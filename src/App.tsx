import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ForCompanies } from './components/ForCompanies';
import { Experience } from './components/Experience';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('Solcellsinstallation');
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContact = (servicePreset?: string) => {
    if (servicePreset) {
      setSelectedServicePreset(servicePreset);
    }
    const contactElement = document.getElementById('kontakt');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('tjanster');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#002B49] selection:text-white">
      {/* Fast navigering */}
      <Navbar onDiscussClick={() => scrollToContact()} />

      {/* Huvudinnehåll på en enda scrollande sida */}
      <main className="flex-1">
        {/* Sektion 1: HERO */}
        <Hero
          onDiscussClick={() => scrollToContact()}
          onServicesClick={scrollToServices}
        />

        {/* Sektion 2: TJÄNSTER */}
        <Services
          onSelectServiceForQuote={(serviceName) => scrollToContact(serviceName)}
        />

        {/* Sektion 3: FÖR FÖRETAG SOM BEHÖVER INSTALLATIONSKAPACITET */}
        <ForCompanies onDiscussClick={() => scrollToContact()} />

        {/* Sektion 4: ERFARENHET */}
        <Experience />

        {/* Sektion 5: KONTAKT */}
        <ContactForm
          ref={contactFormRef}
          selectedServicePreset={selectedServicePreset}
        />
      </main>

      {/* Sidfot */}
      <Footer />
    </div>
  );
}
