import { siteConfig } from '../app/config/site'
import SocialMediaLinks from './social-media-links';

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 items-center min-h-96 bg-gray-100 p-10">
      <div className='flex md:justify-start justify-center'>
        <SocialMediaLinks />
      </div>
      <div className='flex md:justify-end justify-center'>
        <p>&copy; { new Date().getFullYear() } | { siteConfig.name }</p>
      </div>
    </footer>
  )
}
