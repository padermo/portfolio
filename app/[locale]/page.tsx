import About from "@/features/about/About";
import Experience from "@/features/experience/Experience";
import Hero from "@/features/hero/Hero";
import Navbar from "@/features/navigation/Navbar";
import Projects from "@/features/projects/Projects";
import { PROJECTS } from "@/lib/constants/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full px-4 lg:px-0 m-auto mt-10 lg:mt-32 lg:w-3xl">
        <Hero />
        <Experience />
        <About />
        <Projects projects={PROJECTS.filter((project) => project.featured)} showMoreButton />
      </main>
    </>
  )
}
