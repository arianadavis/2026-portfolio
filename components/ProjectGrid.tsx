import ProjectCard from "@/components/ProjectCard";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  featured: boolean;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      style={{
        padding: "80px 32px 120px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "48px",
          borderTop: "1px solid #1E1E1E",
          paddingTop: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#5A5A5A",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Selected Work
        </h2>
        <span style={{ fontSize: "11px", color: "#5A5A5A" }}>
          {projects.length} Projects
        </span>
      </div>

      {/* Featured row */}
      {featured.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured />
          ))}
        </div>
      )}

      {/* Rest in 3-col grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {rest.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={featured.length + i}
          />
        ))}
      </div>
    </section>
  );
}
