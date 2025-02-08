import React from 'react'
import type { Metadata } from "next"

import PrayerForm from '../../components/prayer-form'

export const metadata: Metadata = {
  title: "God\'s Empire Ministries - Prayer",
  description: "Pastor Fortune Ministries",
}

export default function PrayerPage() {

  return (
    <section className="">
      <h3 className="text-center text-2xl font-black">Prayer Request Page</h3>
      {/* <PrayerForm /> */}
    </section>
  )
}
