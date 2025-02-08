import React from 'react'
import type { NextPage } from 'next'
import type { Metadata } from "next";

import YouTubeEmbed from '@/components/youtube-embed'

export const metadata: Metadata = {
  title: "God\'s Empire Ministries - Home",
  description: "Pastor Fortune Ministries",
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

