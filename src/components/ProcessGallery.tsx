import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ProcessPhoto {
  id: string;
  src: string;
  alt: string;
  /** Kort bildtext som visas på bilden */
  caption: string;
  widthClass: string;
  aspectRatio: string;
}

const cardWidth = 'w-[78vw] max-w-[340px] sm:w-[340px] lg:w-[380px]';

const photos: ProcessPhoto[] = [
  {
    id: 'hook',
    src: '/images/process/Hook.jpeg',
    alt: 'Montage av takfästen och bärande krokar för solceller på tegeltak',
    caption: 'Takfästen',
    widthClass: cardWidth,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'rails',
    src: '/images/process/Rails.jpeg',
    alt: 'Monterade bärskenor och aluminiumprofiler på takfästen',
    caption: 'Skensystem',
    widthClass: cardWidth,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'kabell',
    src: '/images/process/Kabell.jpeg',
    alt: 'DC-solcellskablar förlagda och klamrade längs montageskenor på taket',
    caption: 'DC-kablage',
    widthClass: cardWidth,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'bajada',
    src: '/images/process/Bajada.jpeg',
    alt: 'Fasadmonterad kabelkanal och metallrör för skydd av solcellskablage vid husknut',
    caption: 'Kabelväg på fasaden',
    widthClass: cardWidth,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'panel',
    src: '/images/process/Panel.jpeg',
    alt: 'Färdigställd solcellsanläggning med svarta solpaneler installerade på taket',
    caption: 'Färdig anläggning',
    widthClass: cardWidth,
    aspectRatio: 'aspect-[3/4]',
  },
];

const pad = (n: number) => String(n).padStart(2, '0');

const navBtn = (enabled: boolean) =>
  `rounded-full border p-2 transition-all duration-200 ${
    enabled
      ? 'cursor-pointer border-slate-300 text-slate-700 hover:border-[#002B49] hover:bg-slate-50 hover:text-[#002B49] active:scale-95'
      : 'cursor-not-allowed border-slate-200 text-slate-300 opacity-50'
  }`;

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002B49]';

