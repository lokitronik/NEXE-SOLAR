import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'TJÄNSTER', href: '#tjanster' },
    { name: 'FÖR FÖRETAG', href: '#b2b' },
    { name: 'KONTAKT', href: '#kontakt' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs'
          : 'bg-white border-b border-slate-200/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Sub-descriptor */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="flex items-center gap-3.5 focus:outline-none focus:ring-1 focus:ring-[#002B49]"
            aria-label="NEXE SOLAR hem"
          >
            <Logo variant="dark" size="sm" />
            <div className="hidden sm:flex flex-col pl-3.5 border-l border-slate-200 text-left">
              <span className="text-[11px] font-semibold text-slate-800 tracking-wide uppercase font-mono">
                Installationspartner
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                NEXE GROUP AB
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-semibold tracking-widest text-slate-600 hover:text-[#002B49] transition-colors py-1 font-mono"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onContactClick}
              id="navbar-contact-cta"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001B2E] transition-all rounded-xs active:scale-[0.98] cursor-pointer"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 text-slate-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onContactClick}
              className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-[#002B49] text-white rounded-xs"
            >
              KONTAKT
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Öppna meny"
              className="p-1.5 text-slate-800 hover:text-[#002B49] rounded focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 mt-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold font-mono tracking-wider text-slate-800 hover:text-[#002B49] py-2.5 px-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001B2E] rounded-xs"
              >
                <span>KONTAKTA OSS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
