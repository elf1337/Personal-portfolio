import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div>
        <Link href="/" className='h-16 w-16 bg-orange-600 text-white flex items-center justify-center rounded-full text-2xl font-bold transform transition-transform duration-300 hover:scale-105'>AS</Link>
    </div>
  )
}
