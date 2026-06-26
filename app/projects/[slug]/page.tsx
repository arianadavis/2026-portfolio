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
    <div className="pt-[120px] min-h-screen">
      <section className="px-8 pb-32 max-w-[1400px] mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground no-underline inline-flex items-center gap-2 transition-colors duration-200"
          >
            ← Back to Work
          </Link>
          <Separator className="mt-8" />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span
            className="text-[12px] tracking-[0.1em] uppercase block mb-4 font-medium"
            style={{ color: project.accentColor }}
          >
            {project.category} — {project.year}
          </span>
          <h1
            className="font-display font-medium leading-[0.95] tracking-[-0.03em] text-foreground mb-8"
            style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
          >
            {project.title}
          </h1>
          <p className="text-lg leading-[1.7] text-muted-foreground max-w-[600px] font-light">
            {project.description}
          </p>
        </motion.div>

        {/* Hero placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/7] rounded-[4px] bg-card border border-border flex items-center justify-center mb-20 overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 50% 60% at 50% 50%, ${project.accentColor}18, transparent 70%)`,
            }}
          />
          <p className="text-[12px] tracking-[0.12em] uppercase text-muted-foreground/40 relative">
            Case Study Coming Soon
          </p>
        </motion.div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-[11px] tracking-[0.08em] uppercase text-muted-foreground border-border rounded-[2px] font-normal px-3 py-1.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
