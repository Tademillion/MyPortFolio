"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activePage, setActivePage] = useState("home")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const handlePageChange = (page: string) => {
    const pages = ["home", "about", "skills", "projects", "contact"]
    const currentIndex = pages.indexOf(activePage)
    const nextIndex = pages.indexOf(page)

    if (page === activePage || isTransitioning) return

    setDirection(nextIndex > currentIndex ? "forward" : "backward")
    setActivePage(page)
    setIsTransitioning(true)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const pages = [
    { id: "home", component: Hero },
    { id: "about", component: About },
    { id: "skills", component: Skills },
    { id: "projects", component: Projects },
    { id: "contact", component: Contact },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      <Sidebar
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activePage={activePage}
        setActivePage={handlePageChange}
      />

      <main className="md:ml-64 flex-1 flex items-center justify-center overflow-hidden bg-background">
        <div className="w-full h-screen relative">
          {pages.map((page) => (
            <div
              key={page.id}
              className="w-full h-full absolute transition-all duration-500 ease-out"
              style={{
                transform:
                  page.id === activePage
                    ? "translateX(0)"
                    : direction === "forward"
                      ? "translateX(-100%)"
                      : "translateX(100%)",
                opacity: page.id === activePage || isTransitioning ? 1 : 0,
                pointerEvents: page.id === activePage ? "auto" : "none",
              }}
            >
              <div className="w-full h-full overflow-y-auto">
                {page.id === "home" && <Hero />}
                {page.id === "about" && <About />}
                {page.id === "skills" && <Skills />}
                {page.id === "projects" && <Projects />}
                {page.id === "contact" && <Contact />}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
