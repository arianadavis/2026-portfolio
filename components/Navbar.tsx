"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-14 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-[13px] font-bold tracking-[0.06em] uppercase text-foreground no-underline"
      >
        Ariana Davis
      </Link>

      {/* Center nav */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-[14px] no-underline transition-colors duration-150",
              pathname === link.href
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right: theme toggle + CTA */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a
          href="mailto:hello@arianadavis.com"
          className="inline-flex items-center h-8 px-4 rounded-full bg-foreground text-background text-[13px] font-medium no-underline hover:opacity-80 transition-opacity duration-150"
        >
          Contact me
        </a>
      </div>
    </nav>
  );
}
