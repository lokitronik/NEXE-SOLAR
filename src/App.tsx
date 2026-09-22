import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstallationPartner } from './components/InstallationPartner';
import { Services } from './components/Services';
import { ProcessGallery } from './components/ProcessGallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';

export default function App() {
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#002B49] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Single Page Content with Dynamic Inter-Section Scroll Depth */}
      <main className="flex-1">
        {/* 1. HERO - with native parallax & recede */}
        <Hero onContactClick={scrollToContact} onServicesClick={scrollToServices} />

        {/* 2. INSTALLATIONSPARTNER - zooms in on approach, recedes on scroll */}
        <AnimatedSection direction="zoom-in-out">
          <InstallationPartner />
        </AnimatedSection>

        {/* 3. TJÄNSTER - smooth scale & depth reveal */}
        <AnimatedSection direction="zoom-in-out">
          <Services />
        </AnimatedSection>

        {/* 4. MONTAGEPROCESS & RESULTAT - subtle depth transition */}
        <AnimatedSection direction="subtle-depth">
          <ProcessGallery />
        </AnimatedSection>

        {/* 5. OM NEXE SOLAR / KAPACITET - zooms in on approach, recedes on scroll */}
        <AnimatedSection direction="zoom-in-out">
          <About />
        </AnimatedSection>

        {/* 6. CONTACT */}
        <AnimatedSection direction="subtle-depth">
          <Contact />
        </AnimatedSection>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
