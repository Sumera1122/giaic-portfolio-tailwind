"use client"
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Header = () => {
  return (
    <header className=' w-full h-14 flex  sticky justify-between items-end text-white'>
        {/* left side */}
        <div className='md:ml-[60px]'>
        <h1 className='text-3xl font-bold  lg:ml-[80px]  hover:text-lime-400 hover:cursor-pointer md:ml-[60px] ml-8 '>Sumera</h1>
        </div>
        <ul className='hidden md:block font-bold lg:mr-[0px] lg:ml-[900px] '>
            <li className='space-x-5 '> 
                <Link href='/'className='hover:text-lime-400'>Home</Link>
                <Link href='/about'className='hover:text-lime-400'>About</Link>
                <Link href='/projects' className='hover:text-lime-400'>Projects</Link>
                <Link href='/contact' className='hover:text-lime-400'>Contact</Link>
                <button className='bg-lime-400 hover:bg-green-500 hover:text-black hover:rounded-[60px] text-white py-2 px-4 rounded-[60px] font-bold '><a href="/my pdf cv (11).pdf" download>Download Cv</a></button>
            </li>
        </ul>
        <Sheet>
  <SheetTrigger><GiHamburgerMenu  className='md:hidden text-2xl font-extrabold mr-8   '/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Port <span className='text-green-500'>folio</span></SheetTitle>
    </SheetHeader>
    <ul>
            <li className='flex flex-col justify-center space-y-4 '> 
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
                <button className='bg-gray-800 hover:bg-green-500 text-white py-2 px-4 rounded-lg font-bold pr-4'> <a href="/my pdf cv (11).pdf" download>Download Cv</a></button>
            </li>
        </ul>


  </SheetContent>
</Sheet>













    </header>
  )
}

export default Header
