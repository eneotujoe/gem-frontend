export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'God\'s Empire Ministries',
  description: 'God\'s Empire Ministries',
  url: 'https://gemhog.org',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Live Stream',
      href: '/live',
    },
    {
      title: 'Prayer',
      href: '/prayer',
    },
    {
      title: 'Give',
      href: '/give',
    },
    {
      title: 'About',
      href: '/about',
    },
  ],
  socialLinks: {
    x: 'https://x.com/',
    tiktok: 'https://www.tiktok.com/',
    facebook: 'https://web.facebook.com/',
    instagram: 'https://instagram.com/',
  },
}
