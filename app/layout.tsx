import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Header from '../components/header'
import Footer from '../components/footer'
import { siteConfig } from './config/site'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name}`,
  },
  description: `${siteConfig.description}`,
  keywords: ["God\'s Empire Ministries", "Pastor Fortune Marcus Inwon", "GEM", "word of grace"],
  openGraph: {
    title: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    url: `${siteConfig.BASE_URL}`,
    siteName: "GEM",
    images: [
      {
        url: "https://res.cloudinary.com/reinforcedai/image/upload/v1739047761/gem/tjrevlh9meu0nuwdyrwd.png",
        width: 1200,
        height: 630,
        alt: "GEM share image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    images: ["https://res.cloudinary.com/reinforcedai/image/upload/v1739047761/gem/tjrevlh9meu0nuwdyrwd.png"],
  },
};


export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <head />
      <body>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
