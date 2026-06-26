import { marqueeItems } from "@/lib/data";

export default function ScrollingMarquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section className="border-y border-border py-5 overflow-hidden bg-background">
      <div className="flex w-max" style={{ animation: "marquee 40s linear infinite" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-6 pr-6 text-[12px] tracking-[0.12em] uppercase font-normal whitespace-nowrap ${
              i % 2 === 0 ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {item}
            <span className="text-primary text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
