"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import DrawerIcon from './drawer'
import { siteConfig } from '../app/config/site'
import { cn } from '@/lib/utils'


const NavLink = ({ children, href, ...props }: { href: string, children: string }) => {
  const pathname = usePathname()
  const isActive = href === pathname
  const [open, setOpen] = useState(false)


  return (
    <NavigationMenuLink asChild active={isActive}>
      <Link href={href} className={cn("no-underline text-xs font-bold hover:text-slate-400 p-3 mx-5", isActive ? " bg-gray-300 decoration-4" : "")} {...props}>
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/gem.png"
            alt="Your Logo"
            width={45}
            height={45}
            className="rounded-full"
          />
        </Link>

        <nav className='flex'>
          <div className="flex justify-between items-center w-full left-0 z-10">
            
            <div className="md:flex hidden">
              <Navbar />
            </div>

            <div className='flex items-center md:hidden'>
              <DrawerIcon />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
