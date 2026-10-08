"use client";

import { ResponsiveHeroBanner } from '@/components/library/marketing/responsive-hero-banner';

export default function LandingPageTaskFlowSaaSHeroBlock() {
  return (
<div>
        <ResponsiveHeroBanner
          title="Orchestrate Your Ambition."
          titleLine2="Flow, Don't Force."
          description="TaskFlow is the command center for high-performance teams. Ditch the scattered spreadsheets and chaotic chats for a single source of truth that moves as fast as you do."
          badgeLabel="NEW"
          badgeText="Version 3.0 with AI-powered insights is live"
          primaryButtonText="Get Started Free"
          primaryButtonHref="#"
          secondaryButtonText="Request a Demo"
          secondaryButtonHref="#"
          navLinks={[
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Testimonials", href: "#testimonials" },
          ]}
          ctaButtonText="Sign Up"
          logoUrl="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%2280%22%20viewBox%3D%220%200%20200%2080%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22152%22%20height%3D%2232%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E"
          backgroundImageUrl="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221920%22%20height%3D%221080%22%20viewBox%3D%220%200%201920%201080%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%221872%22%20height%3D%221032%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E"
          partnersTitle="Trusted by the world's most productive teams"
          partners={[
            { logoUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%2272%22%20viewBox%3D%220%200%20240%2072%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22192%22%20height%3D%2224%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", href: "#" },
            { logoUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%2272%22%20viewBox%3D%220%200%20240%2072%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22192%22%20height%3D%2224%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", href: "#" },
            { logoUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTFhMmUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzYzNjZmMSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPmFic3RyYWN0IHRlY2ggbG9nbyB0aHJlZTwvdGV4dD48L3N2Zz4=", href: "#" },
            { logoUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%2272%22%20viewBox%3D%220%200%20240%2072%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22192%22%20height%3D%2224%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E", href: "#" },
            { logoUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTFhMmUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzYzNjZmMSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPmFic3RyYWN0IHRlY2ggbG9nbyBmaXZlPC90ZXh0Pjwvc3ZnPg==", href: "#" },
          ]}
        />
      </div>
  );
}
