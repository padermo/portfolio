"use client"
import { Github, Link } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Heading, Paragraph, Button, Tooltip, Tag } from '@/components/UI';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import './style.css';

interface Project {
  title: string;
  section: string;
  paragraph: string;
  technologies: string[];
  images: string[];
  tooltips?: {
    demo: string;
    repository: string;
  };
  urls?: {
    demo: string;
    repository: string;
  }
}

export default function Projects() {
  const t = useTranslations('Projects');
  return (
    <section id="projects" className='py-16'>
      <div className='text-center mb-10'>
        <Heading as='h3' text={t('title')} />
      </div>
      <div className='grid gap-8'>
        {
          t.raw('content').map((project: Project, index: number) => (
            <div key={index} className='bg-cards shadow-lg grid grid-cols-1 lg:grid-cols-2 auto-rows-auto'>
              <Swiper
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className='flex-1'
              >
                {
                  project.images.map((image: string, index: number) => (
                    <SwiperSlide key={index}>
                      <Image src={`/assets/${image}.webp`} alt={image} width={1280} height={720} className='aspect-video' />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <div className='flex-1 flex flex-col justify-center p-4 lg:px-8 lg:py-4'>
                <header className='text-center mb-8'>
                  <Heading as='h4' text={project.title} />
                </header>
                <main>
                  <Paragraph text={project.paragraph} className='mb-4' />
                  <Heading as='h5' text={project.section} className='mb-2' />
                  <div className='flex flex-wrap items-center gap-2'>{project.technologies.map((techonology: string, index: number) => <Tag key={index} text={techonology} />)}</div>
                </main>
                <footer className='w-full flex justify-center gap-4 mt-4'>
                  {project.urls?.repository &&
                    <Tooltip variant={'bottom'} text={project.tooltips?.repository as string}>
                      <Button variant={'icon'} onClick={() => window.open(project.urls?.repository, '_blank')}>
                        <Github />
                      </Button>
                    </Tooltip>}
                  {project.urls?.demo &&
                    <Tooltip variant={'bottom'} text={project.tooltips?.demo as string}>
                      <Button variant={'icon'} onClick={() => window.open(project.urls?.demo, '_blank')}>
                        <Link />
                      </Button>
                    </Tooltip>}
                </footer>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
