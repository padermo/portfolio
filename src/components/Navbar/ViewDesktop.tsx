'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link';
import SwitchTheme from '../config/SwitchTheme';
import Lang from '../Lang/Lang';

export default function ViewDesktop(){
  const t = useTranslations('Nav');
  return(
    <nav className='w-full h-16 absolute top-0 items-center justify-between bg-transparent px-4 md:px-8 lg:px-10 hidden lg:flex'>
      <picture></picture>

      <div className='flex items-center gap-4 text-[#222] dark:text-white'>
        <Link href={''} className='font-light transition-all duration-300 ease-in-out hover:font-medium'>{t('about')}</Link>
        <Link href={''} className='font-light transition-all duration-300 ease-in-out hover:font-medium'>{t('projects')}</Link>
        <Link href={''} className='font-light transition-all duration-300 ease-in-out hover:font-medium'>{t('contact')}</Link>
        <SwitchTheme/>
        <Lang/>
      </div>
    </nav>
  )
}