"use client";

import { motion } from "framer-motion";
import { socials } from "@/lib/data";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "calc(100vh - 80px)" }}>
      <section style={{ padding: "0 32px 120px", maxWidth: "1400px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderTop: "1px solid #1E1E1E",
            paddingTop: "32px",
            marginBottom: "80px",
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
            Contact
          </span>
        </motion.div>

        <div style={{ maxWidth: "800px" }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(40px, 6vw, 88px)",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#EDEBE5",
              margin: "0 0 48px",
            }}
          >
            Let&apos;s
            <br />
            <em style={{ fontStyle: "italic", color: "#C8A96E" }}>work together</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#5A5A5A",
              maxWidth: "440px",
              margin: "0 0 80px",
              fontWeight: 300,
            }}
          >
            Open to select design leadership and advisory opportunities.
            The best place to reach me is email.
          </motion.p>

          {/* Primary CTA */}
          <motion.a
            href="mailto:hello@arianadavis.com"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "16px",
              color: "#EDEBE5",
              textDecoration: "none",
              borderBottom: "1px solid #C8A96E",
              paddingBottom: "4px",
              marginBottom: "80px",
              transition: "color 0.2s ease",
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontStyle: "italic",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C8A96E")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#EDEBE5")}
          >
            hello@arianadavis.com
            <span style={{ fontSize: "20px", fontStyle: "normal" }}>→</span>
          </motion.a>

          {/* Social links list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#5A5A5A",
                marginBottom: "24px",
              }}
            >
              Elsewhere
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {socials
                .filter((s) => !s.url.startsWith("mailto"))
                .map((social, i) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 0",
                      borderBottom: "1px solid #1E1E1E",
                      textDecoration: "none",
                      color: "#5A5A5A",
                      fontSize: "14px",
                      transition: "color 0.2s ease",
                      cursor: "pointer",
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
                    <span
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontWeight: 400,
                      }}
                    >
                      {social.name}
                    </span>
                    <span style={{ fontSize: "13px" }}>{social.handle} →</span>
                  </a>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
