import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import AboutWithSkills from "@/components/About/AboutWithSkill";
import PageLayout from "@/components/ParentComponents/PageLayout";
import CV from "@/components/config/CV";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <AboutWithSkills />
      <Projects />
      <CV />
    </PageLayout>
  );
}
