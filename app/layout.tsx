import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from '../components/header'
import Footer from '../components/footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
          <main className='container mx-auto px-3 my-5'>
            <Header />
            {children}
            <Footer />
          </main>
      </body>
    </html>
  )
}
