import Hero from "@/components/Hero";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="pt-14">
      <Hero />
      <ScrollingMarquee />
      <ProjectCarousel projects={projects} />
    </div>
  );
}
