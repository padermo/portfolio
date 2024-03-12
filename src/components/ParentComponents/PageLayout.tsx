import type { Children } from '@/types/generals'

export default function PageLayout({children}:Children){
  return (
    <section className='w-full min-h-dvh max-h-full px-4 md:px-8 lg:px-10'>
      {children}
    </section>
  )
}