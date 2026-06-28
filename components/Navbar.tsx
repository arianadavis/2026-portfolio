"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 h-14">
        {/* Logo */}
        <Link
          href="/"
          className="text-[13px] font-bold tracking-[0.06em] uppercase text-foreground no-underline"
        >
          Ariana Davis
        </Link>

        {/* Center nav — desktop only */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
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

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* CTA — hidden on the smallest screens */}
          <a
            href="mailto:hello@arianadavis.com"
            className="hidden sm:inline-flex items-center h-9 px-4.5 rounded-full bg-foreground text-background text-[13px] font-semibold no-underline hover:opacity-80 transition-opacity duration-150"
          >
            Say Hi 👋
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-foreground hover:bg-secondary transition-colors duration-150"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          menuOpen ? "max-h-96 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-5 pb-6 pt-2 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "py-3.5 text-[16px] no-underline transition-colors duration-150",
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Theme toggle row */}
          <div className="flex items-center justify-between py-3.5">
            <span className="text-[16px] text-foreground">Appearance</span>
            <ThemeToggle />
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 mt-6">
            <a
              href="mailto:hello@arianadavis.com"
              className="flex-1 inline-flex items-center justify-center h-14 rounded-full bg-foreground text-background text-[15px] font-medium no-underline"
            >
              Say Hi 👋
            </a>
            <a
              href="https://linkedin.com/in/arianamdavis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center h-14 rounded-full border border-border text-foreground text-[15px] font-medium no-underline"
            >
              LinkedIn&nbsp;↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
