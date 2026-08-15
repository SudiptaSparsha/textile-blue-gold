"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import { getMachineGalleryImages } from "@/data/machineDetail";

interface ProductSearchProps {
  placeholder?: string;
  className?: string;
  size?: "md" | "lg";
  autoFocus?: boolean;
  onNavigate?: () => void;
}

const MAX_SUGGESTIONS = 8;

const ProductSearch = ({
  placeholder = "Search products by name...",
  className = "",
  size = "md",
  autoFocus = false,
  onNavigate,
}: ProductSearchProps) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const isLg = size === "lg";

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => p.name.toLowerCase().includes(q)).slice(0, MAX_SUGGESTIONS);
  }, [query]);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const goToProduct = (product: (typeof products)[number]) => {
    setOpen(false);
    setQuery("");
    router.push(`/products/${product.categorySlug}/${product.slug}`);
    onNavigate?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || matches.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % matches.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + matches.length) % matches.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      const target = matches[activeIndex] ?? matches[0];
      if (target) goToProduct(target);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="relative">
        <Search
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-accent ${
            isLg ? "left-4 h-5 w-5" : "left-3 h-4 w-4"
          }`}
        />
        <input
          type="text"
          value={query}
          autoFocus={autoFocus}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Search products"
          className={`w-full rounded-full border-2 border-border bg-background font-medium text-foreground shadow-sm outline-none ring-accent/30 transition placeholder:font-normal placeholder:text-muted-foreground hover:border-accent/50 focus:border-accent focus:shadow-md focus:ring-4 ${
            isLg ? "py-4 pl-12 pr-12 text-base" : "py-3 pl-10 pr-10 text-sm"
          }`}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            aria-label="Clear search"
            className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground ${
              isLg ? "right-4" : "right-3"
            }`}
          >
            <X className={isLg ? "h-5 w-5" : "h-4 w-4"} />
          </button>
        )}
      </div>

      {open && query && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-lg border border-border bg-background shadow-xl">
          {matches.length > 0 ? (
            <ul className="max-h-96 overflow-y-auto py-1">
              {matches.map((product, index) => {
                const gallery = getMachineGalleryImages(product.slug);
                const thumb = gallery.length > 0 ? gallery[0].src : product.image;
                return (
                  <li key={product.id}>
                    <button
                      type="button"
                      onClick={() => goToProduct(product)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        index === activeIndex ? "bg-muted" : "hover:bg-muted"
                      }`}
                    >
                      <img src={thumb} alt={product.name} className="h-10 w-10 shrink-0 rounded-md object-cover" />
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-foreground">{product.name}</span>
                        <span className="block truncate text-xs text-muted-foreground">{product.category}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-muted-foreground">No products found for "{query}"</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
