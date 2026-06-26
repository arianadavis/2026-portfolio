"use client";

import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";
import { primarySocials } from "@/lib/data";
import { cn } from "@/lib/utils";

const CAL_URL = "https://cal.com/arianadavis/coffee-chat-30";

export default function FloatingMenu() {
  const [visible, setVisible] = useState(false);
  const [calOpen, setCalOpen] = useState(false);

  // Show once the viewer has scrolled ~85% of the page.
  useEffect(() => {
    const onScroll = () => {
      const scrolledBottom = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setVisible(total > 0 && scrolledBottom / total >= 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const closeCal = useCallback(() => setCalOpen(false), []);

  // Lock body scroll + close on Escape while the calendar overlay is open.
  useEffect(() => {
    if (!calOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [calOpen, closeCal]);

  return (
    <>
      {/* Floating pill — desktop only */}
      <div
        className={cn(
          "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ease-out",
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex items-center gap-1 rounded-full bg-[#0a0a0a] border border-white/10 p-1.5 pl-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          {primarySocials.map((social) => {
            const Icon = social.icon;
            const isMailto = social.url.startsWith("mailto");
            return (
              <a
                key={social.name}
                href={social.url}
                target={isMailto ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150"
              >
                <Icon size={16} />
              </a>
            );
          })}

          {/* Divider */}
          <span className="w-px h-5 bg-white/15 mx-1.5" />

          <button
            onClick={() => setCalOpen(true)}
            className="flex items-center h-9 px-5 rounded-full bg-white text-black text-[13px] font-medium hover:bg-white/90 transition-colors duration-150"
          >
            Book a call
          </button>
        </div>
      </div>

      {/* Calendar overlay */}
      {calOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Book a call"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeCal}
          />

          {/* Modal card */}
          <div className="relative w-full max-w-6xl h-[80vh] max-h-[720px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-4 h-12 border-b border-black/10 shrink-0">
              <span className="text-[13px] font-medium text-black">
                Book a call
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-black/50 hover:text-black transition-colors duration-150 no-underline"
                >
                  Open in new tab ↗
                </a>
                <button
                  onClick={closeCal}
                  aria-label="Close"
                  className="w-7 h-7 flex items-center justify-center rounded-full text-black/60 hover:text-black hover:bg-black/5 transition-colors duration-150"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <iframe
              src={CAL_URL}
              title="Book a call with Ariana Davis"
              className="flex-1 w-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
