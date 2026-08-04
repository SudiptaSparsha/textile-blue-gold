"use client";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { Download, FileText } from "lucide-react";

const downloads = [
  { name: "Product Catalog 2026", type: "PDF", size: "12.5 MB" },
  { name: "Air Compressor Technical Manual", type: "PDF", size: "8.2 MB" },
  { name: "Knitting Machine Specifications", type: "PDF", size: "5.1 MB" },
  { name: "Embroidery Machine User Guide", type: "PDF", size: "6.8 MB" },
  { name: "Warranty Terms & Conditions", type: "PDF", size: "1.2 MB" },
];

const Downloads = () => (
  <>
    <PageBanner title="Downloads" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Support" }, { label: "Downloads" }]} />
    <SectionWrapper>
      <div className="mx-auto max-w-3xl space-y-3">
        {downloads.map((d) => (
          <div key={d.name} className="flex items-center justify-between rounded-lg border border-border bg-card px-6 py-4 transition-all hover:shadow-sm">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-medium">{d.name}</h3>
                <p className="text-xs text-muted-foreground">{d.type} • {d.size}</p>
              </div>
            </div>
            <button className="flex items-center gap-1 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
              <Download className="h-4 w-4" /> Download
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </>
);

export default Downloads;
