import Header from '@/components/Header/Header';
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Footer/Footer';
import AboutWithSkills from '@/components/About/AboutWithSkill';

export default function Home() {
  return (
    <>
      <Header/>
      <AboutWithSkills/>
      <Projects/>
      <Footer/>
    </>
  );
}
