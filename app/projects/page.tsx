"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="px-8 max-w-[1200px] mx-auto mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground mb-3"
        >
          All Work
        </motion.p>
        <Separator className="mb-10" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(32px,5vw,60px)] leading-[1.05] tracking-[-0.03em] mb-2"
        >
          <span className="font-extralight">Selected </span>
          <span className="font-bold">Projects</span>
        </motion.h1>
      </div>

      <ProjectCarousel projects={projects} />
    </div>
  );
}
