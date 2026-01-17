import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {InstagramIcon, FacebookIcon, YoutubeIcon} from "@/components/icons"
import { siteConfig } from '../app/config/site'


export default function SocialMediaLinks() {
  return (
    <div>
      <div className="grid grid-flow-col gap-2 ">
        <Button variant="outline" asChild>
          <Link href={siteConfig.socialLinks.x} className="bg-primary-foreground">
            <FacebookIcon size={20} className="text-primary" />
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href={siteConfig.socialLinks.facebook} className="bg-primary-foreground">
            <YoutubeIcon size={20} className="text-primary" />
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href={siteConfig.socialLinks.instagram} className="bg-primary-foreground">
            <InstagramIcon size={20} className="text-primary" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

