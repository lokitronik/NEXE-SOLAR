import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProcessPhoto {
  id: string;
  src: string;
  alt: string;
  widthClass: string;
  aspectRatio: string;
}

const photos: ProcessPhoto[] = [
  {
    id: 'hook',
    src: '/images/process/Hook.jpeg',
    alt: 'Montage av takfästen och bärande krokar för solceller på tegeltak',
    widthClass: 'w-[78vw] max-w-[320px] sm:w-[320px] lg:w-[340px]',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'rails',
    src: '/images/process/Rails.jpeg',
    alt: 'Monterade bärskenor och aluminiumprofiler på takfästen',
    widthClass: 'w-[78vw] max-w-[320px] sm:w-[320px] lg:w-[340px]',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'kabell',
    src: '/images/process/Kabell.jpeg',
    alt: 'DC-solcellskablar förlagda och klamrade längs montageskenor på taket',
    widthClass: 'w-[78vw] max-w-[320px] sm:w-[320px] lg:w-[340px]',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'bajada',
    src: '/images/process/Bajada.jpeg',
    alt: 'Fasadmonterad kabelkanal och metallrör för skydd av solcellskablage vid husknut',
    widthClass: 'w-[78vw] max-w-[320px] sm:w-[320px] lg:w-[340px]',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'panel',
    src: '/images/process/Panel.jpeg',
    alt: 'Färdigställd solcellsanläggning med svarta solpaneler installerade på taket',
    widthClass: 'w-[88vw] max-w-[560px] sm:w-[480px] lg:w-[560px]',
    aspectRatio: 'aspect-[4/3] sm:aspect-[16/10]',
  },
];

export const ProcessGallery: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse drag-to-scroll state
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isDraggingRef = useRef(false);

  // Update navigation button states & active slide index on scroll
  const updateScrollState = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Calculate nearest active item
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;

    let closestIdx = 0;
    let minDistance = Infinity;
    const containerCenter = scrollLeft + clientWidth / 2;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToSlide = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const target = children[index];
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  const handlePrev = () => {
    const el = sliderRef.current;
    if (!el) return;
    const scrollAmount = Math.max(el.clientWidth * 0.7, 300);
    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = sliderRef.current;
    if (!el) return;
    const scrollAmount = Math.max(el.clientWidth * 0.7, 300);
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = sliderRef.current;
    if (!el) return;
    isMouseDownRef.current = true;
    isDraggingRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current) return;
    const el = sliderRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 4) {
      isDraggingRef.current = true;
    }
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  return (
    <section
      id="montageprocess"
      aria-label="Från montage till resultat"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Discreet Exterior Headline & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#002B49]">
            Från montage till resultat
          </h2>

          {/* Minimalist Nav Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Föregående bild"
              className={`p-2 rounded-full border transition-all duration-200 ${
                canScrollLeft
                  ? 'border-slate-300 text-slate-700 hover:border-[#002B49] hover:text-[#002B49] hover:bg-slate-50 cursor-pointer active:scale-95'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Nästa bild"
              className={`p-2 rounded-full border transition-all duration-200 ${
                canScrollRight
                  ? 'border-slate-300 text-slate-700 hover:border-[#002B49] hover:text-[#002B49] hover:bg-slate-50 cursor-pointer active:scale-95'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Swipeable & Draggable Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => !isDraggingRef.current && scrollToSlide(idx)}
                className={`shrink-0 snap-start relative overflow-hidden rounded-xs bg-slate-100 border border-slate-200/90 shadow-xs ${photo.widthClass}`}
              >
                <div className={`w-full ${photo.aspectRatio}`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={idx <= 1 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover object-center block select-none pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Discreet Step Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {photos.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Gå till bild ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? 'w-6 h-1.5 bg-[#002B49]'
                    : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
