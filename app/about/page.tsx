import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us",
  description: "A Ministry built on faith, hope, and love.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Love God",
      description: "We worship wholeheartedly and seek to know God more deeply."
    },
    {
      icon: Users,
      title: "Love People",
      description: "We welcome everyone with open arms and build authentic, caring relationships."
    },
    {
      icon: BookOpen,
      title: "Propagate the Gospel",
      description: "We are committed to spreading the Word of God to every corner of the world."
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl mb-4 font-bold text-gray-900">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-500">
            A ministry built on faith, hope, and love.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We began as a small group of believers gathering online with a shared vision: 
                to create a welcoming community where everyone could experience the transforming 
                love of Jesus Christ.
              </p>
            </div>

            <Card className="shadow-lg border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Feeding His Sheep</h3>
                <p className="text-gray-600">
                  Nourishing hearts and minds with the transformative Word of God.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600">
              We are committed to propagating the message of God's grace to the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="shadow-lg border-gray-200 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Connect with Us?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-indigo-50">
            We'd love to meet you and help you find your place in Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link href="/prayer">Share a Prayer Request</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg"
            >
              <Link href="/give">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
