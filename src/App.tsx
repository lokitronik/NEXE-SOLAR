import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstallationPartner } from './components/InstallationPartner';
import { Services } from './components/Services';
import { ProcessGallery } from './components/ProcessGallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';
import { HetaArbetenPage } from './components/HetaArbetenPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'heta-arbeten'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#heta-arbeten-papp' || hash === '#heta-arbeten') {
        return 'heta-arbeten';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#heta-arbeten-papp' || hash === '#heta-arbeten') {
        setCurrentPage('heta-arbeten');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === '#hero' || hash === '#home') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHetaArbeten = () => {
    setCurrentPage('heta-arbeten');
    window.location.hash = 'heta-arbeten-papp';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    if (window.location.hash === '#heta-arbeten-papp' || window.location.hash === '#heta-arbeten') {
      history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const contactElem = document.getElementById('kontakt');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const servicesElem = document.getElementById('tjanster');
        if (servicesElem) {
          servicesElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    const servicesElem = document.getElementById('tjanster');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#002B49] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onContactClick={scrollToContact}
        onNavigateHome={navigateToHome}
        onNavigateHetaArbeten={navigateToHetaArbeten}
      />

      {/* Main Content: Switches between Home Page and Dedicated Heta Arbeten Page */}
      <main className="flex-1">
        {currentPage === 'heta-arbeten' ? (
          <HetaArbetenPage
            onBackToHome={navigateToHome}
            onContactClick={scrollToContact}
          />
        ) : (
          <>
            {/* 1. HERO - with native parallax & recede */}
            <Hero onContactClick={scrollToContact} onServicesClick={scrollToServices} />

            {/* 2. INSTALLATIONSPARTNER - zooms in on approach, recedes on scroll */}
            <AnimatedSection direction="zoom-in-out">
              <InstallationPartner />
            </AnimatedSection>

            {/* 3. TJÄNSTER - smooth scale & depth reveal */}
            <AnimatedSection direction="zoom-in-out">
              <Services onNavigateHetaArbeten={navigateToHetaArbeten} />
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
          </>
        )}
      </main>

      {/* FOOTER */}
      <Footer
        onNavigateHome={navigateToHome}
        onNavigateHetaArbeten={navigateToHetaArbeten}
      />
    </div>
  );
}
