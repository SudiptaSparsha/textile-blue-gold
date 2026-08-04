"use client";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { Shield, Heart, Lightbulb, Users, Star, Handshake } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", desc: "Honest and transparent in every interaction" },
  { icon: Star, title: "Quality", desc: "Only the best machinery for our clients" },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing latest technology and solutions" },
  { icon: Users, title: "Customer Focus", desc: "Your success is our priority" },
  { icon: Handshake, title: "Partnership", desc: "Building long-term relationships" },
  { icon: Heart, title: "Commitment", desc: "Dedicated service and support always" },
];

const CoreValues = () => (
  <>
    <PageBanner title="Core Values" breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }, { label: "Core Values" }]} />
    <SectionWrapper>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <v.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 font-semibold">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </>
);

export default CoreValues;
