'use client'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import {skills} from './skills'
import { useInView } from 'framer-motion'

export default function Skills(){
  const skillsRef = useRef(null)
  const isInView = useInView(skillsRef, {once:false})
  const t = useTranslations('Skills')

  return (
    <article ref={skillsRef} style={{transform: isInView ? 'none' : 'translateX(100%)', opacity: isInView ? 1 : 0, transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1)"}} className='w-full h-full flex flex-col justify-center items-center gap-6 overflow-hidden'>
      <h2 className='text-2xl text-[#CFB53B] tracking-widest font-semibold'>{t('title')}</h2>
      <div className='font-light text-lg tracking-wider flex flex-wrap gap-2 lg:gap-5 text-wrap text-[#222] justify-center dark:text-white'>
        {
          skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))
        }
      </div>
    </article>
  )
}