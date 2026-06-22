import { About } from "@/components/Banners/About";
import { Experience } from "@/components/Banners/Experience";
import { Header } from "@/components/Banners/Header";
import { Projects } from "@/components/Banners/Projects";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <Main>
        <Header />
        <Experience />
        <About />
        <Projects />
      </Main>
    </>
  );
}
