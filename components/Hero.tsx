"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-8 pb-16 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(200,169,110,0.05)_0%,transparent_60%)] pointer-events-none" />

      {/* Year badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-28 right-8 text-[11px] tracking-[0.12em] uppercase text-muted-foreground"
      >
        ©2026
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-[130px] left-8 text-[11px] tracking-[0.12em] uppercase text-muted-foreground"
      >
        Los Angeles, CA
      </motion.div>

      {/* Main heading */}
      <div className="max-w-[1400px] w-full">
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium leading-[0.9] tracking-[-0.03em] text-foreground mb-6"
          style={{ fontSize: "clamp(64px, 12vw, 180px)" }}
        >
          Ariana
          <br />
          <em className="italic text-primary not-italic" style={{ fontStyle: "italic" }}>
            Davis
          </em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between gap-8 flex-wrap"
        >
          <p
            className="text-muted-foreground font-light leading-relaxed max-w-[480px] m-0"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}
          >
            Senior product designer with 8+ years focused on complex,
            high-scale product. Experience at Apple and Google.
          </p>

          <div className="flex items-center gap-2 text-muted-foreground text-[12px] tracking-[0.08em] uppercase shrink-0">
            <span>Scroll</span>
            <svg width="32" height="1" viewBox="0 0 32 1" fill="none">
              <line x1="0" y1="0.5" x2="32" y2="0.5" stroke="currentColor" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
