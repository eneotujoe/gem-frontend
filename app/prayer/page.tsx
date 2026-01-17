import { siteConfig } from '../config/site'
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { PrayerRequestForm } from "@/components/prayer-request-form"

export const metadata = {
  title: "Prayer Request",
  description: siteConfig.description,
}

const SCRIPTURE_VERSES = [
  {
    text: "Then He spoke a parable to them, that men always ought to pray and not lose heart.",
    reference: "Luke 18:1"
  },
  {
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6"
  },
  {
    text: "Rejoice always, pray without ceasing, in everything give thanks; for this is the will of God in Christ Jesus for you.",
    reference: "1 Thessalonians 5:16-18"
  }
]

export default function PrayerRequestPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
        
        {/* Animated Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Prayer And Counselling
          </h1>
          <p className="text-xl md:text-2xl text-white/50 drop-shadow-md">
            Share your burdens with us. Our prayer team is honored to lift up your needs before God.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Submit Your Prayer Request</h2>
              <p className="text-muted-foreground mb-8">
                We are dedicated to pray for you.
              </p>
              <PrayerRequestForm />
            </div>

            {/* Scripture Verses */}
            <div className="space-y-8">
              {SCRIPTURE_VERSES.map((verse, index) => (
                <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <blockquote className="border-l-4 border-purple-600 pl-6 py-2">
                      <p className="text-lg italic mb-2 text-gray-700">
                        &ldquo;{verse.text}&rdquo;
                      </p>
                      <cite className="text-sm text-gray-500 not-italic">
                        — {verse.reference}
                      </cite>
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg text-xl md:text-4xl font-black text-gray-800">
            <Heart className="size-8 md:size-12 text-red-500" aria-hidden="true" />
            We Are Praying For You
          </div>
        </div>
      </section>
    </div>
  )
}
