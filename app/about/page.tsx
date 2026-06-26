"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import { experience, socials } from "@/lib/data";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "120px" }}>
      {/* Header */}
      <section style={{ padding: "0 32px 80px", maxWidth: "1400px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderTop: "1px solid #1E1E1E",
            paddingTop: "32px",
            marginBottom: "64px",
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
            About
          </span>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: Name + Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(48px, 6vw, 88px)",
                fontWeight: 500,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "#EDEBE5",
                margin: "0 0 40px",
              }}
            >
              Ariana
              <br />
              <em style={{ fontStyle: "italic", color: "#C8A96E" }}>Davis</em>
            </h1>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#EDEBE5",
                maxWidth: "480px",
                margin: "0 0 24px",
                fontWeight: 300,
              }}
            >
              Senior product designer with 8+ years focused on complex,
              high-scale product. Experience at Apple and Google. Specializes
              in translating ambiguous problems into clear, scalable solutions.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#5A5A5A",
                maxWidth: "480px",
                margin: "0 0 48px",
                fontWeight: 300,
              }}
            >
              Based in Los Angeles, I work at the intersection of design and
              systems thinking — crafting experiences that feel inevitable in
              hindsight. My process centers on deep problem understanding, rapid
              iteration, and rigorous attention to detail at every scale.
            </p>

            {/* Contacts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "13px",
                    color: "#5A5A5A",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid #1E1E1E",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#EDEBE5";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#5A5A5A";
                  }}
                >
                  <span style={{ letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "11px" }}>
                    {s.name}
                  </span>
                  <span style={{ fontSize: "13px" }}>{s.handle}</span>
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
            <h2
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#5A5A5A",
                fontWeight: 400,
                margin: "0 0 40px",
              }}
            >
              Experience
            </h2>

            <Timeline items={experience} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
