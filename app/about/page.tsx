"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import { Separator } from "@/components/ui/separator";
import { experience, socials } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="pt-28 px-5 sm:px-8 pb-24 max-w-[1200px] mx-auto">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground mb-3"
      >
        About
      </motion.p>
      <Separator className="mb-14" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.03em] mb-8">
            <span className="font-extralight">Ariana </span>
            <span className="font-bold">Davis</span>
          </h1>

          <p className="text-[15px] leading-[1.8] text-foreground/80 max-w-[480px] mb-4">
            Senior product designer with 8+ years focused on complex,
            high-scale product. Experience at Apple and Google. Specializes
            in translating ambiguous problems into clear, scalable solutions.
          </p>

          <p className="text-[14px] leading-[1.8] text-muted-foreground max-w-[480px] mb-12">
            Based in Los Angeles, I work at the intersection of design and
            systems thinking — crafting experiences that feel inevitable in
            hindsight.
          </p>

          {/* Social rows */}
          <div className="flex flex-col">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex justify-between items-center py-3 border-b border-border text-muted-foreground hover:text-foreground no-underline transition-colors duration-150 text-[13px]"
                >
                  <span className="flex items-center gap-2.5">
                    <Icon size={15} aria-label={s.name} />
                    <span className="sr-only">{s.name}</span>
                  </span>
                  <span>{s.handle}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right — Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground mb-10">
            Experience
          </p>
          <Timeline items={experience} />
        </motion.div>
      </div>
    </div>
  );
}
