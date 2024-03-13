'use client'
import { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import ConfigThemeAnt from '../ParentComponents/ConfigThemeAnt';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/context/ThemeContext';
import Lang from '../Lang/Lang';
import Link from 'next/link';
import SwitchTheme from '../config/SwitchTheme';
import { useSearchParams } from 'next/navigation';

export default function ViewMobile(){
  const [isView, setIsView] = useState<boolean>(false);
  const { theme } = useTheme();
  const t = useTranslations('Nav');
  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get('view')

  const handleViewDrawer = () => {
    setIsView(!isView)
  }

  return (
    <ConfigThemeAnt>
      <nav className={`w-full h-16 z-10 flex items-center absolute top-0 px-4 md:px-8 lg:hidden ${viewPolicyCookies && 'hidden'}`}>
        <Button type='primary' onClick={handleViewDrawer} className='rounded-md flex items-center text-lg text-white bg-[#CFB53B] px-3 py-5'>
          <MenuOutlined/>
        </Button>

        <Drawer
          style={{background: theme === 'dark' ? '#333' : '#fff'}}
          width={200}
          className='text-[#222] dark:text-white text-xl'
          open={isView}
          closeIcon={<CloseOutlined className='text-[#222] dark:text-white'/>}
          onClose={handleViewDrawer}
          title={
            <div className='dark:text-white text-[#222]'>
              <label className='font-light text-lg'>{t('title')}</label>
            </div>
          }
          footer={
            <div className='flex justify-around items-center'>
              <SwitchTheme/>
              <Lang/>
            </div>
          }
        >
          <Link href={'#about'} onClick={handleViewDrawer} className='block tracking-wider hover:text-[#CFB53B] active:text-[#CFB53B]'>{t('about')}</Link>
          <Link href={'#projects'} onClick={handleViewDrawer} className='block tracking-wider hover:text-[#CFB53B] active:text-[#CFB53B]'>{t('projects')}</Link>
          <Link href={'#contact'} onClick={handleViewDrawer} className='block tracking-wider hover:text-[#CFB53B] active:text-[#CFB53B]'>{t('contact')}</Link>
        </Drawer>
      </nav>
    </ConfigThemeAnt>
  )
}