"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/products";

const navItems = [
  { label: "Home", path: "/", linkPath: "/" },
  {
    label: "About Us",
    path: "/about",
    linkPath: "/about/company-profile",
    children: [
      { label: "Company Profile", path: "/about/company-profile" },
      { label: "Managing Director's Profile", path: "/about/managing-director" },
      { label: "Mission & Vision", path: "/about/mission-vision" },
      { label: "Leadership Message", path: "/about/leadership-message" },
      { label: "Management Team", path: "/about/management-team" },
      { label: "Core Values", path: "/about/core-values" },
    ],
  },
  {
    label: "Products",
    path: "/products",
    linkPath: "/products",
    children: categories.map((cat) => ({ label: cat.name, path: `/products/${cat.slug}` })),
  },
  {
    label: "Media",
    path: "/media",
    linkPath: "/media/news",
    children: [
      { label: "News", path: "/media/news" },
      { label: "Photo Gallery", path: "/media/photo-gallery" },
      { label: "Video Gallery", path: "/media/video-gallery" },
    ],
  },
  {
    label: "Support",
    path: "/support",
    linkPath: "/support/faq",
    children: [
      { label: "FAQ", path: "/support/faq" },
      { label: "Downloads", path: "/support/downloads" },
      { label: "Service Request", path: "/support/service-request" },
    ],
  },
  { label: "Contact", path: "/contact", linkPath: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-1 text-xl font-bold">
          <span className="text-primary">Textile</span>
          <span className="text-accent">Blue Gold</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.linkPath}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                  pathname === item.path || pathname.startsWith(item.path + "/")
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <ul className="absolute left-0 top-full min-w-[240px] rounded-md border border-border bg-background py-1 shadow-lg">
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link
                        href={child.path}
                        className="block px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="container space-y-1 py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.linkPath}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          href={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
