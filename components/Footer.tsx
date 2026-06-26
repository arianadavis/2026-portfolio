"use client";

import { primarySocials } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 sm:px-8 py-10 mt-24">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-6">
        <div className="flex items-center gap-1.5 flex-wrap">
          {primarySocials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>

        <span className="text-[12px] text-muted-foreground">
          © {year} Ariana Davis. All rights reserved
        </span>
      </div>
    </footer>
  );
}
