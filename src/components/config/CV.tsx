'use client'
import { FloatButton } from 'antd'
import ConfigThemeAnt from '../ParentComponents/ConfigThemeAnt'
import { FileTextOutlined } from '@ant-design/icons'
import { viewCV } from '@/utils/functions'
import { useSearchParams } from 'next/navigation';

export default function CV(){
  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get('view')
  return(
    <ConfigThemeAnt>
      <FloatButton
        shape='circle'
        type='primary'
        style={{right: 20, bottom: 20}}
        tooltip='CV'
        className={`${viewPolicyCookies && 'hidden'}`}
        icon={<FileTextOutlined className='text-[#222] dark:text-white'/>}
        onClick={viewCV}
      />
    </ConfigThemeAnt>
  )
}