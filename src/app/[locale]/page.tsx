import { About } from "@/components/Banners/About";
import { Experience } from "@/components/Banners/Experience";
import { Header } from "@/components/Banners/Header";
import { Projects } from "@/components/Banners/Projects";

export default function Home() {

  return (
    <>
      <Header />
      <Experience />
      <About />
      <Projects />
    </>
  );
}
