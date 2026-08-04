"use client";

import Link from "next/link";
import { ArrowRight, Award, Globe, Headphones, Truck } from "lucide-react";
import heroBgObj from "@/assets/hero-bg.png";
const heroBg = heroBgObj.src;
import aboutImgObj from "@/assets/about-company.png";
const aboutImg = aboutImgObj.src;
import SectionWrapper, { SectionTitle } from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const stats = [
  { value: "100k+", label: "Sqm Factory" },
  { value: "500+", label: "Experts" },
  { value: "160+", label: "Patents" },
  { value: "24/7", label: "Support" },
];

const industries = [
  { icon: Truck, title: "Garment Manufacturing", desc: "End-to-end machinery solutions for industrial plants" },
  { icon: Globe, title: "Textile Export", desc: "Propelling the global reach of local manufacturers" },
  { icon: Award, title: "Fashion & Apparel", desc: "Precision tools for fashion-forward creations" },
  { icon: Headphones, title: "Continuous Support", desc: "Lifelong technical assistance and maintenance" },
];

const Index = () => {
  const featuredProducts = [products[0], products[2], products[5]];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Textile machinery" className="h-full w-full object-cover" width={1920} height={900} />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-3xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Engineered for <span className="text-accent">Textile Perfection</span>
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
              Operating with dedication and integrity since 2008. Trusted technical services and industrial machinery for Bangladesh's textile and manufacturing sector.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg">
                Explore Catalog <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-accent py-6">
        <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-accent-foreground md:text-3xl">{s.value}</div>
              <div className="text-sm text-accent-foreground/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <SectionWrapper>
        <SectionTitle title="Core Machinery" subtitle="High-performance solutions from the world-leading Yonthin brand" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/products" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
            View All Machinery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper alt>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              About <span className="text-accent">Textile Blue Gold</span>
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 text-muted-foreground">
              Under the leadership of Engineer Akkas Ahmed, we have been operating with dedication and integrity since 2008. With over a decade of industry expertise, we specialize in delivering top-tier technical services, solutions, and high-quality industrial machinery to textile factories and manufacturing plants across Bangladesh.
            </p>
            <Link href="/about/company-profile" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
              Our Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src={aboutImg} alt="Textile Blue Gold office" loading="lazy" className="h-full w-full object-cover" width={1200} height={600} />
          </div>
        </div>
      </SectionWrapper>

      {/* Industries Served */}
      <SectionWrapper>
        <SectionTitle title="Industries We Serve" subtitle="Comprehensive machinery solutions across the textile value chain" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.title} className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <ind.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">{ind.title}</h3>
              <p className="text-sm text-muted-foreground">{ind.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Product Categories */}
      <SectionWrapper alt>
        <SectionTitle title="Product Categories" subtitle="Browse our complete range of garment machinery" />
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img src={typeof cat.image === 'string' ? cat.image : (cat.image as any).src} alt={cat.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-accent">
                  {cat.productCount} Products →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to Upgrade Your Production?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Get in touch with our team to find the perfect machinery solution for your factory.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground">
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
