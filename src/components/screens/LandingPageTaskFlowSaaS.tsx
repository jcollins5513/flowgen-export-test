"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, LayoutGrid, GitMerge, BarChartHorizontal, Star } from 'lucide-react';
import { ResponsiveHeroBanner } from '@/components/library/marketing/responsive-hero-banner';
import { FeatureHoverCards } from '@/components/library/marketing/feature-hover-cards';
import { FaqAccordionSection } from '@/components/library/marketing/faq-accordion-section';
import { AnimatedTestimonials } from '@/components/library/marketing/animated-testimonials';
import { Footer2 } from '@/components/library/marketing/footer2';
import { cn } from '@/lib/utils';
import LandingPageTaskFlowSaaSHeroBlock from '@/components/blocks/LandingPageTaskFlowSaaSHeroBlock';
import LandingPageTaskFlowSaaSFeaturesBlock from '@/components/blocks/LandingPageTaskFlowSaaSFeaturesBlock';
import LandingPageTaskFlowSaaSFaqBlock from '@/components/blocks/LandingPageTaskFlowSaaSFaqBlock';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/ user / month',
    description: 'For individuals and small teams getting organized.',
    features: [
      'Up to 3 projects',
      'Basic task management',
      'Standard integrations',
      'Community support',
    ],
    cta: 'Start for Free',
    variant: 'secondary',
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/ user / month',
    description: 'For growing teams that need to move faster.',
    features: [
      'Unlimited projects',
      'Advanced reporting',
      'Workflow automations',
      'Priority email support',
      'Guest access',
    ],
    cta: 'Get Started Free',
    variant: 'primary',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with advanced security needs.',
    features: [
      'Everything in Pro, plus:',
      'SAML SSO',
      'Dedicated success manager',
      'Custom data residency',
      '24/7 premium support',
    ],
    cta: 'Contact Sales',
    variant: 'secondary',
  },
];

const GeneratedScreen = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-background text-foreground">
      <LandingPageTaskFlowSaaSHeroBlock />

      <LandingPageTaskFlowSaaSFeaturesBlock />

      <section id="pricing" className="w-full py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-foreground">
              Pricing that scales with you
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose mx-auto">
              Simple, transparent plans for teams of all sizes. Start for free, no credit card required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col h-full",
                  tier.featured && "transform lg:scale-105 z-10"
                )}
              >
                <Card className={cn(
                  "flex flex-col flex-grow w-full shadow-brutal",
                  tier.featured && "border-2 border-primary"
                )}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="pt-10">
                    <CardTitle className="font-display text-2xl font-bold">{tier.name}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black tracking-tight text-foreground">{tier.price}</span>
                      {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                    </div>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      size="lg"
                      className="w-full"
                      variant={tier.variant as "primary" | "secondary"}
                    >
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 md:py-32 bg-card">
        <AnimatedTestimonials
          badgeText="REAL RESULTS"
          title="Why teams choose TaskFlow"
          subtitle="Hear directly from managers and contributors who have transformed their workflows."
          testimonials={[
            {
              id: 1,
              name: "Elena Rodriguez",
              role: "Project Manager",
              company: "Innovate Inc.",
              content: "TaskFlow brought order to our chaos. The ability to create custom workflows has cut our project setup time in half. It's the single source of truth we desperately needed.",
              rating: 5,
              avatar: "https://i.pravatar.cc/150?u=elena-rodriguez",
            },
            {
              id: 2,
              name: "Ben Carter",
              role: "Head of Engineering",
              company: "Quantum Leap",
              content: "My team lives in TaskFlow. The integrations with our dev tools are seamless, and the reporting gives me the high-level overview I need without constant status meetings.",
              rating: 5,
              avatar: "https://i.pravatar.cc/150?u=ben-carter",
            },
            {
              id: 3,
              name: "Aisha Khan",
              role: "Marketing Director",
              company: "Momentum Co.",
              content: "We manage complex campaigns across multiple channels. TaskFlow's visual timelines and dependency tracking ensure everyone is aligned and we never miss a deadline.",
              rating: 5,
              avatar: "https://i.pravatar.cc/150?u=aisha-khan",
            },
          ]}
        />
      </section>

      <section className="py-24 md:py-32">
        <LandingPageTaskFlowSaaSFaqBlock />
      </section>

      <div>
        <Footer2
          logo={{
            src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%2280%22%20viewBox%3D%220%200%20200%2080%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%22152%22%20height%3D%2232%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23374151%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EStock%20image%20unavailable%3C%2Ftext%3E%3C%2Fsvg%3E",
            alt: "TaskFlow Logo",
            title: "TaskFlow",
            url: "#"
          }}
          tagline="The future of work is fluid."
          copyright="© 2024 TaskFlow Inc. All rights reserved."
          menuItems={[
            {
              title: "Product",
              links: [
                { text: "Features", url: "#features" },
                { text: "Pricing", url: "#pricing" },
                { text: "Integrations", url: "#" },
                { text: "Security", url: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { text: "About Us", url: "#" },
                { text: "Careers", url: "#" },
                { text: "Blog", url: "#" },
                { text: "Contact Us", url: "#" },
              ],
            },
            {
              title: "Resources",
              links: [
                { text: "Help Center", url: "#" },
                { text: "API Docs", url: "#" },
                { text: "Webinars", url: "#" },
              ],
            },
            {
              title: "Legal",
              links: [
                { text: "Privacy Policy", url: "#" },
                { text: "Terms of Service", url: "#" },
              ],
            },
          ]}
          bottomLinks={[]}
        />
      </div>
    </div>
  );
};
export default GeneratedScreen;
