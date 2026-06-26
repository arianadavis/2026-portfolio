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
      {/* Vertical rule */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

      <div className="flex flex-col gap-12">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="pl-7 relative"
          >
            {/* Dot */}
            <div
              className={cn(
                "absolute left-[-3.5px] top-[7px] w-[7px] h-[7px] rounded-full",
                i === 0 ? "bg-foreground" : "bg-border border border-border"
              )}
            />

            <div className="flex justify-between items-start mb-1.5 flex-wrap gap-2">
              <div>
                <h3 className="text-[15px] font-semibold text-foreground tracking-tight">
                  {item.company}
                </h3>
                <p className="text-[13px] text-muted-foreground mt-0.5">{item.role}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[12px] text-muted-foreground">{item.period}</p>
                <p className="text-[11px] text-border">{item.location}</p>
              </div>
            </div>

            <p className="text-[13px] text-muted-foreground leading-[1.7] mt-2 max-w-[440px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
