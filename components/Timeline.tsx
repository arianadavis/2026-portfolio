"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div style={{ position: "relative" }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "8px",
          bottom: "0",
          width: "1px",
          backgroundColor: "#1E1E1E",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              paddingLeft: "32px",
              position: "relative",
            }}
          >
            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "-4px",
                top: "8px",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: i === 0 ? "#C8A96E" : "#2A2A2A",
                border: "1px solid",
                borderColor: i === 0 ? "#C8A96E" : "#3A3A3A",
              }}
            />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#EDEBE5",
                    margin: "0 0 4px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.company}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#C8A96E",
                    margin: 0,
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.role}
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "12px", color: "#5A5A5A", margin: "0 0 2px", letterSpacing: "0.05em" }}>
                  {item.period}
                </p>
                <p style={{ fontSize: "12px", color: "#3A3A3A", margin: 0 }}>
                  {item.location}
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "#5A5A5A",
                lineHeight: 1.7,
                margin: "12px 0 0",
                maxWidth: "480px",
              }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
