"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
// import { useScroll, useMotionValueEvent } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
// import DrawerIcon from './drawer'
import { siteConfig } from '../app/config/site'
import { cn } from '@/lib/utils'


const NavLink = ({ children, href, ...props }: { href: string, children: string }) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <NavigationMenuLink asChild active={isActive}>
      <Link href={href} className={cn("no-underline text-xs font-bold hover:text-slate-400 p-3", isActive ? " bg-gray-300 decoration-4" : "")} {...props}>
        { children }
      </Link>
    </NavigationMenuLink>
  )
}


export function Navbar() {
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {siteConfig.mainNav.map((navItem, index) => (
          <NavigationMenuItem key={index}>
              <NavLink href={navItem.href}>
                { navItem.title }
              </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}


export default function Header() {
  const pathname = usePathname()
  const home = pathname === '/'

  return (
    <header className="sticky w-full top-0 z-10">
      <nav className='flex'>
        <div className="flex justify-between items-center min-h-10 w-full  bg-red-600 left-0 px-5 z-10">
          <div className="uppercase font-bold">{ siteConfig.name }</div>

          <div className="md:flex uppercase">
          {/* <div className="md:flex hidden uppercase"> */}
            <Navbar />
          </div>

          {/* <div className='items-center md:flex hidden'>
            <ModeToggle />
          </div>

          <div className='flex items-center md:hidden'>
            <DrawerIcon />
          </div> */}
        </div>
      </nav>
    </header>
  )
}
