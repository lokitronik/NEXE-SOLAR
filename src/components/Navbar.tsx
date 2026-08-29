import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  onDiscussClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDiscussClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tjänster', href: '#tjanster' },
    { name: 'För företag', href: '#for-foretag' },
    { name: 'Erfarenhet', href: '#erfarenhet' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 py-3.5'
          : 'bg-white border-b border-slate-200/80 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="nav-brand-logo"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#002B49] rounded-md"
            aria-label="NEXE SOLAR hem"
          >
            <Logo variant="dark" size="sm" />
            <div className="hidden sm:flex flex-col pl-3 border-l border-slate-200 text-left">
              <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                Installationspartner
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                NEXE GROUP AB • Sverige
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-slate-700 hover:text-[#002B49] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onDiscussClick}
              id="navbar-cta-btn"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001B2E] transition-all rounded shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <span>DISKUTERA ERT PROJEKT</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onDiscussClick}
              className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1.5 bg-[#002B49] text-white rounded"
            >
              Kontakt
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-btn"
              aria-label="Öppna meny"
              className="p-2 text-slate-700 hover:text-[#002B49] hover:bg-slate-100 rounded-md focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-2 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#002B49] py-2 px-3 rounded hover:bg-slate-50 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onDiscussClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001B2E] rounded shadow"
              >
                <span>DISKUTERA ERT PROJEKT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
