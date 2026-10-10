import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X, PhoneCall, Flame } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  currentPage?: 'home' | 'heta-arbeten';
  onNavigateHome?: () => void;
  onNavigateHetaArbeten?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onContactClick,
  currentPage = 'home',
  onNavigateHome,
  onNavigateHetaArbeten,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
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

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isHetaArbeten: boolean
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHetaArbeten) {
      if (onNavigateHetaArbeten) {
        onNavigateHetaArbeten();
      } else {
        window.location.hash = 'heta-arbeten-papp';
      }
      return;
    }

    if (currentPage !== 'home' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'TJÄNSTER', href: '#tjanster', isHetaArbeten: false },
    {
      name: 'HETA ARBETEN (PAPP)',
      href: '#heta-arbeten-papp',
      isHetaArbeten: true,
      badge: 'CERTIFIERAD',
    },
    { name: 'FÖR FÖRETAG', href: '#installationspartner', isHetaArbeten: false },
    { name: 'KAPACITET', href: '#kapacitet', isHetaArbeten: false },
    { name: 'KONTAKT', href: '#kontakt', isHetaArbeten: false },
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
      {/* Dynamic Reading Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] bg-[#002B49] transition-all duration-150 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="flex items-center focus:outline-none py-0.5 cursor-pointer"
            aria-label="NEXE SOLAR startsida"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (onNavigateHome) {
                onNavigateHome();
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo variant="dark" size="md" className="hover:opacity-90 transition-opacity" />
          </a>

          {/* Desktop / Tablet Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Huvudmeny">
            {navLinks.map((link) => {
              const isActive = link.isHetaArbeten && currentPage === 'heta-arbeten';
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href, link.isHetaArbeten)}
                  id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`group relative text-xs font-mono font-semibold tracking-wider transition-colors py-2 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'text-[#002B49] font-bold'
                      : link.isHetaArbeten
                      ? 'text-amber-700 hover:text-amber-900'
                      : 'text-slate-700 hover:text-[#002B49]'
                  }`}
                >
                  {link.isHetaArbeten && (
                    <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  )}
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-xs bg-amber-100 text-amber-800 border border-amber-200 uppercase tracking-tight">
                      {link.badge}
                    </span>
                  )}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-200 ${
                      isActive
                        ? 'w-full bg-[#002B49]'
                        : link.isHetaArbeten
                        ? 'w-0 bg-amber-500 group-hover:w-full'
                        : 'w-0 bg-[#002B49] group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onContactClick}
              id="navbar-contact-cta"
              className="group inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#002B49] hover:bg-[#001D33] active:scale-[0.98] transition-all cursor-pointer rounded-xs shadow-xs"
            >
              <span>KONTAKTA OSS</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300 transition-transform duration-200 group-hover:translate-x-1" />
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
                  onClick={(e) => handleNavLinkClick(e, link.href, link.isHetaArbeten)}
                  className={`flex items-center justify-between text-xs sm:text-sm font-mono font-bold tracking-wider py-3.5 px-3 rounded-xs border-b border-slate-100 transition-colors ${
                    link.isHetaArbeten
                      ? 'bg-amber-50/70 text-amber-900'
                      : 'text-slate-800 hover:text-[#002B49] hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isHetaArbeten && <Flame className="w-4 h-4 text-amber-500" />}
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-amber-200 text-amber-900 rounded-xs">
                        {link.badge}
                      </span>
                    )}
                  </span>
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

