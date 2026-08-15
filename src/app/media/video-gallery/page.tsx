"use client";

import { useEffect, useState } from "react";
import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { Play, X } from "lucide-react";
import embroideryThumbObj from "@/assets/video-thumbnails/embroidery-video.jpg";
import knittingThumbObj from "@/assets/video-thumbnails/circular-knitting-video.jpg";
import factoryThumbObj from "@/assets/video-thumbnails/yonthin-factory-tour.jpg";

const videos = [
  { title: "Yonthin Embroidery Machine Assembly", src: "/videos/embroidery-video.mp4", thumbnail: embroideryThumbObj.src },
  { title: "Circular Knitting Machine in Action", src: "/videos/circular-knitting-video.mp4", thumbnail: knittingThumbObj.src },
  { title: "Yonthin Factory Tour", src: "/videos/yonthin-factory-tour.mp4", thumbnail: factoryThumbObj.src },
];

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState<{ title: string; src: string } | null>(null);

  useEffect(() => {
    if (!activeVideo) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);

  return (
    <>
      <PageBanner title="Video Gallery" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Media" }, { label: "Video Gallery" }]} />
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <button
              key={v.src}
              type="button"
              onClick={() => setActiveVideo(v)}
              className="group cursor-pointer overflow-hidden rounded-lg border border-border text-left"
            >
              <div className="relative aspect-video bg-muted">
                <img src={v.thumbnail} alt={v.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{v.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </SectionWrapper>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <video
              key={activeVideo.src}
              src={activeVideo.src}
              controls
              autoPlay
              className="max-h-[80vh] w-full rounded-md bg-black"
            />
            <h4 className="mt-3 text-center text-lg font-semibold text-white">{activeVideo.title}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGallery;
