import NavbarProjects from "@/features/navigation/NavbarProjects";
import Projects from "@/features/projects/Projects";
import { PROJECTS } from "@/lib/constants/projects";

export default function ProjectsPage() {
  return (
    <>
      <NavbarProjects />
      <main className="w-full px-4 lg:px-0 m-auto lg:w-3xl">
        <Projects projects={PROJECTS} />
      </main>
    </>
  )
}
