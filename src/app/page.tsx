import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Projects />
    </main>
  );
}