export const ProcessGallery: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Drag-to-scroll (mus)
  const pointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const movedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  // Lightbox: kom ihåg vilket element som hade fokus
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const scrollBehavior: ScrollBehavior = reduce ? 'auto' : 'smooth';

  const updateScrollState = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

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

  // Throttlar scroll-händelser till en uppdatering per frame
  const onScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateScrollState();
    });
  }, [updateScrollState]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateScrollState);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [onScroll, updateScrollState]);

  const scrollToSlide = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const target = (Array.from(el.children) as HTMLElement[])[index];
    target?.scrollIntoView({
      behavior: scrollBehavior,
      block: 'nearest',
      inline: 'start',
    });
  };

  const scrollByAmount = (dir: 1 | -1) => {
    const el = sliderRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.7, 300);
    el.scrollBy({ left: dir * amount, behavior: scrollBehavior });
  };

  // Pointer-händelser: bara mus drar manuellt, touch scrollar nativt
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const el = sliderRef.current;
    if (!el) return;
    pointerDownRef.current = true;
    movedRef.current = false;
    startXRef.current = e.clientX;
    startScrollRef.current = el.scrollLeft;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDownRef.current) return;
    const el = sliderRef.current;
    if (!el) return;
    const delta = e.clientX - startXRef.current;
    if (!movedRef.current && Math.abs(delta) > 4) {
      movedRef.current = true;
      setDragging(true); // stänger av snap medan man drar så det inte hackar
    }
    if (movedRef.current) {
      el.scrollLeft = startScrollRef.current - delta * 1.2;
    }
  };

  const endDrag = () => {
    if (!pointerDownRef.current) return;
    pointerDownRef.current = false;
    setDragging(false); // snap slår på igen och rättar in närmaste bild
    // movedRef nollställs vid nästa pointerdown, så onClick kan se om det var en drag
  };

  const openLightbox = (index: number) => {
    if (movedRef.current) return; // var en drag, inte ett klick
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setLightbox(index);
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    lastFocusedRef.current?.focus();
  }, []);

  // Lightbox: tangentbord, scroll-lås och fokus
  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight')
        setLightbox((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === 'ArrowLeft')
        setLightbox((i) =>
          i === null ? i : (i - 1 + photos.length) % photos.length
        );
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, closeLightbox]);

  const current = lightbox !== null ? photos[lightbox] : null;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="montageprocess"
        aria-labelledby="process-gallery-heading"
        className="scroll-mt-20 overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          {/* Rubrik + kontroller */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="max-w-2xl">
              <span className="mb-3 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                Så ser det ut på plats
              </span>
              <h2
                id="process-gallery-heading"
                className="text-balance font-heading text-2xl font-semibold leading-tight tracking-tight text-[#002B49] sm:text-4xl"
              >
                Från montage till resultat
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Bilder från våra montageuppdrag, från infästning till färdig anläggning.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="font-mono text-xs font-bold tracking-widest text-slate-400"
                aria-hidden="true"
              >
                {pad(activeIndex + 1)} / {pad(photos.length)}
              </span>
              <button
                type="button"
                onClick={() => scrollByAmount(-1)}
                disabled={!canScrollLeft}
                aria-label="Föregående bild"
                className={`${navBtn(canScrollLeft)} ${focus}`}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount(1)}
                disabled={!canScrollRight}
                aria-label="Nästa bild"
                className={`${navBtn(canScrollRight)} ${focus}`}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          {/* Karusell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              ref={sliderRef}
              role="region"
              aria-roledescription="karusell"
              aria-label="Bilder från montageprocessen"
              tabIndex={0}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={endDrag}
              onPointerCancel={endDrag}
              className={`no-scrollbar -mx-4 flex items-stretch gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:gap-6 sm:px-0 ${
                dragging
                  ? 'cursor-grabbing snap-none select-none'
                  : 'cursor-grab snap-x snap-mandatory'
              } ${focus}`}
            >
              {photos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => openLightbox(idx)}
                  aria-label={`Förstora bild: ${photo.caption}`}
                  className={`group relative shrink-0 snap-start overflow-hidden rounded-xs border border-slate-200/90 bg-slate-100 text-left shadow-xs transition-shadow duration-300 hover:shadow-lg ${photo.widthClass} ${focus}`}
                >
                  <div className={`w-full ${photo.aspectRatio}`}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="pointer-events-none block h-full w-full select-none object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>

                  {/* Bildtext med stegnummer */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#002B49]/85 via-[#002B49]/40 to-transparent p-4 pt-16 text-white sm:p-5 sm:pt-20">
                    <span className="block font-mono text-[11px] font-bold tracking-widest text-sky-200">
                      {pad(idx + 1)}
                    </span>
                    <span className="mt-0.5 block text-base font-semibold sm:text-lg">
                      {photo.caption}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Prickar */}
            <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8">
              {photos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Gå till bild ${idx + 1}: ${photo.caption}`}
                  aria-current={activeIndex === idx}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${focus} ${
                    activeIndex === idx
                      ? 'h-1.5 w-6 bg-[#002B49]'
                      : 'h-1.5 w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {current && lightbox !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Bild ${lightbox + 1} av ${photos.length}: ${current.caption}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Stäng"
              className="absolute right-4 top-4 rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox - 1 + photos.length) % photos.length);
              }}
              aria-label="Föregående bild"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox + 1) % photos.length);
              }}
              aria-label="Nästa bild"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>

            <figure
              className="max-h-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={current.id}
                src={current.src}
                alt={current.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-xs object-contain"
              />
              <figcaption className="mt-3 text-center font-mono text-xs tracking-widest text-slate-300">
                {pad(lightbox + 1)} / {pad(photos.length)} · {current.caption}
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};