"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="block no-underline group"
      >
        {/* Visual area */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[4px] mb-5",
            featured ? "aspect-video" : "aspect-[4/3]"
          )}
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50" />

          {/* Glow orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-25"
            style={{
              width: featured ? "120px" : "80px",
              height: featured ? "120px" : "80px",
              backgroundColor: project.accentColor,
            }}
          />

          {/* Hover CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/85 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span
              className="text-[12px] tracking-[0.1em] uppercase font-medium"
              style={{ color: project.accentColor }}
            >
              View Case Study →
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="text-[10px] tracking-[0.1em] uppercase bg-background/65 backdrop-blur-sm text-muted-foreground border-0 rounded-[2px]"
            >
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Text info */}
        <div className="flex justify-between items-start">
          <div>
            <h3
              className={cn(
                "font-display font-medium text-foreground tracking-[-0.01em] mb-1.5 transition-colors duration-200 group-hover:text-primary",
                featured ? "text-2xl" : "text-[18px]"
              )}
            >
              {project.title}
            </h3>
            <div className="flex gap-2 flex-wrap">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-muted-foreground tracking-[0.05em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="text-xs text-muted-foreground font-light shrink-0 ml-4 mt-0.5">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
