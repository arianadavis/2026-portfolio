"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <section style={{ padding: "0 32px 120px", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            borderTop: "1px solid #1E1E1E",
            paddingTop: "32px",
            marginBottom: "64px",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#5A5A5A",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.2s ease",
            }}
          >
            ← Back to Work
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "64px" }}
        >
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: project.accentColor,
              display: "block",
              marginBottom: "16px",
            }}
          >
            {project.category} — {project.year}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(40px, 6vw, 88px)",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#EDEBE5",
              margin: "0 0 32px",
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#5A5A5A",
              maxWidth: "600px",
              fontWeight: 300,
            }}
          >
            {project.description}
          </p>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            aspectRatio: "16/7",
            borderRadius: "4px",
            backgroundColor: "#141414",
            border: "1px solid #1E1E1E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse 50% 60% at 50% 50%, ${project.accentColor}18, transparent 70%)`,
            }}
          />
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#3A3A3A",
              position: "relative",
            }}
          >
            Case Study Coming Soon
          </p>
        </motion.div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "48px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "6px 14px",
                borderRadius: "2px",
                border: "1px solid #1E1E1E",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#5A5A5A",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
