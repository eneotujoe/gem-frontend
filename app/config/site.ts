export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'God\'s Empire Ministries',
  description: 'Pastor Fortune Ministries',
  BASE_URL: 'https://gemhog.org',
  share_image_url: 'https://res.cloudinary.com/reinforcedai/image/upload/v1739047761/gem/tjrevlh9meu0nuwdyrwd.png',
  logo_url: 'https://res.cloudinary.com/reinforcedai/image/upload/v1739047761/gem/tjrevlh9meu0nuwdyrwd.png',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Media',
      href: '/media',
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
    facebook: 'https://web.facebook.com/',
    instagram: 'https://instagram.com/',
    x: 'https://x.com/',
    youtube: 'https://www.youtube.com/',
  },
}
