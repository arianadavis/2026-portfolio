import Hero from "@/components/Hero";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollingMarquee />
      <ProjectGrid projects={projects} />
    </>
  );
}
