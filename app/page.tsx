import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Play, Heart, Users, BookOpen, Calendar, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl uppercase md:text-7xl font-black mb-6 tracking-tight text-transparent [-webkit-text-stroke:1px_white]">
            God's Empire Ministries
          </h1>
          <p className="text-xl md:text-2xl uppercase mb-10 text-white/50">
            The Home of Grace
          </p>
          <p className="text-xl italic mb-10 text-white/50">
            Join us in worship as we grow together in Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link href="/media">
                <Play className="mr-2 h-5 w-5" />
                Watch Live
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 bg-transparent hover:bg-white">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Times Banner */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Sunday Services: 9:00 AM & 11:00 AM</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">Wednesday Bible Study: 7:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Get Connected</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/media" className="inline-flex items-center text-primary font-medium">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Play className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Live Streaming</h3>
                  <p className="text-muted-foreground mb-6">
                    Join us online for our live worship services every Sunday.
                  </p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Watch Now <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/prayer" className="inline-flex items-center text-primary font-medium">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Prayer Requests</h3>
                  <p className="text-muted-foreground mb-6">
                    Share your prayer needs with us. We believe in the power of prayer.
                  </p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Submit Request <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/give" className="inline-flex">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Give Online</h3>
                  <p className="text-muted-foreground mb-6">
                    Support our mission through giving and help us serve our community.
                  </p>
                  <div className="inline-flex items-center text-primary font-medium">
                    Donate Now <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-4xl font-medium italic leading-relaxed mb-6">
              "For where two or three gather in my name, there am I with them."
            </blockquote>
            <cite className="text-lg text-muted-foreground not-italic">— Matthew 18:20</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us This Sunday</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Experience the splendid atmosphere of praise and worship.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link href="/about">Visit Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
