"use client";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { Target, Eye } from "lucide-react";

const MissionVision = () => (
  <>
    <PageBanner title="Mission & Vision" breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }, { label: "Mission & Vision" }]} />
    <SectionWrapper>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
            <Target className="h-7 w-7 text-accent" />
          </div>
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="mt-4 text-muted-foreground">
            To consistently deliver exceptional technical support, reliable services, and top-tier industrial products to textile and manufacturing facilities across Bangladesh—building long-term partnerships founded on trust, efficiency, and uncompromised quality.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
            <Eye className="h-7 w-7 text-accent" />
          </div>
          <h3 className="text-xl font-bold">Our Vision</h3>
          <p className="mt-4 text-muted-foreground">
            To remain a trusted, long-term service and support partner for Bangladesh's growing industrial sector, ensuring top-quality maintenance, genuine equipment, and reliable products for years to come.
          </p>
        </div>
      </div>
    </SectionWrapper>
  </>
);

export default MissionVision;
