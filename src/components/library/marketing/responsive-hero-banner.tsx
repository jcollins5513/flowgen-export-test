"use client";

import React, { useState } from "react";

interface NavLink { label: string; href: string; isActive?: boolean; }
interface Partner { logoUrl: string; href: string; }

interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  partnersTitle?: string;
  partners?: Partner[];
}

const DEMO_LOGO_URL = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%2280%22%20viewBox%3D%220%200%20200%2080%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22152%22%20height%3D%2232%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E";
const DEMO_BACKGROUND_IMAGE_URL = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%222400%22%20height%3D%222160%22%20viewBox%3D%220%200%202400%202160%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%222352%22%20height%3D%222112%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E";

const DEMO_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#", isActive: true },
  { label: "Services", href: "#" },
  { label: "Locations", href: "#" },
  { label: "Technology", href: "#" },
  { label: "Book Now", href: "#" },
];

const DEMO_PARTNERS: Partner[] = [
  { logoUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%2272%22%20viewBox%3D%220%200%20240%2072%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22192%22%20height%3D%2224%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", href: "#" },
  { logoUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%2272%22%20viewBox%3D%220%200%20240%2072%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22192%22%20height%3D%2224%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", href: "#" },
  { logoUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%2272%22%20viewBox%3D%220%200%20240%2072%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22192%22%20height%3D%2224%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", href: "#" },
  { logoUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%2272%22%20viewBox%3D%220%200%20240%2072%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22192%22%20height%3D%2224%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", href: "#" },
  { logoUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%2272%22%20viewBox%3D%220%200%20240%2072%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22192%22%20height%3D%2224%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", href: "#" },
];

export const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl = DEMO_LOGO_URL,
  backgroundImageUrl = DEMO_BACKGROUND_IMAGE_URL,
  navLinks = DEMO_NAV_LINKS,
  ctaButtonText = "Reserve Spot",
  ctaButtonHref = "#",
  badgeLabel = "New",
  badgeText = "Now booking for the upcoming season",
  title = "Go Further,",
  titleLine2 = "Together",
  description = "Experience a smoother way to plan, book, and manage your next journey. Our platform brings everything together so you can move faster with total confidence.",
  primaryButtonText = "Get Started",
  primaryButtonHref = "#",
  secondaryButtonText = "Watch Overview",
  secondaryButtonHref = "#",
  partnersTitle = "Trusted by teams around the world",
  partners = DEMO_PARTNERS,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative bg-background">
      {/* Keep the selected surface/foreground pair over bright or dark photos;
          the section surface also handles an absent or failed image. */}
      {backgroundImageUrl ? (
        <img src={backgroundImageUrl} alt="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" />
      ) : null}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-background/90 ring-1 ring-foreground/30" />

      <header className="z-10 xl:top-4 relative">
        <div className="mx-6">
          <div className="flex items-center justify-between pt-4">
            <a href="#" className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-cover rounded" style={{ backgroundImage: `url(${logoUrl})` }} />
            <nav className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-foreground/5 px-1 py-1 ring-1 ring-foreground/10 backdrop-blur">
                {navLinks.map((link, index) => (
                  <a key={index} href={link.href} className={`px-3 py-2 text-sm font-medium hover:text-foreground font-sans transition-colors ${link.isActive ? "text-foreground/90" : "text-foreground/80"}`}>
                    {link.label}
                  </a>
                ))}
                <a href={ctaButtonHref} className="ml-1 inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 font-sans transition-colors">
                  {ctaButtonText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 ring-1 ring-foreground/15 backdrop-blur" aria-expanded={mobileMenuOpen} aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-foreground/90">
                <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="z-10 relative">
        <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-28 px-6 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-foreground/10 px-2.5 py-2 ring-1 ring-foreground/15 backdrop-blur">
              <span className="inline-flex items-center text-xs font-medium text-background bg-foreground/90 rounded-full py-0.5 px-2 font-sans">{badgeLabel}</span>
              <span className="text-sm font-medium text-foreground/90 font-sans">{badgeText}</span>
            </div>
            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-foreground tracking-tight font-normal">
              {title}<br className="hidden sm:block" />{titleLine2}
            </h1>
            <p className="sm:text-lg text-base text-foreground/80 max-w-2xl mt-6 mx-auto">{description}</p>
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center">
              <a href={primaryButtonHref} className="inline-flex items-center gap-2 hover:bg-foreground/15 text-sm font-medium text-foreground bg-foreground/10 ring-foreground/15 ring-1 rounded-full py-3 px-5 font-sans transition-colors">
                {primaryButtonText}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
              <a href={secondaryButtonHref} className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-foreground/90 hover:text-foreground font-sans transition-colors">
                {secondaryButtonText}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" /></svg>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-20 max-w-5xl">
            <p className="text-sm text-foreground/80 text-center">{partnersTitle}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-foreground/80 mt-6 items-center justify-items-center gap-4">
              {partners.map((partner, index) => (
                <a key={index} href={partner.href} className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-cover rounded-full opacity-80 hover:opacity-100 transition-opacity" style={{ backgroundImage: `url(${partner.logoUrl})` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
