import React from 'react'
import type { NextPage } from 'next'
import type { Metadata } from "next"

import YouTubeEmbed from '@/components/youtube-embed'
import { siteConfig } from '../config/site'


export const metadata: Metadata = {
  title: "Live TV",
  description: `${siteConfig.description}`,
}

const MediaPage: NextPage = () => {
  const videoId: string = "J8RurmP4fn0"

  return (
    <section className="container mx-auto p-4">
      <h3 className="text-center text-2xl font-black">Live Streaming</h3>
      <YouTubeEmbed videoId={videoId} />
    </section>
  );
};

export default MediaPage;

