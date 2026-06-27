"use client";

import { motion } from "framer-motion";
import { specialties } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pt-20 sm:pt-32 pb-0 px-5 sm:px-8 max-w-[1200px] mx-auto">
      {/* Big mixed-weight headline */}
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(36px,6.5vw,76px)] leading-[1.08] tracking-[-0.03em] mb-6"
      >
        <span className="font-extralight text-foreground">
          Clarity is my superpower.{" "}
        </span>
        <span className="font-bold text-foreground">
          I design high-scale products
        </span>
        <span className="font-extralight text-foreground">
          {" "}at Apple & Google that just work.
        </span>
      </motion.h1>

      {/* Tagline + specialty tags */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-5 flex-wrap"
      >
        <p className="text-[14px] text-muted-foreground">
          8+ years translating complex problems into scalable solutions.
        </p>

        {/* Divider */}
        <div className="hidden sm:block h-4 w-px bg-border" />

        {/* Specialty tag pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {specialties.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-1.5 text-[13px] text-foreground/70 border border-border rounded-full px-3 py-1 hover:border-foreground/20 transition-colors duration-150"
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: s.color }}
              />
              {s.label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
