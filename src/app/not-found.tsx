'use client'
import Link from 'next/link'

export default function NotFound(){
  return (
    <html>
      <body>
        <h1>Oops...</h1>
        <p>Page Not Found.</p>
        <Link href={'/'}>Back To Home</Link>
      </body>
    </html>
  )
}