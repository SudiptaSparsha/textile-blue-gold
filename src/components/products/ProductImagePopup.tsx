"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductImagePopupProps {
  images: ProductImage[];
  title: string;
}

export default function ProductImagePopup({ images, title }: ProductImagePopupProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const active = images[activeIndex] ?? images[0];
  if (!active) return null;

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block h-full w-full cursor-zoom-in overflow-hidden rounded-lg border border-border bg-muted"
          aria-label={`View larger image: ${title}`}
        >
          <img src={active.src} alt={active.alt} className="h-full w-full object-cover" />
        </button>

        {images.length > 1 && (
          <div className="mt-3 flex gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-16 w-16 shrink-0 overflow-hidden rounded-md border-2 transition ${
                  index === activeIndex ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`Show image ${index + 1} of ${title}`}
                aria-current={index === activeIndex}
              >
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="flex max-h-[88vh] max-w-[92vw] flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={active.src} alt={active.alt} className="max-h-[78vh] max-w-[92vw] rounded-md object-contain" />
            <h4 className="text-center text-lg font-semibold text-white">{title}</h4>
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-12 w-12 shrink-0 overflow-hidden rounded-md border-2 transition ${
                      index === activeIndex ? "border-accent" : "border-white/40 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Show image ${index + 1} of ${title}`}
                    aria-current={index === activeIndex}
                  >
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
