"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { getWhatsAppLink } from "@/lib/whatsapp";

const ServiceRequest = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "New service request:",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Machine Model: ${data.get("machineModel")}`,
      `Issue Description: ${data.get("issue")}`,
    ].join("\n");
    window.open(getWhatsAppLink(message), "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner title="Service Request" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Support" }, { label: "Service Request" }]} />
      <SectionWrapper>
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl">✓</div>
              <h3 className="text-xl font-bold">Request Submitted</h3>
              <p className="mt-2 text-muted-foreground">We've opened WhatsApp with your request. Send it across and our service team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Full Name</label>
                  <input name="name" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone</label>
                  <input name="phone" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input name="email" type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Machine Model</label>
                <input name="machineModel" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="e.g. YT-EM906" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Issue Description</label>
                <textarea name="issue" required rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
              </div>
              <button type="submit" className="w-full rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
                Submit Request
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </>
  );
};

export default ServiceRequest;
