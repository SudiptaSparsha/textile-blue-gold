"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What brands do you sell?", a: "We are the authorized importer of Yonthin garment machinery in Bangladesh. All our products are genuine Yonthin machines." },
  { q: "Do you provide installation support?", a: "Yes, our team of trained engineers provides complete installation, commissioning, and operator training for all machines purchased." },
  { q: "What is the warranty period?", a: "All machines come with a standard 1-year warranty covering manufacturing defects. Extended warranty packages are available." },
  { q: "Do you offer spare parts?", a: "We maintain a comprehensive inventory of genuine Yonthin spare parts in our Dhaka warehouse for quick delivery." },
  { q: "Can I visit your showroom?", a: "Absolutely! Our head office in Uttara, Dhaka is open Sunday to Thursday. Please call ahead to schedule a demonstration." },
  { q: "Do you offer financing options?", a: "We work with several financial institutions to provide flexible payment plans. Contact our sales team for details." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageBanner title="Frequently Asked Questions" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Support" }, { label: "FAQ" }]} />
      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium transition-colors hover:text-accent"
              >
                {faq.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="border-t border-border px-6 py-4 text-sm text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default FAQ;
