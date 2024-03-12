'use client'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import {motion, useScroll, useTransform, easeInOut } from 'framer-motion'
import { cava, sanatorio, printec } from './images'
import Project from './Project'

export default function Projects(){
  const t = useTranslations('Projects')
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target:projectsRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['45%', '-45%'], {ease: easeInOut})

  return(
    <section ref={projectsRef} className='h-[300dvh] relative bg-white dark:bg-[#222]'>
      <div className='sticky top-0 h-dvh w-full flex flex-col items-center justify-center gap-10 overflow-hidden'>
        <h2 className='text-2xl text-[#CFB53B] tracking-widest font-semibold'>{t('title')}</h2>
        <motion.div style={{x}} className='flex gap-10'>
          <Project title={t('sanatorio.title')} paragraph={t('sanatorio.paragraph')} images={sanatorio} technologies={t('sanatorio.technologies').split(' ')}/>
          <Project title={t('printec.title')} paragraph={t('printec.paragraph')} images={printec} technologies={t('printec.technologies').split(' ')}/>
          <Project title={t('cava.title')} paragraph={t('cava.paragraph')} images={cava} technologies={t('cava.technologies').split(' ')}/>
        </motion.div>
      </div>
    </section>
  )
}