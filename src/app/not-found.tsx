'use client'
import Link from 'next/link'

export default function NotFound(){
  return (
    <html>
      <body className='w-full h-dvh flex flex-col justify-center items-center gap-4 bg-gray-100'>
        <h1 className='text-3xl font-bold'>Oops...</h1>
        <p>Page Not Found.</p>
        <Link href={'/'} className='underline'>Back To Home</Link>
      </body>
    </html>
  )
}