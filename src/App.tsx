import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstallationPartner } from './components/InstallationPartner';
import { Services } from './components/Services';
import { ProcessGallery } from './components/ProcessGallery';
import { About } from './components/About';
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#002B49] selection:text-white">
      {/* Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Single Page Content - ONLY 5 SECTIONS */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero onContactClick={scrollToContact} onServicesClick={scrollToServices} />

        {/* 2. INSTALLATIONSPARTNER */}
        <InstallationPartner />

        {/* 3. TJÄNSTER */}
        <Services />

        {/* 4. MONTAGEPROCESS & RESULTAT */}
        <ProcessGallery />

        {/* 5. OM NEXE SOLAR / KAPACITET */}
        <About />

        {/* 6. CONTACT */}
        <Contact ref={contactRef} />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

