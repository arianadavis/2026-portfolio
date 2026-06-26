"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${project.id}`}
        style={{ display: "block", textDecoration: "none" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image/visual area */}
        <div
          style={{
            position: "relative",
            aspectRatio: featured ? "16/9" : "4/3",
            borderRadius: "4px",
            overflow: "hidden",
            marginBottom: "20px",
            background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          }}
        >
          {/* Dark overlay for depth */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(12,12,12,0) 0%, rgba(12,12,12,0.5) 100%)",
            }}
          />

          {/* Glow orb */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: hovered
                ? "translate(-50%, -50%) scale(1.5)"
                : "translate(-50%, -50%) scale(1)",
              width: featured ? "120px" : "80px",
              height: featured ? "120px" : "80px",
              borderRadius: "50%",
              backgroundColor: project.accentColor,
              opacity: hovered ? 0.25 : 0.1,
              filter: "blur(32px)",
              transition: "transform 0.5s ease, opacity 0.5s ease",
            }}
          />

          {/* Hover CTA */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "24px",
              background: "linear-gradient(to top, rgba(12,12,12,0.85) 0%, transparent 100%)",
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              opacity: hovered ? 1 : 0,
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: project.accentColor,
                fontWeight: 500,
              }}
            >
              View Case Study →
            </span>
          </div>

          {/* Category tag */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              padding: "4px 10px",
              borderRadius: "2px",
              backgroundColor: "rgba(12,12,12,0.65)",
              backdropFilter: "blur(8px)",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#5A5A5A",
              fontWeight: 500,
            }}
          >
            {project.category}
          </div>
        </div>

        {/* Text info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: featured ? "24px" : "18px",
                fontWeight: 500,
                color: hovered ? "#C8A96E" : "#EDEBE5",
                margin: "0 0 6px",
                letterSpacing: "-0.01em",
                transition: "color 0.2s ease",
              }}
            >
              {project.title}
            </h3>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "11px",
                    color: "#5A5A5A",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span
            style={{
              fontSize: "12px",
              color: "#5A5A5A",
              fontWeight: 300,
              flexShrink: 0,
              marginLeft: "16px",
              marginTop: "2px",
            }}
          >
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
