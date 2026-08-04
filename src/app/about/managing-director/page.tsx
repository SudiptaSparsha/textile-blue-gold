"use client";

import PageBanner from "@/components/PageBanner";
import SectionWrapper, { SectionTitle } from "@/components/SectionWrapper";
import { GraduationCap, Factory, Zap, HardHat, Palmtree } from "lucide-react";
import mdPhotoObj from "@/assets/company-data/WhatsApp Image 2026-07-21 at 12,38,16-Picsart-AiImageEnhancer.jpeg";
const mdPhoto = mdPhotoObj.src;

const education = [
  "B.Sc. in Electrical & Electronic Engineering (EEE)",
  "MBA — University of Dhaka (DU)",
];

const groupCompanies = [
  { name: "Textile Blue Gold", icon: Factory },
  { name: "Power Supply Engineering Ltd.", icon: Zap },
  { name: "Power Steel Engineering", icon: HardHat },
  { name: "Bhanga Resort", icon: Palmtree },
];

const ManagingDirectorProfile = () => (
  <>
    <PageBanner
      title="Managing Director's Profile"
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }, { label: "Managing Director's Profile" }]}
    />
    <SectionWrapper>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,380px)_1fr]">
        <div className="overflow-hidden rounded-lg border border-border shadow-lg">
          <img
            src={mdPhoto}
            alt="Engr. Akkas Ahmed (Sahed) — Managing Director"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Engr. Akkas Ahmed (Sahed)</h2>
          <p className="mt-1 font-medium text-accent">Managing Director, Textile Blue Gold</p>
          <div className="mt-3 h-1 w-16 rounded-full bg-accent" />

          <p className="mt-6 text-muted-foreground">
            Under the leadership of Engineer Akkas Ahmed, Textile Blue Gold has been operating with dedication and integrity since 2008, delivering top-tier technical services, solutions, and high-quality industrial machinery to textile factories and manufacturing plants across Bangladesh.
          </p>

          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">Educational Background</h3>
            </div>
            <ul className="space-y-2">
              {education.map((item) => (
                <li key={item} className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper alt>
      <SectionTitle title="Group of Companies" subtitle="Other businesses led by Engr. Akkas Ahmed" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groupCompanies.map((company) => (
          <div key={company.name} className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <company.icon className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-semibold">{company.name}</h3>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </>
);

export default ManagingDirectorProfile;
