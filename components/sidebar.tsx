"use client"

import type React from "react"
import {
  Menu,
  X,
  Moon,
  Sun,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Instagram, 
} from "lucide-react"

interface SidebarProps {
  isDark: boolean
  toggleDarkMode: () => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  activePage: string
  setActivePage: (page: string) => void
}

export default function Sidebar({
  isDark,
  toggleDarkMode,
  sidebarOpen,
  setSidebarOpen,
  activePage,
  setActivePage,
}: SidebarProps) {
  const navItems = [
    { label: "Home", id: "home", icon: Home },
    { label: "About", id: "about", icon: User },
    { label: "Skills", id: "skills", icon: Code },
    { label: "Projects", id: "projects", icon: Briefcase },
    { label: "Contact", id: "contact", icon: Mail },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Tademillion", color: "hover:text-cyan-500" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tade-million/", color: "hover:text-blue-500" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
   ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setActivePage(id)
    setSidebarOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-200"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border z-40 transition-all duration-500 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } flex flex-col`}
      >
        {/* Brand Section */}
        <div className="p-6 border-b border-sidebar-border">
          <a href="#" onClick={(e) => handleNavClick(e, "home")} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-lg leading-tight text-sidebar-foreground">Tadde</span>
              <span className="font-playfair font-bold text-lg leading-tight bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Million
              </span>
            </div>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.id
            return (
              <a
                key={item.label}
                href="#"
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/10"
                }`}
              >
                <Icon
                  size={18}
                  className={isActive ? "text-white" : "group-hover:text-cyan-500 transition-colors duration-200"}
                />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-sidebar-border space-y-4">
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 rounded-lg transition-colors duration-200"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span>{isDark ? "Light" : "Dark"}</span>
          </button>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-sidebar-foreground/50 px-2 py-1">Social Links</p>
            <div className="grid grid-cols-4 gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    target="_blank"
                    className={`p-2 bg-sidebar-accent/10 hover:bg-sidebar-accent/20 rounded-lg transition-all duration-200 flex items-center justify-center ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          <a
            href="#"
            onClick={(e) => handleNavClick(e, "contact")}
            className="w-full block px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 text-sm"
          >
            Hire Me
          </a>
        </div>
      </aside>
    </>
  )
}
