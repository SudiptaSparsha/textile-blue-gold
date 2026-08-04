"use client";

import { Suspense, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { products } from "@/data/products";
import { getMachineGalleryImages } from "@/data/machineDetail";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PAGE_SIZE = 12;

const allImages = products.flatMap((product) =>
  getMachineGalleryImages(product.slug).map((img) => ({
    ...img,
    productName: product.name,
    href: `/products/${product.categorySlug}/${product.slug}`,
  })),
);

const PhotoGalleryContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(allImages.length / PAGE_SIZE));
  const requestedPage = Number(searchParams.get("page") ?? "1");
  const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(1, requestedPage), totalPages) : 1;

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam && Number(pageParam) !== currentPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(currentPage));
      router.replace(`/media/photo-gallery?${params.toString()}`, { scroll: false });
    }
  }, [currentPage, router, searchParams]);

  const pageImages = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return allImages.slice(start, start + PAGE_SIZE);
  }, [currentPage]);

  const goToPage = (page: number) => {
    const target = Math.min(Math.max(1, page), totalPages);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(target));
    router.push(`/media/photo-gallery?${params.toString()}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pageNumbers.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1,
  );

  return (
    <>
      <PageBanner title="Photo Gallery" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Media" }, { label: "Photo Gallery" }]} />
      <SectionWrapper>
        <p className="mb-8 text-center text-muted-foreground">
          {allImages.length} photos across our full machine lineup
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pageImages.map((img, i) => (
            <Link
              key={`${img.href}-${i}`}
              href={img.href}
              className="group overflow-hidden rounded-lg border border-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <p className="line-clamp-1 px-3 py-2 text-xs font-medium text-muted-foreground">{img.productName}</p>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) goToPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                />
              </PaginationItem>

              {visiblePages.map((p, idx) => {
                const prev = visiblePages[idx - 1];
                const needsEllipsis = prev !== undefined && p - prev > 1;
                return (
                  <div key={p} className="flex items-center gap-1">
                    {needsEllipsis && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        isActive={p === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          goToPage(p);
                        }}
                      >
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  </div>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) goToPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </SectionWrapper>
    </>
  );
};

const PhotoGallery = () => (
  <Suspense fallback={null}>
    <PhotoGalleryContent />
  </Suspense>
);

export default PhotoGallery;
