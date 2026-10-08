"use client";

import { Check, LayoutGrid, GitMerge, BarChartHorizontal, Star } from 'lucide-react';
import { FeatureHoverCards } from '@/components/library/marketing/feature-hover-cards';

export default function LandingPageTaskFlowSaaSFeaturesBlock() {
  return (
<div id="features">
        <FeatureHoverCards
          eyebrow="CORE CAPABILITIES"
          heading="Designed for Deep Work"
          subheading="Tools that enhance focus and eliminate friction, so your team can build momentum."
          features={[
            {
              icon: LayoutGrid,
              title: "Smart Boards",
              description: "Visualize workflows your way. From Kanban to timelines, our boards adapt to your process, not the other way around.",
              linkLabel: "Explore Board Views"
            },
            {
              icon: GitMerge,
              title: "Automated Workflows",
              description: "Eliminate manual tasks with powerful, no-code automations. Keep projects moving, even when you're not at your desk.",
              linkLabel: "See Automations"
            },
            {
              icon: BarChartHorizontal,
              title: "Insightful Reporting",
              description: "Get a real-time pulse on project health. Customizable dashboards turn complex data into clear, actionable insights.",
              linkLabel: "Learn about Dashboards"
            }
          ]}
        />
      </div>
  );
}
