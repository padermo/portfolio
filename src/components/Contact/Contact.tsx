'use client'
import {GithubFilled, LinkedinFilled, MailFilled} from '@ant-design/icons'
import { Tooltip } from 'antd'

export default function Contact(){
  return(
    <div className='flex items-center gap-2'>
      <Tooltip title='GitHub' placement='bottom'>
        <button className='rounded-full flex items-center p-2 text-xl transition-colors duration-300 ease-in-out text-[#222] dark:text-white hover:bg-[#e7e7e7] dark:hover:bg-[#555] hover:shadow-lg hover:text-[#CFB53B]'>
          <GithubFilled/>
        </button>
      </Tooltip>
      <Tooltip title='LinkedIn' placement='bottom'>
        <button className='rounded-full flex items-center p-2 text-xl transition-colors duration-300 ease-in-out text-[#222] dark:text-white hover:bg-[#e7e7e7] dark:hover:bg-[#555] hover:shadow-lg hover:text-[#CFB53B]'>
          <LinkedinFilled/>
        </button>
      </Tooltip>
      <Tooltip title='Email' placement='bottom'>
        <button className='rounded-full flex items-center p-2 text-xl transition-colors duration-300 ease-in-out text-[#222] dark:text-white hover:bg-[#e7e7e7] dark:hover:bg-[#555] hover:shadow-lg hover:text-[#CFB53B]'>
          <MailFilled/>
        </button>
      </Tooltip>
    </div>
  )
}