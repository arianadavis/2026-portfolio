"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="pt-[120px]">
      <section className="px-8 pb-32 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex justify-between items-baseline mb-8">
            <span className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground font-normal">
              All Work
            </span>
            <span className="text-[11px] text-muted-foreground">
              {projects.length} Projects
            </span>
          </div>
          <Separator />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium leading-none tracking-[-0.02em] text-foreground mb-20"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          Selected
          <br />
          <em className="text-primary" style={{ fontStyle: "italic" }}>
            Projects
          </em>
        </motion.h1>

        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
