import { marqueeItems } from "@/lib/data";

export default function ScrollingMarquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section
      style={{
        borderTop: "1px solid #1E1E1E",
        borderBottom: "1px solid #1E1E1E",
        padding: "20px 0",
        overflow: "hidden",
        backgroundColor: "#0C0C0C",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 40s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "24px",
              paddingRight: "24px",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: i % 2 === 0 ? "#EDEBE5" : "#5A5A5A",
              whiteSpace: "nowrap",
              fontWeight: 400,
            }}
          >
            {item}
            <span style={{ color: "#C8A96E", fontSize: "8px" }}>◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
