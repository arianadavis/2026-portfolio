import ProjectCard from "@/components/ProjectCard";
import { Separator } from "@/components/ui/separator";

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
    <section className="px-8 pt-20 pb-32 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-baseline mb-12">
        <Separator className="hidden" />
        <h2 className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground font-normal">
          Selected Work
        </h2>
        <span className="text-[11px] text-muted-foreground">
          {projects.length} Projects
        </span>
      </div>

      <Separator className="mb-12" />

      {/* Featured 2-col row */}
      {featured.length > 0 && (
        <div className="grid grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured />
          ))}
        </div>
      )}

      {/* Rest in 3-col grid */}
      <div className="grid grid-cols-3 gap-6">
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
