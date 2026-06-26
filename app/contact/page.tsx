"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socials } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="pt-28 px-5 sm:px-8 pb-24 max-w-[1200px] mx-auto min-h-[calc(100vh-56px)]">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground mb-3"
      >
        Contact
      </motion.p>
      <Separator className="mb-14" />

      <div className="max-w-[680px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(36px,5.5vw,68px)] leading-[1.05] tracking-[-0.03em] mb-8"
        >
          <span className="font-extralight">Have a project </span>
          <span className="font-bold">in mind?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[15px] leading-[1.8] text-muted-foreground max-w-[420px] mb-10"
        >
          Open to select design leadership and advisory opportunities.
          The best place to reach me is email.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-16"
        >
          <a
            href="mailto:hello@arianadavis.com"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-10 px-6 rounded-full text-[13px] font-medium no-underline"
            )}
          >
            hello@arianadavis.com
          </a>
        </motion.div>

        {/* Social list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground mb-5">
            Elsewhere
          </p>
          <div className="flex flex-col">
            {socials
              .filter((s) => !s.url.startsWith("mailto"))
              .map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center py-3.5 border-b border-border text-muted-foreground hover:text-foreground no-underline text-[13px] transition-colors duration-150"
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon size={15} aria-label={social.name} />
                      <span className="sr-only">{social.name}</span>
                    </span>
                    <span>{social.handle} →</span>
                  </a>
                );
              })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
