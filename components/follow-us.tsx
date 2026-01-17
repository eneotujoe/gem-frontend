import Link from "next/link"
import {InstagramIcon, FacebookIcon, YoutubeIcon} from "@/components/icons"

import { siteConfig } from '../app/config/site'


export default function FollowUs() {
  return (
    <section className='grid md:grid-cols-2 grid-cols-1'>
      <div className='flex flex-col justify-evenly items-center h-[500px] gap-1 py-10 px-3'>

        <Link href={siteConfig.socialLinks.facebook} className='flex justify-around w-full py-5 bg-gray-600 hover:bg-gray-600/50 capitalize'>
          Facebook
          <FacebookIcon size={20} />
        </Link>

        <Link href={siteConfig.socialLinks.youtube} className='flex justify-around w-full py-5 bg-gray-600 hover:bg-gray-600/50 capitalize'>
          Youtube
          <YoutubeIcon size={20} />
        </Link>

        <Link href={siteConfig.socialLinks.instagram} className='flex justify-around w-full py-5 bg-gray-600 hover:bg-gray-600/50 capitalize'>
          Instagram
          <InstagramIcon size={20} />
        </Link>

      </div>

      <div className='flex justify-center items-center text-xl font-black bg-slate-700 sm:py-0 py-10'>Follow Us</div>
    </section>
    
  )
}

