"use client";

import { motion } from "framer-motion";
import { socials, experience } from "@/lib/data";
import Timeline from "@/components/Timeline";

const status = [
  { label: "Currently", value: "Senior Product Designer at Apple" },
  { label: "Previously", value: "Google · Stocktwits · Golden State Warriors" },
  { label: "Education", value: "Add your school here" },
];

const interests = [
  "Fintech",
  "Design Systems",
  "iOS",
  "Music & Audio",
  "Wearables",
  "Type & Lettering",
  "Photography",
  "Running",
];

const aboutSocials = ["LinkedIn", "Email", "Figma"]
  .map((name) => socials.find((s) => s.name === name))
  .filter((s): s is (typeof socials)[number] => Boolean(s));

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const sectionLabel = "text-[11px] tracking-[0.12em] uppercase text-muted-foreground";

export default function AboutPage() {
  return (
    <div className="pt-28 px-5 sm:px-8 pb-28 max-w-[640px] mx-auto">

      {/* Role · location label */}
      <motion.p
        {...fadeUp}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center text-[12px] sm:text-[13px] tracking-[0.22em] uppercase text-muted-foreground mb-12"
      >
        Senior Product Designer &nbsp;·&nbsp; Los Angeles, CA
      </motion.p>

      {/* Portrait — polaroid frame */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center"
      >
        <div className="relative bg-white p-3 pb-12 rounded-[2px] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
          <span className="absolute left-1/2 top-[18px] z-10 -translate-x-1/2 w-16 h-3 bg-black/10 rotate-[-1deg]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait.jpg"
            alt="Ariana Davis"
            className="w-[280px] sm:w-[320px] aspect-[4/5] object-cover object-top grayscale"
          />
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.h1
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="text-center text-[clamp(22px,3.4vw,30px)] leading-[1.35] tracking-[-0.02em] font-light text-foreground mt-12 mb-20"
      >
        Using design to turn ambiguity into clarity
        <br className="hidden sm:block" /> through products that just work.
      </motion.h1>

      {/* About narrative */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <p className="text-[16px] leading-[1.85] text-foreground/85">
          I&apos;ve spent the last 8+ years learning that the hardest part of
          design isn&apos;t the pixels — it&apos;s the listening. The best work
          comes from sitting with ambiguity long enough to understand what
          people actually need, then making it feel obvious.
        </p>
        <p className="text-[16px] leading-[1.85] text-foreground/85">
          That instinct has carried me through high-scale products at Apple and
          Google and Stocktwits, where the constraints are real and the details
          matter. I design by listening first — then turning what I hear into
          something clear and useful.
        </p>
      </motion.div>

      {/* Status block */}
      <motion.dl
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 space-y-0"
      >
        {status.map((row) => (
          <div
            key={row.label}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-b border-border"
          >
            <dt className={`${sectionLabel} sm:w-28 shrink-0`}>{row.label}</dt>
            <dd className="text-[15px] text-foreground">{row.value}</dd>
          </div>
        ))}
      </motion.dl>

      {/* Work experience */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16"
      >
        <p className={`${sectionLabel} mb-8`}>Experience</p>
        <Timeline items={experience} />
      </motion.div>

      {/* Interests */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16"
      >
        <p className={`${sectionLabel} mb-5`}>Things I&apos;m into</p>
        <div className="flex flex-wrap gap-2.5">
          {interests.map((item) => (
            <span
              key={item}
              className="text-[13px] text-foreground/80 border border-border rounded-full px-3.5 py-1.5"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Personal note */}
      <motion.p
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 text-[16px] leading-[1.85] text-foreground/85"
      >
        Outside of work you&apos;ll find me chasing good coffee, long runs, and
        the occasional design rabbit hole. Balance keeps everything sharp.
      </motion.p>

      {/* Socials footer */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 pt-8 border-t border-border flex flex-col items-center gap-5 text-center"
      >
        <p className="text-[13px] text-muted-foreground">
          Los Angeles, CA · Senior Product Designer
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-3">
          {aboutSocials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.url}
                target={s.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                <Icon size={15} />
                <span className="text-[13px]">{s.name}</span>
              </a>
            );
          })}
        </div>

        <p className="text-[12px] text-muted-foreground/60">© 2026</p>
      </motion.div>

    </div>
  );
}
