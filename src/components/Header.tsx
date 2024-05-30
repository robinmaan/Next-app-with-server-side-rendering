"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLink = [
    {
        href:"/",
        label:'Home'
    },
    {
        href:"/posts",
        label:'Post'
    },
    {
        href:"/createpost",
        label:'Create Post'
    },

]
const Header = () => {
    const pathName = usePathname()
    console.log(pathName)
  return (
    <div className='flex justify-between px-20 pt-10'>
        <Link href="/"><Image src="/img.jpeg" height="80" width="80" alt="logo" className=''/></Link> 
        <nav className=''>
            <ul className='flex md:gap-8 gap-4 md:text-xl pt-10'>
                {navLink.map((link,index)=>(
                    <Link  key={index} className={`${pathName == link.href ? "text-zinc-900 font-bold" : "text-zinc-400" }`} href={link.href}>{link.label}</Link>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Header
