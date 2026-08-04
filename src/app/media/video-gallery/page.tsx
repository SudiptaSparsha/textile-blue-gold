"use client";

import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { Play } from "lucide-react";

const videos = [
  { title: "Yonthin Embroidery Machine Demo", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
  { title: "Circular Knitting Machine in Action", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
  { title: "Factory Tour - Yonthin Manufacturing", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
];

const VideoGallery = () => (
  <>
    <PageBanner title="Video Gallery" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Media" }, { label: "Video Gallery" }]} />
    <SectionWrapper>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((v, i) => (
          <div key={i} className="group cursor-pointer overflow-hidden rounded-lg border border-border">
            <div className="relative aspect-video bg-muted">
              <div className="flex h-full items-center justify-center bg-primary/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{v.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </>
);

export default VideoGallery;
