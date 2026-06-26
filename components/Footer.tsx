"use client";

import { socials } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-8 py-10 mt-24">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-6">
        <div className="flex gap-5 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-[12px] text-muted-foreground hover:text-foreground no-underline transition-colors duration-150"
            >
              {social.name}
            </a>
          ))}
        </div>

        <span className="text-[12px] text-muted-foreground">
          Ariana Davis ©{year}
        </span>
      </div>
    </footer>
  );
}
