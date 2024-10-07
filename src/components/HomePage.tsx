import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Bot, Shield, Gamepad2, Music, Zap, Star } from "lucide-react"

export default function LandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [requirements, setRequirements] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, requirements })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-500">DiscordBotCraft</div>
          <div className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Testimonials</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Custom Discord Bots Tailored to Your Needs</h1>
        <p className="text-xl mb-8 text-gray-400">Elevate your Discord server with personalized bots designed just for you</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Get Your Custom Bot <ChevronRight className="ml-2" />
        </Button>
      </section>

      {/* Bot Types Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Bot Types & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-12 h-12 mb-4 text-purple-500" />, title: "Moderation Bots", description: "Keep your server safe and organized with advanced moderation tools." },
              { icon: <Gamepad2 className="w-12 h-12 mb-4 text-purple-500" />, title: "Gaming Bots", description: "Enhance gameplay with stats tracking, matchmaking, and more." },
              { icon: <Music className="w-12 h-12 mb-4 text-purple-500" />, title: "Music Bots", description: "Stream high-quality music and manage playlists with ease." },
              { icon: <Zap className="w-12 h-12 mb-4 text-purple-500" />, title: "Utility Bots", description: "Streamline server management with custom commands and automations." },
            ].map((bot, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg text-center">
                {bot.icon}
                <h3 className="text-xl font-semibold mb-2">{bot.title}</h3>
                <p className="text-gray-400">{bot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex", role: "Server Owner", quote: "The custom moderation bot has made managing my community so much easier. Highly recommended!" },
              { name: "Sarah", role: "Gaming Clan Leader", quote: "Our gaming bot tracks stats and organizes tournaments flawlessly. It's a game-changer!" },
              { name: "Mike", role: "Music Enthusiast", quote: "The music bot created for our server has the best sound quality and features I've ever experienced." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="mb-4 text-gray-300">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Request Your Custom Bot</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-purple-500 focus:border-purple-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="requirements" className="block mb-2 text-sm font-medium">Bot Requirements</label>
              <Textarea
                id="requirements"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                required
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-purple-500 focus:border-purple-500"
                placeholder="Describe your ideal Discord bot..."
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Request a Quote <Bot className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 DiscordBotCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}