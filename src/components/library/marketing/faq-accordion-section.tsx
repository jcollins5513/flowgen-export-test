"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionSectionProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  faqs?: FaqItem[];
}

const DEMO_FAQS: FaqItem[] = [
  {
    question: "How does the free trial work?",
    answer:
      "You get full access to every feature for 14 days, no credit card required. Cancel anytime before the trial ends and you won't be charged a cent.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. Upgrade, downgrade, or switch billing cycles whenever you like from your account settings. Changes take effect immediately and we prorate the difference.",
  },
  {
    question: "Do you offer team and enterprise pricing?",
    answer:
      "Yes. Teams of five or more qualify for volume discounts, and our enterprise tier adds SSO, audit logs, and a dedicated success manager. Reach out and we'll tailor a plan.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is built in from the ground up. All data is encrypted in transit and at rest, we run regular third-party audits, and we are fully compliant with SOC 2 and GDPR.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You keep access until the end of your current billing period, then your account moves to read-only. Export your data anytime, and reactivate whenever you're ready.",
  },
];

export function FaqAccordionSection({
  eyebrow = "Support",
  heading = "Frequently asked questions",
  subheading = "Everything you need to know before getting started. Can't find an answer? Reach out to our team.",
  faqs = DEMO_FAQS,
}: FaqAccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-foreground">{heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {subheading}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl bg-card text-card-foreground border-2 border-border rounded-2xl shadow-brutal overflow-hidden">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={index > 0 ? "border-t-2 border-border" : ""}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-foreground transition-colors hover:bg-muted"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground shadow-brutal-sm"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
