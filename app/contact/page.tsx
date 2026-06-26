"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socials } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="pt-[120px] min-h-[calc(100vh-80px)]">
      <section className="px-8 pb-32 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground font-normal">
            Contact
          </span>
          <Separator className="mt-8" />
        </motion.div>

        <div className="max-w-[800px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-medium leading-[0.95] tracking-[-0.03em] text-foreground mb-12"
            style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
          >
            Let&apos;s
            <br />
            <em className="text-primary" style={{ fontStyle: "italic" }}>
              work together
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base leading-[1.8] text-muted-foreground max-w-[440px] mb-20 font-light"
          >
            Open to select design leadership and advisory opportunities.
            The best place to reach me is email.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-20"
          >
            <a
              href="mailto:hello@arianadavis.com"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-auto px-8 py-4 text-sm tracking-[0.06em] uppercase border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-[2px] no-underline"
              )}
            >
              hello@arianadavis.com
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground mb-6">
              Elsewhere
            </p>
            <div className="flex flex-col">
              {socials
                .filter((s) => !s.url.startsWith("mailto"))
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center py-4 border-b border-border text-muted-foreground hover:text-foreground no-underline text-sm transition-colors duration-200"
                  >
                    <span className="text-[11px] tracking-[0.1em] uppercase font-normal">
                      {social.name}
                    </span>
                    <span className="text-[13px]">{social.handle} →</span>
                  </a>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
