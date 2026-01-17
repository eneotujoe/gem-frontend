import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Globe, BookOpen, Users } from "lucide-react";

export default function GivePage() {
  const impactAreas = [
    {
      icon: Home,
      title: "Local Outreach",
      description: "Food pantry, homeless ministry, and community support programs"
    },
    {
      icon: Globe,
      title: "Global Missions",
      description: "Supporting missionaries and church plants around the world"
    },
    {
      icon: BookOpen,
      title: "Discipleship",
      description: "Bible studies, small groups, and spiritual growth resources"
    },
    {
      icon: Users,
      title: "Youth & Children",
      description: "Programs and activities for the next generation of believers"
    }
  ];

  const bankAccounts = {
    naira: [
      { name: "Zenith Bank", number: "xxx xxx xxx", account: "God's Empire Ministries" },
      { name: "Access Bank", number: "xxx xxx xxx", account: "God's Empire Ministries" }
    ],
    dollar: [
      { name: "JPMorgan Chase", number: "xxx xxx xxx", account: "God's Empire Ministries" },
      { name: "Bank of America", number: "xxx xxx xxx", account: "God's Empire Ministries" }
    ],
    pounds: [
      { name: "Lloyds Bank", number: "xxx xxx xxx", account: "God's Empire Ministries" },
      { name: "Barclays Bank", number: "xxx xxx xxx", account: "God's Empire Ministries" }
    ]
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl md:text-2xl text-white/50">
            Your generosity helps us spread the gospel of Jesus Christ and change lives.
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tithe, Offering or Donation</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for your faithfulness and generosity. We are praying for God's abundant blessings upon you.
          </p>
          
          <Tabs defaultValue="naira" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="naira">Naira (NGN)</TabsTrigger>
              <TabsTrigger value="dollar">Dollar (USD)</TabsTrigger>
              <TabsTrigger value="pounds">Pounds (GBP)</TabsTrigger>
            </TabsList>
            
            {Object.entries(bankAccounts).map(([currency, banks]) => (
              <TabsContent key={currency} value={currency} className="mt-6">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg space-y-4">
                  {banks.map((bank, index) => (
                    <div key={index} className="bg-white dark:bg-slate-950 p-4 rounded-md shadow-sm">
                      <p className="font-semibold text-lg">{bank.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">Account: {bank.number}</p>
                      <p className="text-sm text-muted-foreground mt-1">Name: {bank.account}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Your Impact</h2>
          <p className="text-center text-muted-foreground mb-12">
            See how your generosity makes a difference
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium italic leading-relaxed mb-6">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under
              compulsion, for God loves a cheerful giver."
            </blockquote>
            <cite className="text-lg text-muted-foreground not-italic">— 2 Corinthians 9:7</cite>
          </div>
        </div>
      </section>
    </div>
  );
}
