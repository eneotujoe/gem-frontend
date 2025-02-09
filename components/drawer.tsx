import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from 'next/navigation'

import { siteConfig } from '../app/config/site'


export default function DrawerIcon({ className }:any) {

  const pathname = usePathname()
  const home = pathname === '/'

  return (
    <div className='px-5'>
      <Sheet>
        <SheetTrigger>
          <HiOutlineMenuAlt3 className={ className } />
        </SheetTrigger>

        <SheetContent className='bg-white'>
          <SheetHeader>
            <SheetTitle className='text-primary'>
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

          <div className='mx-1'>
            {siteConfig.mainNav.map((navItem, index) => (
              <div key={index} className='my-1'>
                <Button asChild className='block font-extrabold'>
                  <Link href={navItem.href}>{ navItem.title }</Link>
                </Button>
              </div>
            ))}
          </div>

        </SheetContent>
      </Sheet>
    </div>
  )
}


