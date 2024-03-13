'use client'
import { useEffect, useState } from 'react'
import { setCookie, getCookie } from 'cookies-next'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from 'antd'
import ConfigThemeAnt from '../ParentComponents/ConfigThemeAnt'

export default function Cookies(){
  const [statusConsent, setStatusConsent] = useState<boolean>(false);
  const t = useTranslations('Cookies');
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get('view');

  const handleCookieConsent = () => {
    setCookie('CookieConsent', 'accepted', {sameSite:'lax', httpOnly:true});
    setStatusConsent(true);
  }

  const handlePolicyCookies = () => {
    router.push(`/${locale}/policy-cookies?view=true`)
  }

  useEffect(() => {
    const consent = getCookie('CookieConsent')
    if (consent) setStatusConsent(true);
  }, [])

  if(!statusConsent){
    return(
      <div className={`w-full h-dvh fixed z-[1000] bg-neutral-900/50 top-0 left-0 ${viewPolicyCookies && 'hidden'}`}>
        <ConfigThemeAnt>
          <div className='bg-gray-100 fixed bottom-2 left-2 right-2 px-3 py-4 rounded-lg grid gap-4 shadow-lg lg:w-1/4 dark:bg-[#444]'>
            <label className='text-center font-medium text-lg text-[#222] dark:text-white'>{t('title')}</label>
            <label className='text-center font-light text-[#222] dark:text-white'>{t('text')}</label>
            <div className='flex flex-col gap-2'>
              <Button type='primary' className='bg-[#CFB53B]' onClick={handleCookieConsent}>{t('success')}</Button>
              <Button type='default' className='border-[#CFB53B]' onClick={handlePolicyCookies}>{t('notice')}</Button>
            </div>
          </div>
        </ConfigThemeAnt>
      </div>
    )
  }

  return null;
}