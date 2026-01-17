import Link from "next/link"
import { Button } from "@/components/ui/button"
import {InstagramIcon, FacebookIcon, YoutubeIcon} from "@/components/icons"
import { siteConfig } from '../app/config/site'


export default function SocialMediaLinks() {
  return (
    <div>
      <div className="grid grid-flow-col gap-2 ">
        <Button variant="outline" asChild>
          <Link href={siteConfig.socialLinks.facebook} className="bg-primary-foreground">
            <FacebookIcon className="text-primary size-6" />
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href={siteConfig.socialLinks.youtube} className="bg-primary-foreground">
            <YoutubeIcon className="text-primary size-6" />
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href={siteConfig.socialLinks.instagram} className="bg-primary-foreground">
            <InstagramIcon className="text-primary size-6" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
