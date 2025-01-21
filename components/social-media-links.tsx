import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaXTwitter, FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa6"

import { siteConfig } from '../app/config/site'


export default function SocialMediaLinks() {
  return (
    <div>
      <div className="grid grid-flow-col gap-2 ">
        <Button asChild>
          <Link href={siteConfig.socialLinks.x} className="bg-primary-foreground hover:bg-slate-700">
            <FaXTwitter size={20} className="text-primary" />
          </Link>
        </Button>

        <Button asChild>
          <Link href={siteConfig.socialLinks.facebook} className="bg-primary-foreground hover:bg-slate-700">
            <FaFacebookF size={20} className="text-primary" />
          </Link>
        </Button>

        <Button asChild>
          <Link href={siteConfig.socialLinks.tiktok} className="bg-primary-foreground hover:bg-slate-700">
            <FaTiktok size={20} className="text-primary" />
          </Link>
        </Button>

        <Button asChild>
          <Link href={siteConfig.socialLinks.instagram} className="bg-primary-foreground hover:bg-slate-700">
            <FaInstagram size={20} className="text-primary" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

