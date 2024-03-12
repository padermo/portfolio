'use client'
import { useTranslations } from 'next-intl'
import Form from '../Forms/Form'
import Contact from '../Contact/Contact'

export default function Footer(){
  const t = useTranslations('Footer')
  return(
    <footer className='flex flex-col-reverse items-center gap-6 bg-white dark:bg-[#222] px-4 py-10 md:px-8 lg:px-10 lg:flex-row'>
      <div className='flex flex-col gap-4 items-center w-full'>
        <h3 className='text-2xl text-[#CFB53B] tracking-widest font-semibold'>{t('social')}</h3>
        <Contact/>
        <p className='text-sm font-light tracking-wide text-[#222] dark:text-gray-200'>&copy; {t('reserved')}</p>
      </div>
      <div className='flex flex-col gap-4 items-center w-full'>
        <h2 className='text-2xl text-[#CFB53B] tracking-widest font-semibold'>{t('contact')}</h2>
        <Form/>
      </div>
    </footer>
  )
}