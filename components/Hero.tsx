"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 32px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(200,169,110,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Year badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: "absolute",
          top: "112px",
          right: "32px",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#5A5A5A",
        }}
      >
        ©2026
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          position: "absolute",
          top: "130px",
          left: "32px",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#5A5A5A",
        }}
      >
        Los Angeles, CA
      </motion.div>

      {/* Main heading */}
      <div style={{ maxWidth: "1400px", width: "100%" }}>
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(64px, 12vw, 180px)",
            fontWeight: 500,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            color: "#EDEBE5",
            margin: "0 0 24px",
          }}
        >
          Ariana
          <br />
          <em style={{ fontStyle: "italic", color: "#C8A96E" }}>Davis</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: "clamp(14px, 1.8vw, 18px)",
              fontWeight: 300,
              color: "#5A5A5A",
              maxWidth: "480px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Senior product designer with 8+ years focused on complex,
            high-scale product. Experience at Apple and Google.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#5A5A5A",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            <span>Scroll</span>
            <svg width="32" height="1" viewBox="0 0 32 1" fill="none">
              <line x1="0" y1="0.5" x2="32" y2="0.5" stroke="#5A5A5A" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
