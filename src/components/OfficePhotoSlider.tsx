"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import office01 from "@/assets/office/office-01.jpeg";
import office02 from "@/assets/office/office-02.jpeg";
import office03 from "@/assets/office/office-03.jpeg";

const officePhotos = [
  { src: office01.src, alt: "Textile Blue Gold office" },
  { src: office02.src, alt: "Textile Blue Gold office interior" },
  { src: office03.src, alt: "Textile Blue Gold office workspace" },
];

const AUTO_PLAY_MS = 4000;

const OfficePhotoSlider = () => {
  const total = officePhotos.length;
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setIndex((prev) => (prev + 1) % total);

  useEffect(() => {
    if (isHovered || total < 2) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [isHovered, total]);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {officePhotos.map((photo, i) => (
          <div key={photo.src} className="aspect-[4/3] w-full shrink-0">
            <img
              src={photo.src}
              alt={photo.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous office photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next office photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {officePhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show office photo ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-2 bg-white/70 hover:bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OfficePhotoSlider;
