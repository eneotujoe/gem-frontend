import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from 'next/navigation'

import { siteConfig } from '../app/config/site'


export default function DrawerIcon({ className }:any) {

  const pathname = usePathname()
  const home = pathname === '/'

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className={ className } />
        </SheetTrigger>

        <SheetContent className='bg-white'>
          <SheetHeader>
            <SheetTitle className='text-primary  border-b pb-5'>
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src="/gem.png"
                  alt="Your Logo"
                  width={50}
                  height={50}
                  className="mr-2"
                />
                {/* <span className="text-white font-bold text-xl">{ siteConfig.name }</span> */}
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-4">
            {siteConfig.mainNav.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                className={`px-4 py-3 text-base font-medium transition-colors rounded-md ${
                  pathname === navItem.href
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {navItem.title}
              </Link>
            ))}
          </div>

        </SheetContent>
      </Sheet>
    </div>
  )
}


