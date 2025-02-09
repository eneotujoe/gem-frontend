import React from 'react'
import type { NextPage } from 'next'
import type { Metadata } from "next";

import YouTubeEmbed from '@/components/youtube-embed'
import { siteConfig } from './config/site'


export const metadata: Metadata = {
  title: "Home",
  description: `${siteConfig.description}`,
}

const HomePage: NextPage = () => {
  const videoId: string = "mn2hnkmZqTI"

  return (
    <section className="container mx-auto p-4">
      <h3 className="text-center text-4xl font-black">Live TV</h3>
      <YouTubeEmbed videoId={videoId} />
    </section>
  )
}

export default HomePage

