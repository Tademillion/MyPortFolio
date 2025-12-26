"use client"

import { Github, Linkedin, Instagram, Send } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: Send, label: "Telegram", href: "#", color: "hover:text-blue-400" },
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-lg leading-tight text-foreground">Tadde</span>
                <span className="font-playfair font-bold text-sm leading-tight bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Million
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-3 bg-muted hover:bg-cyan-500/20 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Tadde Million. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
