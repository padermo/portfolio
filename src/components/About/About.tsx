'use client'
import { useRef } from 'react';
import { useTranslations } from 'next-intl'
import { useInView } from 'framer-motion'

export default function About(){
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef, {once:false})
  const t = useTranslations('About');

  return(
    <article ref={aboutRef} style={{transform: isInView ? 'none' : 'translateX(-100%)', opacity: isInView ? 1 : 0, transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1)"}} className='w-full h-full flex flex-col justify-center items-center gap-6 overflow-hidden'>
      <h2 className='text-2xl text-[#CFB53B] tracking-widest font-semibold'>{t('title')}</h2>
      <p className='text-[#222] font-light font-serif tracking-wide text-base dark:text-white'>{t('description')}</p>
      <p className='text-[#222] font-light font-serif tracking-wide text-base dark:text-white'>{t('paragraph')}</p>
    </article>
  )
}