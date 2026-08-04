import { getEmbroideryDetailContent, embroideryDetailSlugs } from "@/data/embroideryDetailContent";
import { getKnittingDetailContent, knittingDetailSlugs } from "@/data/knittingDetailContent";
import { getCompressorDetailContent, compressorDetailSlugs } from "@/data/compressorDetailContent";
import { getEmbroideryGalleryImages } from "@/data/embroideryImages";
import { getKnittingGalleryImages } from "@/data/knittingImages";
import { getCompressorGalleryImages } from "@/data/compressorImages";
import type { MachineDetailContent } from "@/data/machineDetailTypes";
import type { GalleryImage } from "@/data/embroideryImages";

export const machineDetailSlugs = [...embroideryDetailSlugs, ...knittingDetailSlugs, ...compressorDetailSlugs];

export const isMachineDetailPage = (slug: string) => machineDetailSlugs.includes(slug);

export const getMachineDetailContent = (slug: string): MachineDetailContent | undefined =>
  getEmbroideryDetailContent(slug) ?? getKnittingDetailContent(slug) ?? getCompressorDetailContent(slug);

export const getMachineGalleryImages = (slug: string): GalleryImage[] => {
  const embroideryImages = getEmbroideryGalleryImages(slug);
  if (embroideryImages.length > 0) return embroideryImages;
  const knittingImages = getKnittingGalleryImages(slug);
  if (knittingImages.length > 0) return knittingImages;
  return getCompressorGalleryImages(slug);
};

export const getMachineBreadcrumbs = (slug: string, productName: string, categorySlug: string) => {
  const content = getMachineDetailContent(slug);
  if (!content) return null;

  return [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: content.breadcrumbCategoryLabel, path: `/products/${categorySlug}` },
    { label: content.breadcrumbSubcategory },
    { label: productName },
  ];
};
