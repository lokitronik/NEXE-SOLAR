import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { B2BSection } from './components/B2BSection';
import { Services } from './components/Services';
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
        {/* 1. Hero */}
        <Hero
          onContactClick={scrollToContact}
          onServicesClick={scrollToServices}
        />

        {/* 2. B2B / Installation partner */}
        <B2BSection onContactClick={scrollToContact} />

        {/* 3. Services */}
        <Services />

        {/* 4. How we work */}
        <HowWeWork />

        {/* 5. Experience */}
        <Experience />

        {/* 6. Contact */}
        <Contact ref={contactRef} />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
