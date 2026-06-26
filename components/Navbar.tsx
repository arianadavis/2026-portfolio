"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(12,12,12,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1E1E1E" : "1px solid transparent",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: "18px",
          fontWeight: 600,
          color: "#EDEBE5",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        AD
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color:
                pathname === link.href ? "#EDEBE5" : "#5A5A5A",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
