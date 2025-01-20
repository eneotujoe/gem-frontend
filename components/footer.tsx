import React from 'react'
import { siteConfig } from '../app/config/site'
// import SocialMediaLinks from './social-media-links';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-10">
      <div className='pb-5'>
        {/* <SocialMediaLinks /> */}
      </div>
      <div>
        <p>&copy; { new Date().getFullYear() } | { siteConfig.name }</p>
      </div>
    </footer>
  )
}
