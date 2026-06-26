"use client";

import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1E1E1E",
        padding: "48px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "24px",
      }}
    >
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              fontSize: "12px",
              color: "#5A5A5A",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#EDEBE5")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#5A5A5A")}
          >
            {social.name}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <span
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "13px",
            color: "#5A5A5A",
            letterSpacing: "-0.01em",
          }}
        >
          Ariana Davis ©2026
        </span>
      </div>
    </footer>
  );
}
