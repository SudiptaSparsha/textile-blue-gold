"use client";

import { useEffect, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionWrapper, { SectionTitle } from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import ProductSearch from "@/components/ProductSearch";
import { categories, getProductsByCategory } from "@/data/products";
import { optionalDevices } from "@/data/optionalDevices";
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

const ProductListing = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = categories.find((c) => c.slug === categorySlug);
  const items = getProductsByCategory(categorySlug || "");

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const requestedPage = Number(searchParams.get("page") ?? "1");
  const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(1, requestedPage), totalPages) : 1;

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam && Number(pageParam) !== currentPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(currentPage));
      router.replace(`/products/${categorySlug}?${params.toString()}`, { scroll: false });
    }
  }, [categorySlug, currentPage, router, searchParams]);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, currentPage]);

  const goToPage = (page: number) => {
    const target = Math.min(Math.max(1, page), totalPages);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(target));
    router.push(`/products/${categorySlug}?${params.toString()}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!category) {
    return (
      <>
        <PageBanner title="Category Not Found" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Products", path: "/products" }, { label: "Not Found" }]} />
        <SectionWrapper>
          <p className="text-center text-muted-foreground">This category does not exist.</p>
        </SectionWrapper>
      </>
    );
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pageNumbers.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1,
  );

  return (
    <>
      <PageBanner
        title={category.name}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Products", path: "/products" }, { label: category.name }]}
      />
      <SectionWrapper>
        <p className="mb-8 text-center text-muted-foreground">{category.description}</p>
        <div className="mx-auto mb-10 max-w-xl">
          <ProductSearch placeholder="Search machines by name..." />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((p) => (
            <ProductCard key={p.id} product={p} />
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

      {categorySlug === "embroidery-machines" && (
        <SectionWrapper alt>
          <SectionTitle title="Optional Devices" subtitle="Add-on attachments that expand what your embroidery machine can do" />
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {optionalDevices.map((device) => (
              <Link
                key={device.slug}
                href={`/products/embroidery-machines/optional-devices/${device.slug}`}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold text-foreground">{device.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{device.shortDescription}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}
    </>
  );
};

export default ProductListing;
