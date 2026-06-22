import Main from "@/components/Main";
import NavbarProjects from "@/components/Navbar/navbarProjects";
import Projects from "@/components/Projects";

export default function AllProjects() {

  return (
    <>
      <NavbarProjects />
      <Main>
        <Projects />
      </Main>
    </>
  );
}
