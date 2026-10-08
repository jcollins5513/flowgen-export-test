// src/components/library/marketing/feature-hover-cards.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, Layers, GitBranch, type LucideIcon } from "lucide-react";

export interface HoverFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  linkLabel?: string;
}

export interface FeatureHoverCardsProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  features?: HoverFeature[];
}

const DEMO_FEATURES: HoverFeature[] = [
  { icon: Rocket, title: "Ship in minutes", description: "Spin up a production-ready environment from a single command and deploy on every push.", linkLabel: "Read the guide" },
  { icon: Layers, title: "Layered previews", description: "Every branch gets an isolated preview URL with its own data, so review never blocks main.", linkLabel: "See previews" },
  { icon: GitBranch, title: "Branch-aware config", description: "Environment variables and feature flags follow the branch, then promote cleanly to prod.", linkLabel: "Configure" },
];

export function FeatureHoverCards({
  eyebrow = "Built for velocity",
  heading = "Move fast without breaking prod",
  subheading = "Guardrails that stay out of the way until you need them.",
  features = DEMO_FEATURES,
}: FeatureHoverCardsProps) {
  return (
    <section className="w-full bg-background px-4 py-16 text-foreground md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
          )}
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">{heading}</h2>
          {subheading && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subheading}</p>}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.a
                key={feature.title}
                href="#"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-brutal transition-colors hover:border-primary"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-primary shadow-brutal-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{feature.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                {feature.linkLabel && (
                  <span className="mt-4 text-sm font-semibold text-primary">{feature.linkLabel}</span>
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
