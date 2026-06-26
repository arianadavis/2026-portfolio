"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  featured: boolean;
}

interface ProjectCarouselProps {
  projects: Project[];
}

function CarouselCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="shrink-0 w-[520px] snap-center"
    >
      <Link
        href={`/projects/${project.id}`}
        className="block no-underline group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image placeholder */}
        <div
          className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/30" />

          {/* Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px] transition-all duration-500"
            style={{
              width: 140,
              height: 140,
              backgroundColor: project.accentColor,
              opacity: hovered ? 0.35 : 0.15,
              transform: hovered
                ? "translate(-50%, -50%) scale(1.4)"
                : "translate(-50%, -50%) scale(1)",
            }}
          />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className="text-[10px] tracking-wide uppercase bg-white/80 backdrop-blur-sm text-foreground/60 border-0 rounded-full font-normal px-2.5"
            >
              {project.category}
            </Badge>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
            <span
              className="text-xs tracking-widest uppercase font-medium"
              style={{ color: project.accentColor }}
            >
              View Case Study →
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex justify-between items-start px-1">
          <div>
            <h3 className="text-[15px] font-medium text-foreground group-hover:text-foreground/60 transition-colors duration-150 mb-1">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[12px] text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="text-[12px] text-muted-foreground shrink-0 ml-3 mt-0.5">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function GridCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="block no-underline group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/30" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px] transition-all duration-500"
            style={{
              width: 100,
              height: 100,
              backgroundColor: project.accentColor,
              opacity: hovered ? 0.35 : 0.15,
            }}
          />
          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className="text-[10px] tracking-wide uppercase bg-white/80 backdrop-blur-sm text-foreground/60 border-0 rounded-full font-normal px-2.5"
            >
              {project.category}
            </Badge>
          </div>
          <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: project.accentColor }}>
              View →
            </span>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[14px] font-medium text-foreground group-hover:text-foreground/60 transition-colors duration-150 mb-1">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[11px] text-muted-foreground">{tag}</span>
              ))}
            </div>
          </div>
          <span className="text-[11px] text-muted-foreground shrink-0 ml-2">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [mode, setMode] = useState<"scroll" | "grid">("scroll");
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative">
      {/* Section header */}
      <div className="px-8 mb-8 flex items-center justify-between max-w-[1200px] mx-auto">
        <h2 className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground font-normal">
          Selected Work
        </h2>
        <span className="text-[11px] text-muted-foreground">{projects.length} projects</span>
      </div>

      {mode === "scroll" ? (
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 px-8"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            {projects.map((project, i) => (
              <CarouselCard key={project.id} project={project} index={i} />
            ))}
            {/* Trailing spacer */}
            <div className="shrink-0 w-4" />
          </div>
        </div>
      ) : (
        <div className="px-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {projects.map((project, i) => (
            <GridCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}

      {/* Floating toggle */}
      <div className="flex justify-center mt-8">
        <div className="inline-flex items-center bg-foreground rounded-full p-1 gap-0.5">
          <button
            onClick={() => setMode("scroll")}
            className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 ${
              mode === "scroll"
                ? "bg-background text-foreground"
                : "text-background/60 hover:text-background"
            }`}
          >
            Scroll
          </button>
          <button
            onClick={() => setMode("grid")}
            className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 ${
              mode === "grid"
                ? "bg-background text-foreground"
                : "text-background/60 hover:text-background"
            }`}
          >
            Grid
          </button>
        </div>
      </div>
    </section>
  );
}
