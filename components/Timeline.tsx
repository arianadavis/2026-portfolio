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
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

      <div className="flex flex-col gap-14">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="pl-8 relative"
          >
            {/* Dot */}
            <div
              className={cn(
                "absolute left-[-4px] top-2 w-2 h-2 rounded-full border",
                i === 0
                  ? "bg-primary border-primary"
                  : "bg-secondary border-border"
              )}
            />

            <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
              <div>
                <h3 className="font-display text-xl font-medium text-foreground tracking-[-0.01em] mb-1">
                  {item.company}
                </h3>
                <p className="text-sm text-primary font-normal tracking-[0.02em]">
                  {item.role}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-0.5 tracking-[0.05em]">
                  {item.period}
                </p>
                <p className="text-xs text-muted-foreground/50">{item.location}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-[1.7] mt-3 max-w-[480px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
