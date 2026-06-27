"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <div className="relative">
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

      <div className="flex flex-col gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="pl-7 relative"
          >
            {/* Node — solid for current role, hollow ring for past */}
            <div
              className={cn(
                "absolute left-[-3.5px] top-[6px] w-[7px] h-[7px] rounded-full",
                i === 0
                  ? "bg-foreground"
                  : "bg-background border border-muted-foreground/30"
              )}
            />

            <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
              <div>
                <h3 className="text-[15px] font-semibold text-foreground tracking-tight leading-snug">
                  {item.company}
                </h3>
                <p className="text-[13px] text-muted-foreground mt-0.5">{item.role}</p>
              </div>
              <div className="text-right shrink-0 pt-0.5">
                <p className="text-[12px] text-muted-foreground tabular-nums">{item.period}</p>
                <p className="text-[11px] text-muted-foreground/45 mt-0.5">{item.location}</p>
              </div>
            </div>

            <p className="text-[13px] text-foreground/60 leading-[1.75] max-w-[460px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
