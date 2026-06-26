"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.id === slug);

  if (!project) notFound();

  return (
    <div className="pt-28 px-8 pb-24 max-w-[1200px] mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <Link
          href="/"
          className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground no-underline inline-flex items-center gap-2 transition-colors duration-150"
        >
          ← Back to Work
        </Link>
        <Separator className="mt-6" />
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <span
          className="text-[12px] tracking-[0.1em] uppercase block mb-3 font-medium"
          style={{ color: project.accentColor }}
        >
          {project.category} — {project.year}
        </span>
        <h1 className="text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-[-0.03em] mb-6">
          <span className="font-extralight">{project.title.split(" ")[0]} </span>
          <span className="font-bold">{project.title.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="text-[15px] leading-[1.7] text-muted-foreground max-w-[560px]">
          {project.description}
        </p>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[16/7] rounded-2xl bg-card border border-border flex items-center justify-center mb-12 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 60% at 50% 50%, ${project.accentColor}15, transparent 70%)`,
          }}
        />
        <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground/40 relative z-10">
          Case Study Coming Soon
        </p>
      </motion.div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-[11px] tracking-[0.06em] uppercase text-muted-foreground border-border rounded-full font-normal px-3 py-1.5"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
