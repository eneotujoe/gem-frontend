import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Header from '../components/header'
import Footer from '../components/footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "God\'s Empire Ministries",
  description: "Pastor Fortune Ministries",
  keywords: ["God\'s Empire Ministries", "Pastor Fortune Marcus Inwon", "GEM", "word of grace"],
  openGraph: {
    title: "God\'s Empire Ministries",
    description: "Pastor Fortune Ministries",
    url: "https://gemhog.org",
    siteName: "GEM",
    images: [
      {
        url: "https://res.cloudinary.com/reinforcedai/image/upload/v1739047761/gem/tjrevlh9meu0nuwdyrwd.png",
        width: 1200,
        height: 630,
        alt: "GEM image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "God\'s Empire Ministries",
    description: "Pastor Fortune Ministries",
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
          <main className='container mx-auto px-3 my-5'>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
