import React from 'react'
import Link from 'next/link'
import { ThemeDropdownMenu } from '../Theme/Theme'


const Navbar = () => {
  return (
    <nav className="py-4 shadow-md">
        <div className="mx-auto w-[90%] flex items-center justify-between">
            <div className="">
                <Link href={'/'}>
                <span className="text-4xl font-bold">
                   BadgeForge<span className="font-bold">.</span>
                </span>
                </Link>
            </div>
            <div className="flex items-center">
                <Link className="mr-20 hover:font-bold cursor-pointer" href={'/about'}>
                    About
                </Link>
                <div className="">
                  <ThemeDropdownMenu/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar