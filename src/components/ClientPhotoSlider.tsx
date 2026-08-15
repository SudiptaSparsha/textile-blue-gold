"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { clientPhotos } from "@/data/clientPhotos";

const VISIBLE_DESKTOP = 5;
const AUTO_PLAY_MS = 2500;

const ClientPhotoSlider = () => {
  const total = clientPhotos.length;
  const maxIndex = Math.max(0, total - VISIBLE_DESKTOP);
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goPrev = () => {
    setTransitionEnabled(true);
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goNext = () => {
    setTransitionEnabled(true);
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isHovered || lightboxIndex !== null) return;
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev >= maxIndex) {
          setTransitionEnabled(false);
          return 0;
        }
        setTransitionEnabled(true);
        return prev + 1;
      });
    }, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [isHovered, lightboxIndex, maxIndex]);

  useEffect(() => {
    if (transitionEnabled) return;
    const frame = requestAnimationFrame(() => setTransitionEnabled(true));
    return () => cancelAnimationFrame(frame);
  }, [transitionEnabled]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + total) % total));
      if (event.key === "ArrowRight") setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % total));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, total]);

  const offsetPercent = index * (100 / VISIBLE_DESKTOP);
  const activePhoto = lightboxIndex === null ? null : clientPhotos[lightboxIndex];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div
          className={`flex ${transitionEnabled ? "transition-transform duration-500 ease-out" : ""}`}
          style={{ transform: `translateX(-${offsetPercent}%)` }}
        >
          {clientPhotos.map((photo, i) => (
            <div key={`${photo.src}-${i}`} className="shrink-0 basis-1/2 px-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="block aspect-square w-full cursor-zoom-in overflow-hidden rounded-lg border border-border bg-muted shadow-sm transition hover:shadow-md"
                aria-label={`View larger image: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous photos"
        className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full border border-border bg-background p-2 text-foreground shadow-md transition hover:border-accent hover:text-accent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next photos"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border border-border bg-background p-2 text-foreground shadow-md transition hover:border-accent hover:text-accent"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={() => setLightboxIndex(null)}>
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + total) % total));
            }}
            className="absolute left-4 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={activePhoto.src}
            alt={activePhoto.alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-md object-contain"
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % total));
            }}
            className="absolute right-4 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ClientPhotoSlider;
