"use client";

import Link from "next/link";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import ProductSearch from "@/components/ProductSearch";
import { categories } from "@/data/products";

const ProductCategories = () => (
  <>
    <PageBanner title="Our Products" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Products" }]} />
    <SectionWrapper>
      <div className="mx-auto mb-14 max-w-2xl rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/70 to-orange-50/70 p-6 text-center shadow-sm md:p-8">
        <h2 className="text-lg font-semibold text-foreground md:text-xl">Looking for a specific machine?</h2>
        <p className="mt-1 text-sm text-muted-foreground">Search our full catalog of embroidery, knitting, and compressor machines by name.</p>
        <div className="mt-5">
          <ProductSearch placeholder="Search machines by name..." size="lg" />
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/products/${cat.slug}`}
            className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-video overflow-hidden">
              <img src={typeof cat.image === 'string' ? cat.image : (cat.image as any).src} alt={cat.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{cat.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                View {cat.productCount} Products →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  </>
);

export default ProductCategories;
