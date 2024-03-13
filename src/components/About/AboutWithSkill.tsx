import About from './About'
import Skills from '../Skills/Skills'

export default function AboutWithSkills(){
  return(
    <section id='about' className='w-full min-h-dvh max-h-full bg-gray-100 flex flex-col gap-8 items-center justify-center overflow-hidden px-4 py-4 md:py-8 md:px-8 lg:px-10 lg:flex-row dark:bg-[#222]'>
      <About/>
      <Skills/>
    </section>
  )
}