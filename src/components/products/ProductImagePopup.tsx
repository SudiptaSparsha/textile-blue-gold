"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ProductImagePopupProps {
  src: string;
  alt: string;
  title: string;
}

export default function ProductImagePopup({ src, alt, title }: ProductImagePopupProps) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block h-full w-full cursor-zoom-in overflow-hidden rounded-lg border border-border bg-muted"
        aria-label={`View larger image: ${title}`}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </button>

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
            <img src={src} alt={alt} className="max-h-[78vh] max-w-[92vw] rounded-md object-contain" />
            <h4 className="text-center text-lg font-semibold text-white">{title}</h4>
          </div>
        </div>
      )}
    </>
  );
}
