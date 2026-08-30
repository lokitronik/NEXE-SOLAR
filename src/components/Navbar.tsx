import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'TJÄNSTER', href: '#tjanster' },
    { name: 'FÖR FÖRETAG', href: '#installationspartner' },
    { name: 'KAPACITET', href: '#kapacitet' },
    { name: 'KONTAKT', href: '#kontakt' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs'
          : 'bg-white border-b border-slate-200 py-3.5 sm:py-4.5'
      }`}
      style={{
        paddingTop: isScrolled
          ? 'calc(0.75rem + env(safe-area-inset-top, 0px))'
          : 'calc(0.9rem + env(safe-area-inset-top, 0px))',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="flex items-center focus:outline-none py-0.5"
            aria-label="NEXE SOLAR startsida"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo variant="dark" size="md" className="hover:opacity-90 transition-opacity" />
          </a>

          {/* Desktop / Tablet Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Huvudmeny">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-mono font-semibold tracking-widest text-slate-700 hover:text-[#002B49] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onContactClick}
              id="navbar-contact-cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] active:scale-[0.98] transition-all cursor-pointer rounded-xs"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </button>
          </div>

          {/* Mobile & Tablet Controls */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <button
              onClick={onContactClick}
              aria-label="Kontakta oss"
              className="px-3.5 py-2 min-h-[40px] text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] active:scale-95 transition-all rounded-xs flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:hidden" />
              <span>KONTAKT</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-800 hover:bg-slate-100 active:bg-slate-200 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#002B49] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer / Overlay Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay for phones & tablets */}
          <div
            className="fixed inset-0 top-[65px] bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            id="mobile-navigation-menu"
            className="relative z-50 lg:hidden bg-white border-b border-slate-200 px-5 sm:px-8 pt-4 pb-6 mt-3 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150"
          >
            <nav className="space-y-1" aria-label="Mobil navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-800 hover:text-[#002B49] hover:bg-slate-50 active:bg-slate-100 py-3.5 px-3 rounded-xs border-b border-slate-100 transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full min-h-[48px] flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] active:scale-[0.99] rounded-xs shadow-xs transition-all"
              >
                <span>KONTAKTA OSS</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

