"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: "120px" }}>
      <section style={{ padding: "0 32px 120px", maxWidth: "1400px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderTop: "1px solid #1E1E1E",
            paddingTop: "32px",
            marginBottom: "64px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#5A5A5A",
              fontWeight: 400,
            }}
          >
            All Work
          </span>
          <span style={{ fontSize: "11px", color: "#5A5A5A" }}>
            {projects.length} Projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(40px, 5vw, 72px)",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "#EDEBE5",
            margin: "0 0 80px",
          }}
        >
          Selected
          <br />
          <em style={{ fontStyle: "italic", color: "#C8A96E" }}>Projects</em>
        </motion.h1>

        {/* Full grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px 24px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
