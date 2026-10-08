"use client";

import { FaqAccordionSection } from '@/components/library/marketing/faq-accordion-section';

export default function LandingPageTaskFlowSaaSFaqBlock() {
  return (
<div>
          <FaqAccordionSection
            eyebrow="CLARITY"
            heading="Your Questions, Answered"
            subheading="Common questions about plans, security, and getting started with TaskFlow."
            faqs={[
              {
                question: "Is there a free trial for paid plans?",
                answer: "Yes! All our paid plans come with a 14-day free trial. You get full access to all the features in that plan to see if it's the right fit for your team. No credit card required to start."
              },
              {
                question: "How does billing work?",
                answer: "You can choose to be billed monthly or annually. Annual billing provides a discount. You can upgrade, downgrade, or cancel your plan at any time from your account settings."
              },
              {
                question: "Can I import data from other project management tools?",
                answer: "Absolutely. We offer easy-to-use importers for popular tools like Trello, Asana, and Jira. You can get your team's existing work into TaskFlow in just a few clicks."
              },
              {
                question: "How secure is my data in TaskFlow?",
                answer: "We take security extremely seriously. All data is encrypted at rest and in transit using industry-standard protocols. We are SOC 2 Type II compliant and perform regular security audits."
              }
            ]}
          />
        </div>
  );
}
