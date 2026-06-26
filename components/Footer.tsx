"use client";

import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-8 py-12 flex justify-between items-center flex-wrap gap-6">
      <div className="flex gap-6 flex-wrap">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground no-underline tracking-[0.05em] transition-colors duration-200"
          >
            {social.name}
          </a>
        ))}
      </div>

      <span className="font-display text-[13px] text-muted-foreground tracking-[-0.01em]">
        Ariana Davis ©2026
      </span>
    </footer>
  );
}
