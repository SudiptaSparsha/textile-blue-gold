"use client";

import { useEffect, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";
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
    </>
  );
};

export default ProductListing;
