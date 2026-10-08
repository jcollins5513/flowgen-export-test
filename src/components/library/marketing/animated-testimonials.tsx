"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Quote, Star } from "lucide-react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const DEMO_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Engineering Lead",
    company: "Acme",
    content: "This tool completely transformed our design workflow. We went from ad-hoc screens to a coherent design system in under a week. It gets our brand voice immediately.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah-chen-testimonial",
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: "Product Designer",
    company: "Our Studio",
    content: "I've tried every tool out there. This is the first one that actually produces work I'm willing to ship. The consistent system is a game-changer.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=marcus-rivera-testimonial",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "CTO",
    company: "Northside Labs",
    content: "We prototyped an entire onboarding flow in one afternoon. The component library means every screen looks cohesive without any extra effort.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=priya-nair-testimonial",
  },
];

interface AnimatedTestimonialsProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  className?: string;
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "See what developers and designers have to say about building with AI-powered tools.",
  badgeText = "Trusted by builders",
  testimonials = DEMO_TESTIMONIALS,
  autoRotateInterval = 6000,
  className = "",
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;
    const id = setInterval(() => setActiveIndex((c) => (c + 1) % testimonials.length), autoRotateInterval);
    return () => clearInterval(id);
  }, [autoRotateInterval, testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section ref={sectionRef} className={`py-24 overflow-hidden bg-muted/30 ${className}`}>
      <div className="px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 w-full md:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  <Star className="mr-1 h-3.5 w-3.5 fill-primary" />
                  <span>{badgeText}</span>
                </div>
              )}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">{title}</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">{subtitle}</p>
              <div className="flex items-center gap-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-10 bg-primary" : "w-2.5 bg-muted-foreground/30"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-full mr-10 min-h-[300px] md:min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="bg-card border-2 border-border shadow-brutal rounded-xl p-8 h-full flex flex-col">
                  <div className="mb-6 flex gap-1">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="relative mb-6 flex-1">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20 rotate-180" />
                    <p className="relative z-10 text-lg font-medium leading-relaxed text-foreground">"{testimonial.content}"</p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-border shadow-brutal-sm">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-muted text-muted-foreground">{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-primary/5 pointer-events-none" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-primary/5 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
