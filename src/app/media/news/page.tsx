"use client";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { Calendar } from "lucide-react";

const newsItems = [
  { title: "Textile Blue Gold Expands Product Line with New Yonthin Machines", date: "March 15, 2026", excerpt: "We are excited to announce the addition of three new Yonthin machine models to our catalog, including the latest flat knitting technology." },
  { title: "Participation in Dhaka Textile Expo 2026", date: "February 28, 2026", excerpt: "Textile Blue Gold showcased the latest garment machinery at the annual Dhaka Textile Expo, attracting over 200 visitors to our booth." },
  { title: "New Service Center Opens in Chittagong", date: "January 10, 2026", excerpt: "To better serve our clients in the port city region, we have opened a new service center in Chittagong with a team of trained engineers." },
  { title: "Partnership with Yonthin Strengthens", date: "December 5, 2025", excerpt: "Textile Blue Gold and Yonthin signed an extended partnership agreement, reinforcing our commitment to delivering quality machinery in Bangladesh." },
];

const News = () => (
  <>
    <PageBanner title="News" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Media" }, { label: "News" }]} />
    <SectionWrapper>
      <div className="grid gap-6 md:grid-cols-2">
        {newsItems.map((item) => (
          <article key={item.title} className="rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-accent" /> {item.date}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.excerpt}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  </>
);

export default News;
