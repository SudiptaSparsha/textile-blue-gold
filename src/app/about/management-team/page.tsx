"use client";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";

const team = [
  { name: "Ahmed Rahman", role: "Managing Director", initials: "AR" },
  { name: "Kamal Hossain", role: "Head of Operations", initials: "KH" },
  { name: "Fariha Khan", role: "Sales Director", initials: "FK" },
  { name: "Rafiq Islam", role: "Chief Engineer", initials: "RI" },
  { name: "Nadia Akter", role: "Finance Manager", initials: "NA" },
  { name: "Tanvir Ahmed", role: "Service Manager", initials: "TA" },
];

const ManagementTeam = () => (
  <>
    <PageBanner title="Management Team" breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }, { label: "Management Team" }]} />
    <SectionWrapper>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <div key={m.name} className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              {m.initials}
            </div>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.role}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </>
);

export default ManagementTeam;
