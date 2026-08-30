import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X } from 'lucide-react';

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
    { name: 'FÖR FÖRETAG', href: '#installationspartner' },
    { name: 'KONTAKT', href: '#kontakt' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3.5'
          : 'bg-white border-b border-slate-200 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="flex items-center gap-3.5 focus:outline-none"
            aria-label="NEXE SOLAR"
          >
            <Logo variant="dark" size="sm" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-mono font-semibold tracking-widest text-slate-700 hover:text-[#002B49] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onContactClick}
              id="navbar-contact-cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] transition-colors cursor-pointer rounded-xs"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onContactClick}
              className="px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] rounded-xs"
            >
              KONTAKT
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Meny"
              className="p-1 text-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-6 mt-3 space-y-3 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono font-bold tracking-widest text-slate-800 hover:text-[#002B49] py-2 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#002B49] rounded-xs"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
