"use client";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";

const LeadershipMessage = () => (
  <>
    <PageBanner title="Leadership Message" breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }, { label: "Leadership Message" }]} />
    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg border border-border bg-card p-8 md:p-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              AA
            </div>
            <div>
              <h3 className="text-lg font-bold">Engineer Akkas Ahmed</h3>
              <p className="text-sm text-muted-foreground">Managing Director</p>
            </div>
          </div>
          <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
            "Since 2008, we have operated with dedication and integrity, and that has never changed. Our commitment to genuine equipment, reliable service, and technical excellence has been the cornerstone of our growth across Bangladesh's textile and manufacturing sector."
          </blockquote>
          <p className="mt-6 text-muted-foreground">
            With over a decade of industry expertise, we remain focused on delivering top-tier technical services, solutions, and high-quality industrial machinery—building long-term partnerships founded on trust, efficiency, and uncompromised quality.
          </p>
        </div>
      </div>
    </SectionWrapper>
  </>
);

export default LeadershipMessage;
