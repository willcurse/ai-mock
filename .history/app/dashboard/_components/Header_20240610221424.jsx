"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
    const path=usePathname()
    useEffect(()=>{
        console.log(path)
    })
  return (
    <div className='flex p-6 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'/logo.svg'} width={170} height={170} alt='logo'/>
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-[#6B8A7A] hover:font-bold transition-all cursor-pointer text-lg ${path=='/dashboard'&&'text-red-700 text-bold'}`}>Dashboard</li>
            <li className={`hover:text-[#6B8A7A]  hover:font-bold transition-all cursor-pointer text-lg ${path=='/dashboard/upgrade'&&'text-red-700 text-bold'}`}>Upgrade Plan??</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header