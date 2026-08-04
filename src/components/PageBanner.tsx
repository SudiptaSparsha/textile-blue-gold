import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
}

const PageBanner = ({ title, breadcrumbs }: PageBannerProps) => (
  <div className="bg-primary py-12 md:py-16">
    <div className="container text-center">
      <h1 className="text-2xl font-bold text-primary-foreground md:text-4xl">{title}</h1>
      <div className="mt-3 flex items-center justify-center gap-1 text-sm text-primary-foreground/70">
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {crumb.path ? (
              <Link href={crumb.path} className="transition-colors hover:text-accent">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-primary-foreground">{crumb.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default PageBanner;
