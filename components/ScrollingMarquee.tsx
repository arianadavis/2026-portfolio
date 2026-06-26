import { marqueeItems } from "@/lib/data";

export default function ScrollingMarquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section className="border-y border-border py-3.5 overflow-hidden bg-background my-16">
      <div className="flex w-max" style={{ animation: "marquee 40s linear infinite" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 pr-5 text-[11px] tracking-[0.14em] uppercase text-muted-foreground whitespace-nowrap"
          >
            {item}
            <span className="text-[7px] text-foreground/20">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
