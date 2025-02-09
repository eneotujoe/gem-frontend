import React from 'react'
import type { Metadata } from "next"

import PrayerForm from '../../components/prayer-form'
import { siteConfig } from '../config/site'

export const metadata: Metadata = {
  title: "Prayer",
  description: `${siteConfig.description}`,
}

export default function PrayerPage() {

  return (
    <section className="">
      <h3 className="text-center text-2xl font-black">Prayer Request Page</h3>
      {/* <PrayerForm /> */}
    </section>
  )
}
