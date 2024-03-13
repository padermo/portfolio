'use client'
import { CldImage } from 'next-cloudinary'
import { useTranslations } from 'next-intl'
import Contact from '../Contact/Contact'
import ScrollDown from '../SVG/ScrollDown'

export default function Header(){
  const t = useTranslations('Header')
  return(
    <main className='w-full min-h-dvh max-h-full relative flex flex-col md:flex-row lg:flex-row gap-6 lg:gap-10 items-center justify-center bg-gray-100 px-4 md:px-8 lg:px-10 dark:bg-[#222]'>
      <CldImage src={'https://res.cloudinary.com/dultasdzm/image/upload/v1709752022/portfolio/perfil_iaqvcd.png'} alt='Fabio Estevez' loading='lazy' priority width={500} height={500} className='w-40 h-40 drop-shadow-xl md:w-56 md:h-56 lg:w-56 lg:h-56 object-cover rounded-full'/>
      <section className='w-full text-[#222] dark:text-white flex flex-col gap-2 lg:w-auto md:w-auto'>
        <h1 className='text-3xl font-bold'>{t('welcome')}</h1>
        <h2 className='text-wrap text-xl font-medium text-[#CFB53B]'>{t('rol')}</h2>
        <p className='text-wrap font-light font-serif tracking-wide'>{t('about')}</p>
        <Contact/>
      </section>
      <ScrollDown/>
    </main>
  )
}