"use client"

import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div
              className={`space-y-6 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <p className="text-cyan-500 font-semibold text-sm uppercase tracking-wider animate-fade-in">
                  Welcome 
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Hello, I'm{" "}
                  <span className="font-playfair bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Tadde Million
                  </span>
                </h1>
                <h2 className="text-xl md:text-3xl font-semibold text-muted-foreground">
                  Full-Stack Developer & Creative Problem Solver
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Sharp and dedicated full-stack developer specializing in crafting beautiful, scalable web applications
                with modern technologies. Passionate about clean code, exceptional user experiences, and continuous
                growth.
              </p>

              <div className="flex flex-wrap gap-3 pt-4 sm:gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  View My Work <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 whitespace-nowrap"
                >
                  Get In Touch
                </a>
                <a
                  href="/tadeCv.pdf"
                  download={"tadeCv.pdf"}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-muted text-muted-foreground rounded-lg font-semibold hover:border-foreground hover:text-foreground transition-all duration-300 whitespace-nowrap"
                >
                  <Download size={18} /> CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  className="p-3 bg-muted hover:bg-cyan-500/20 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  aria-label="GitHub"
                  title="GitHub"
                  href="https://github.com/Tademillion"
                  target="_blank"
                >
                  <Github size={20}  />
                </a>
                <a
                  href="https://www.linkedin.com/in/tade-million"
                  className="p-3 bg-muted hover:bg-blue-500/20 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:tedlamillionyou@gmail.com"
                  className="p-3 bg-muted hover:bg-cyan-500/20 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  aria-label="Email"
                  title="Email"
                 >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div
              className={`flex justify-center pt-8 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div
            className={`hidden md:flex items-center justify-center transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative w-80 h-80">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-20 animate-pulse" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl">
                <Image
                  src="/proefssional-image.png"
                  alt="Professional developer portrait"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
