"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Product, ProductCategory } from "@/data/products";
import type { MachineDetailContent } from "@/data/machineDetailTypes";
import { getMachineGalleryImages } from "@/data/machineDetail";

interface MachineDetailPageProps {
  product: Product;
  category?: ProductCategory;
  content: MachineDetailContent;
}

const hoverCardClass =
  "group relative overflow-hidden rounded-lg border border-blue-100 bg-white/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_12px_26px_-12px_rgba(37,99,235,0.45)]";

const badgeClass =
  "rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-orange-50 px-4 py-3 text-center text-sm font-semibold text-slate-800 transition duration-300 hover:border-orange-300 hover:shadow-[0_10px_22px_-14px_rgba(249,115,22,0.7)]";

const inputClass =
  "mt-1 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm outline-none ring-blue-200 focus:border-orange-300 focus:ring-2";

export default function MachineDetailPage({ product, category, content }: MachineDetailPageProps) {
  const galleryImages = useMemo(() => getMachineGalleryImages(product.slug), [product.slug]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const slide = galleryImages[activeSlide] ?? galleryImages[0];
  const lightboxOpen = lightboxIndex !== null;
  const activeLightboxImage = lightboxIndex === null ? null : galleryImages[lightboxIndex];
  const featureMidpoint = Math.ceil(content.productFeatures.length / 2);
  const featureColumns = [
    content.productFeatures.slice(0, featureMidpoint),
    content.productFeatures.slice(featureMidpoint),
  ].filter((column) => column.length > 0);
  const equipmentRowCount = content.equipmentMatrix
    ? Math.max(content.equipmentMatrix.standard.length, content.equipmentMatrix.optional.length)
    : 0;

  const goPrev = (total: number, setter: (value: number) => void, current: number) => {
    setter((current - 1 + total) % total);
  };

  const goNext = (total: number, setter: (value: number) => void, current: number) => {
    setter((current + 1) % total);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        setLightboxIndex((prev) => {
          if (prev === null) return prev;
          return (prev - 1 + galleryImages.length) % galleryImages.length;
        });
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex((prev) => {
          if (prev === null) return prev;
          return (prev + 1) % galleryImages.length;
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, galleryImages.length]);

  return (
    <>
      <Link href={`/products/${product.categorySlug}`} className="mb-6 inline-flex items-center gap-2 text-sm text-accent hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to {category?.name}
      </Link>

      <div className="space-y-14">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-4">
            {slide && (
              <button
                type="button"
                onClick={() => setLightboxIndex(activeSlide)}
                className="group relative block w-full overflow-hidden rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-orange-50 text-left shadow-sm transition duration-300 hover:shadow-[0_14px_28px_-16px_rgba(37,99,235,0.55)]"
                aria-label="Open machine image in full view"
              >
                <img src={slide.src} alt={slide.alt} className="h-[340px] w-full object-cover sm:h-[430px]" />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-400/0 to-orange-500/0 transition duration-300 group-hover:from-blue-500/20 group-hover:to-orange-500/20" />
              </button>
            )}

            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => goPrev(galleryImages.length, setActiveSlide, activeSlide)}
                  className="rounded-md border border-blue-200 bg-white p-2 text-blue-700 transition duration-300 hover:border-orange-300 hover:bg-orange-50"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div
                  className="grid flex-1 gap-2"
                  style={{ gridTemplateColumns: `repeat(${galleryImages.length}, minmax(0, 1fr))` }}
                >
                  {galleryImages.map((item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`overflow-hidden rounded-md border transition duration-300 ${
                        index === activeSlide
                          ? "border-orange-400 ring-2 ring-orange-300/40"
                          : "border-blue-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200/40"
                      }`}
                      aria-label={`Show image ${index + 1}`}
                    >
                      <img src={item.src} alt={item.alt} className="h-14 w-full object-cover" />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => goNext(galleryImages.length, setActiveSlide, activeSlide)}
                  className="rounded-md border border-blue-200 bg-white p-2 text-blue-700 transition duration-300 hover:border-orange-300 hover:bg-orange-50"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          <div className="rounded-xl border border-blue-200/70 bg-gradient-to-br from-white via-blue-50/40 to-orange-50/40 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{product.category}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">{product.name}</h2>
            <p className="mt-4 text-base italic text-slate-600">{content.intro}</p>
            <ul className="mt-6 space-y-2">
              {content.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/70 to-orange-50/70 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{content.application.title}</h3>
          <p className="mt-4 text-slate-700">{content.application.body}</p>
        </section>

        {content.usability && content.usability.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold md:text-3xl">{content.usabilityTitle ?? "Make The Machine More User-Friendly"}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {content.usability.map((item) => (
                <div key={item.title} className={hoverCardClass}>
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {content.automationBadges && content.automationBadges.length > 0 && (
          <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.automationBadges.map((badge) => (
              <div key={badge} className={badgeClass}>
                {badge}
              </div>
            ))}
          </section>
        )}

        {content.extraBadges && content.extraBadges.length > 0 && (
          <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.extraBadges.map((badge) => (
              <div key={badge} className={badgeClass}>
                {badge}
              </div>
            ))}
          </section>
        )}

        {content.engineering && (
          <section>
            <h3 className="text-2xl font-bold md:text-3xl">{content.engineering.title}</h3>
            <p className="mt-3 text-slate-700">{content.engineering.subtitle}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.engineering.items.map((item) => (
                <div key={item.title} className={hoverCardClass}>
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {content.qualitySection && (
          <section className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/70 to-orange-50/70 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{content.qualitySection.title}</h3>
            <p className="mt-3 text-slate-700">{content.qualitySection.body}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {content.qualitySection.items.map((item) => (
                <div key={item.title} className={hoverCardClass}>
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {content.valueItems && content.valueItems.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold md:text-3xl">{content.valueSectionTitle ?? "The perfect choice for embroidery"}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {content.valueItems.map((item) => (
                <div key={item.title} className={hoverCardClass}>
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/70 to-orange-50/70 p-6 md:p-8">
          <h3 className="text-2xl font-bold">Product Features</h3>
          <div className={`mt-5 grid gap-3 ${featureColumns.length > 1 ? "md:grid-cols-2" : ""}`}>
            {featureColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-2">
                {column.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 transition duration-300 hover:border-orange-300 hover:shadow-[0_10px_20px_-14px_rgba(59,130,246,0.7)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-blue-200 shadow-sm">
          <div className="border-b border-blue-200 bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Basic Parameters</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-blue-50 text-xs uppercase tracking-wide text-blue-800">
                <tr>
                  {content.parameters.columns.map((column) => (
                    <th key={column.key} className="px-6 py-4">
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                {content.parameters.rows.map((row, index) => (
                  <tr key={`${row[content.parameters.rowKey]}-${index}`} className="transition-colors hover:bg-orange-50/55">
                    {content.parameters.columns.map((column) => (
                      <td
                        key={column.key}
                        className={`px-6 py-4 ${column.key === content.parameters.rowKey ? "font-medium" : ""}`}
                      >
                        {row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {content.parameters.footerNote && (
            <p className="border-t border-blue-100 bg-blue-50/70 px-6 py-3 text-sm italic text-slate-600">
              {content.parameters.footerNote}
            </p>
          )}
        </section>

        {content.equipmentMatrix && (
          <section className="overflow-hidden rounded-xl border border-blue-200 shadow-sm">
            <div className="border-b border-blue-200 bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Equipment Configuration</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-blue-50 text-xs uppercase tracking-wide text-blue-800">
                  <tr>
                    <th className="px-6 py-4">Standard Equipment</th>
                    <th className="px-6 py-4">Optional Equipment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {Array.from({ length: equipmentRowCount }).map((_, index) => (
                    <tr key={index} className="transition-colors hover:bg-orange-50/55">
                      <td className="px-6 py-4">{content.equipmentMatrix?.standard[index] ?? ""}</td>
                      <td className="px-6 py-4">{content.equipmentMatrix?.optional[index] ?? ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {content.optionalDevicesText && (
          <section className="rounded-lg border border-blue-200 bg-gradient-to-r from-white to-orange-50 p-6">
            <h3 className="text-xl font-bold">Optional Additions</h3>
            <p className="mt-3 text-sm text-slate-700">
              <span className="font-semibold text-foreground">Optional Devices</span> {content.optionalDevicesText}
            </p>
          </section>
        )}

        <section className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-orange-50 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">Know us, Choose us, Be us</h3>
          <p className="mt-3 text-slate-700">Sign up to receive the latest news, announcements, and promotions!</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium md:col-span-2">
              Products
              <input type="text" defaultValue={content.formProductName} className={inputClass} />
            </label>
            <label className="text-sm font-medium">
              E-mail <span className="text-red-500">*</span>
              <input type="email" required className={inputClass} />
            </label>
            <label className="text-sm font-medium">
              Phone/WhatsApp
              <input type="text" className={inputClass} />
            </label>
            <label className="text-sm font-medium md:col-span-2">
              Message <span className="text-red-500">*</span>
              <textarea required rows={4} className={inputClass} placeholder="Tell us your requirements." />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:from-blue-700 hover:to-orange-600"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>

      {lightboxOpen && activeLightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4">
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
            onClick={() => {
              if (lightboxIndex === null) return;
              goPrev(galleryImages.length, (value) => setLightboxIndex(value), lightboxIndex);
            }}
            className="absolute left-4 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img src={activeLightboxImage.src} alt={activeLightboxImage.alt} className="max-h-[88vh] max-w-[92vw] rounded-md object-contain" />
          <button
            type="button"
            onClick={() => {
              if (lightboxIndex === null) return;
              goNext(galleryImages.length, (value) => setLightboxIndex(value), lightboxIndex);
            }}
            className="absolute right-4 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
