import type { NextPage } from 'next'
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Calendar, Clock, Bell, Video, Users, Download } from "lucide-react"
import Link from "next/link"

import YouTubeEmbed from '@/components/youtube-embed'
import { siteConfig } from '../config/site'

export const metadata: Metadata = {
  title: "Live TV",
  description: siteConfig.description,
}

const SERMON_DATA = [
  {
    title: "Walking in Faith",
    speaker: "Pastor Fortune",
    date: "January 12, 2026",
    duration: "45 min",
  },
  {
    title: "The Power of Prayer",
    speaker: "Pastor Fortune",
    date: "January 5, 2026",
    duration: "38 min",
  },
  {
    title: "New Year, New Purpose",
    speaker: "Pastor Fortune",
    date: "December 29, 2025",
    duration: "42 min",
  },
]

const WATCH_OPTIONS = [
  {
    icon: Video,
    title: "On The Web",
    description: "Watch directly on our website. The stream will automatically appear during service times.",
  },
  {
    icon: "youtube",
    title: "YouTube",
    description: "Subscribe to our YouTube channel for live streams and past sermons.",
  },
  {
    icon: "facebook",
    title: "Facebook",
    description: "Follow us on Facebook to watch live and join the conversation.",
  },
]

const MediaPage: NextPage = () => {
  const videoId = "J8RurmP4fn0"

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-foreground">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            Live Every Sunday
          </div>
          
          <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6 text-balance">
            Watch Live
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-primary-foreground/80 text-pretty">
            Worship with us from any part of the world.
          </p>
        </div>

        {/* Video Player Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-2xl mb-5">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/75">
                <div className="w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center mb-6">
                  <Play className="h-12 w-12 text-white/55 ml-1" />
                </div>
                <h3 className="text-2xl text-white/55 font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">Sunday at 9:00 AM</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto p-4">
          <YouTubeEmbed videoId={videoId} />
        </div>
      </section>

      {/* How to Watch */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-sans text-4xl font-bold text-center mb-16">How to Watch</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {WATCH_OPTIONS.map((option) => (
              <Card key={option.title} className="text-center">
                <CardContent className="p-8">
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    {option.icon === "youtube" ? (
                      <svg className="size-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    ) : option.icon === "facebook" ? (
                      <svg className="size-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ) : (
                      <option.icon className="size-8 text-primary" />
                    )}
                  </div>
                  <h3 className="font-sans text-xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Sermons */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-sans text-4xl font-bold">Recent Sermons</h2>
            <Button variant="outline">
              View All
              <Download className="size-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERMON_DATA.map((sermon) => (
              <Card 
                key={sermon.title} 
                className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                    <div className="size-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="size-6 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-sans text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{sermon.speaker}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{sermon.date}</span>
                    <span>{sermon.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connection CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center text-primary-foreground">
          <Users className="size-8 mx-auto mb-6" />
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6">
            Join Our Online Community
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/90">
            Connect with other believers, share your thoughts during the service, and grow together in faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/prayer">Submit Prayer Request</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/give">Support Our Ministry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MediaPage
