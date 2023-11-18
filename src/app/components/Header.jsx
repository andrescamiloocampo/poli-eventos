import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='w-full bg-slate-900 flex justify-between items-center'>
        <h1 className='text-2xl text-white font-semibold p-4'>Poli-eventos</h1>
        <ul className='flex gap-3 p-3'>
            <Link href={'/'} className='text-white hover:underline cursor-pointer'>Home</Link>
            <Link href={'/eventos'} className='text-white hover:underline cursor-pointer'>Eventos</Link>
            <Link href={'/registro'} className='text-white hover:underline cursor-pointer'>Register</Link>
            <Link href={'/login'} className='text-white hover:underline cursor-pointer'>Login</Link>
        </ul>
    </header>
  )
}

export default Header