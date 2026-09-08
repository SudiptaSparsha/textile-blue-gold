import c7_5d5p1 from "@/assets/generators/cummins/cummins-c7-5d5p/cummins-c7-5d5p-1.jpg";
import c7_5d5pAi from "@/assets/generators/cummins/cummins-c7-5d5p/cummins-c7-5d5p-ai.png";
import c11d5Ai from "@/assets/generators/cummins/cummins-c11d5/cummins-c11d5-ai.png";
import c15d5_1 from "@/assets/generators/cummins/cummins-c15d5/cummins-c15d5-1.jpg";
import c15d5Ai from "@/assets/generators/cummins/cummins-c15d5/cummins-c15d5-ai.png";
import c22d5_1 from "@/assets/generators/cummins/cummins-c22d5/cummins-c22d5-1.jpg";
import c22d5Ai from "@/assets/generators/cummins/cummins-c22d5/cummins-c22d5-ai.png";
import c38d5_1 from "@/assets/generators/cummins/cummins-c38d5/cummins-c38d5-1.jpg";
import c38d5Ai from "@/assets/generators/cummins/cummins-c38d5/cummins-c38d5-ai.png";
import c55d5_1 from "@/assets/generators/cummins/cummins-c55d5/cummins-c55d5-1.jpg";
import c55d5Ai from "@/assets/generators/cummins/cummins-c55d5/cummins-c55d5-ai.png";
import c66d5_1 from "@/assets/generators/cummins/cummins-c66d5/cummins-c66d5-1.jpg";
import c66d5Ai from "@/assets/generators/cummins/cummins-c66d5/cummins-c66d5-ai.png";
import c90d5_1 from "@/assets/generators/cummins/cummins-c90d5/cummins-c90d5-1.jpg";
import c90d5Ai from "@/assets/generators/cummins/cummins-c90d5/cummins-c90d5-ai.png";
import c110d5_1 from "@/assets/generators/cummins/cummins-c110d5/cummins-c110d5-1.jpg";
import c110d5Ai from "@/assets/generators/cummins/cummins-c110d5/cummins-c110d5-ai.png";
import c150d5_1 from "@/assets/generators/cummins/cummins-c150d5/cummins-c150d5-1.jpg";
import c150d5Ai from "@/assets/generators/cummins/cummins-c150d5/cummins-c150d5-ai.png";
import c200d5e_1 from "@/assets/generators/cummins/cummins-c200d5e/cummins-c200d5e-1.jpg";
import c275d5Ai from "@/assets/generators/cummins/cummins-c275d5/cummins-c275d5-ai.png";
import c300d5_1 from "@/assets/generators/cummins/cummins-c300d5/cummins-c300d5-1.jpg";
import perkinsDiesel1 from "@/assets/generators/perkins/perkins-diesel-generator/perkins-diesel-generator-1.jpg";
import perkinsNaturalGas1 from "@/assets/generators/perkins/perkins-natural-gas-generator/perkins-natural-gas-generator-1.png";
import fmwTbg30_50_1 from "@/assets/generators/fmw-tbg/fmw-tbg-30kw-50kw/fmw-tbg-30kw-50kw-1.png";
import fmwTbg64_120_1 from "@/assets/generators/fmw-tbg/fmw-tbg-64kw-120kw/fmw-tbg-64kw-120kw-1.png";
import fmwTbg75_120_1 from "@/assets/generators/fmw-tbg/fmw-tbg-75kw-120kw/fmw-tbg-75kw-120kw-1.png";
import fmwTbg100_200_1 from "@/assets/generators/fmw-tbg/fmw-tbg-100kw-200kw/fmw-tbg-100kw-200kw-1.png";
import fmwTbg120_200_1 from "@/assets/generators/fmw-tbg/fmw-tbg-120kw-200kw/fmw-tbg-120kw-200kw-1.png";
import tbgBrandDiesel1 from "@/assets/generators/fmw-tbg/tbg-brand-diesel-generator/tbg-brand-diesel-generator-1.jpg";

import type { GalleryImage } from "@/data/embroideryImages";

const toGallery = (name: string, images: { src: string }[]): GalleryImage[] =>
  images.map((image, index) => ({
    src: image.src,
    alt: `${name} view ${index + 1}`,
  }));

export const generatorGalleryImages: Record<string, GalleryImage[]> = {
  "cummins-c7-5d5p": toGallery("Cummins C7.5D5P Diesel Generator", [c7_5d5pAi, c7_5d5p1]),
  "cummins-c11d5": toGallery("Cummins C11D5 Diesel Generator", [c11d5Ai, c55d5_1]),
  "cummins-c15d5": toGallery("Cummins C15D5 Diesel Generator", [c15d5Ai, c15d5_1]),
  "cummins-c22d5": toGallery("Cummins C22D5 Diesel Generator", [c22d5Ai, c22d5_1]),
  "cummins-c38d5": toGallery("Cummins C38D5 Diesel Generator", [c38d5Ai, c38d5_1]),
  "cummins-c55d5": toGallery("Cummins C55D5 Diesel Generator", [c55d5Ai, c55d5_1]),
  "cummins-c66d5": toGallery("Cummins C66D5 Diesel Generator", [c66d5Ai, c66d5_1]),
  "cummins-c90d5": toGallery("Cummins C90D5 Diesel Generator", [c90d5Ai, c90d5_1]),
  "cummins-c110d5": toGallery("Cummins C110D5 Diesel Generator", [c110d5Ai, c110d5_1]),
  "cummins-c150d5": toGallery("Cummins C150D5 Diesel Generator", [c150d5Ai, c150d5_1]),
  "cummins-c200d5e": toGallery("Cummins C200D5E Diesel Generator", [c200d5e_1]),
  "cummins-c275d5": toGallery("Cummins C275D5 Diesel Generator", [c275d5Ai, c55d5_1]),
  "cummins-c300d5": toGallery("Cummins C300D5 Diesel Generator", [c300d5_1]),
  "perkins-diesel-generator": toGallery("Perkins Diesel Generator", [perkinsDiesel1]),
  "perkins-natural-gas-generator": toGallery("Perkins Natural Gas Generator", [perkinsNaturalGas1]),
  "fmw-tbg-30kw-50kw": toGallery("FMW/TBG 30KW-50KW Open Type Diesel Generator", [fmwTbg30_50_1]),
  "fmw-tbg-64kw-120kw": toGallery("FMW/TBG 64KW-120KW Open Type Diesel Generator", [fmwTbg64_120_1]),
  "fmw-tbg-75kw-120kw": toGallery("FMW/TBG 75KW-120KW Open Type Diesel Generator", [fmwTbg75_120_1]),
  "fmw-tbg-100kw-200kw": toGallery("FMW/TBG 100KW-200KW Open Type Diesel Generator", [fmwTbg100_200_1]),
  "fmw-tbg-120kw-200kw": toGallery("FMW/TBG 120KW-200KW Open Type Diesel Generator", [fmwTbg120_200_1]),
  "tbg-brand-diesel-generator": toGallery("TBG Brand Diesel Generator – England-China", [tbgBrandDiesel1]),
};

export const getGeneratorGalleryImages = (slug: string): GalleryImage[] =>
  generatorGalleryImages[slug] ?? [];
