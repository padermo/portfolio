'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link';
import SwitchTheme from '../config/SwitchTheme';
import Lang from '../Lang/Lang';
import { useSearchParams } from 'next/navigation';

export default function ViewDesktop(){
  const t = useTranslations('Nav');
  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get('view')
  return(
    <nav className={`w-full h-16 absolute top-0 z-10 items-center justify-end bg-transparent px-4 md:px-8 lg:px-10 hidden lg:flex ${viewPolicyCookies && 'lg:hidden'}`}>
      <div className='flex items-center gap-4 text-[#222] dark:text-white'>
        <Link href={'#about'} className='font-light transition-all duration-300 ease-in-out hover:font-medium'>{t('about')}</Link>
        <Link href={'#projects'} className='font-light transition-all duration-300 ease-in-out hover:font-medium'>{t('projects')}</Link>
        <Link href={'#contact'} className='font-light transition-all duration-300 ease-in-out hover:font-medium'>{t('contact')}</Link>
        <SwitchTheme/>
        <Lang/>
      </div>
    </nav>
  )
}