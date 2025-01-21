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
  description: "Pastor Fortune",
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
