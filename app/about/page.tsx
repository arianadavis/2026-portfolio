"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import { Separator } from "@/components/ui/separator";
import { experience, socials } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="pt-[120px]">
      <section className="px-8 pb-20 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground font-normal">
            About
          </span>
          <Separator className="mt-8" />
        </motion.div>

        <div className="grid grid-cols-2 gap-20 items-start">
          {/* Left: Name + Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-display font-medium leading-[0.95] tracking-[-0.03em] text-foreground mb-10"
              style={{ fontSize: "clamp(48px, 6vw, 88px)" }}
            >
              Ariana
              <br />
              <em className="text-primary" style={{ fontStyle: "italic" }}>
                Davis
              </em>
            </h1>

            <p className="text-base leading-[1.8] text-foreground max-w-[480px] mb-6 font-light">
              Senior product designer with 8+ years focused on complex,
              high-scale product. Experience at Apple and Google. Specializes
              in translating ambiguous problems into clear, scalable solutions.
            </p>

            <p className="text-[15px] leading-[1.8] text-muted-foreground max-w-[480px] mb-12 font-light">
              Based in Los Angeles, I work at the intersection of design and
              systems thinking — crafting experiences that feel inevitable in
              hindsight. My process centers on deep problem understanding, rapid
              iteration, and rigorous attention to detail at every scale.
            </p>

            {/* Social links */}
            <div className="flex flex-col">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex justify-between items-center text-muted-foreground hover:text-foreground no-underline py-3 border-b border-border transition-colors duration-200"
                >
                  <span className="text-[11px] tracking-[0.06em] uppercase font-normal">
                    {s.name}
                  </span>
                  <span className="text-[13px]">{s.handle}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground font-normal mb-10">
              Experience
            </h2>
            <Timeline items={experience} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
