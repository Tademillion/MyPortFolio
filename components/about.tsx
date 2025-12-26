"use client"

import { useEffect, useState } from "react"
import { Award, Briefcase, Calendar } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Mekdela Amba University",
      year: "July 2023",
      description: "Specialized in Software Engineering and Web Development",
    }
   
  ]

  const experiences = [
    {
      title: "Junior Application Developer ",
      company: "Amhara Bank SC",
      year: "2024 - Present",
      description: "Developing and maintain highly scalable web applications",
    },
    // 
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto" />
          </div>

          <div className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`} id="about-section">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Tadde Million, a passionate Full-Stack Developer with expertise in building scalable,
                high-performance web applications. My journey in tech started with curiosity about how things work, and
                over the years, I've honed my skills in creating elegant solutions to complex problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in React, Next.js, Node.js, and modern web technologies with a strong focus on creating
                beautiful user experiences and clean, maintainable code. I'm committed to continuous learning and
                staying updated with the latest technological advancements in the industry.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Personal Info */}
            <div
              className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                <div className="space-y-3">
                  {[
                     { label: "Location", value: "Addis Ababa, Ethiopia" },
                    { label: "Email", value: "tedlamillionyou@gmail.com" },
                    { label: "Freelance", value: "Available" },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-foreground font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Column - Languages & What I Do */}
            <div
              className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              {/* <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Languages</h3>
                <div className="space-y-2">
                  {[
                    { lang: "English", level: "Intermidiate" },
                    { lang: "Amharic", level: "Native" },
                    { lang: "Afan Oromo", level: "Native" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.lang}</span>
                      <span className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-semibold text-foreground">What I Do</h3>
                {[
                  "Building scalable web applications",
                  "Designing intuitive  user interfaces",
                  "Optimizing performance and security",
                  "Build Secure and scalable dynamic backend Api",
                  "Build intuitive and resposive UI",
                  "Handle Database Management",
                  "Deploy Applications"
                 ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats */}
            <div
              className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "300ms" }}
            >
              <h3 className="text-lg font-semibold text-foreground">Experience</h3>
              <div className="space-y-4">
                {[
                  { number: "5+", label: "Projects" },
                  { number: "2+", label: "Years" },
                 
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-background rounded-lg border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105"
                  >
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                      {stat.number}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Award size={28} className="text-cyan-500" />
              Education
            </h3>
            {/* <div className="grid md:grid-cols-2 gap-6"> */}
            <div className="space-y-4">

              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-background to-muted/50 border border-border rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <Award size={24} className="text-cyan-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg">{edu.degree}</h4>
                      <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mt-1">{edu.school}</p>
                      <p className="text-muted-foreground text-sm mt-2 flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.year}
                      </p>
                      <p className="text-muted-foreground text-sm mt-3">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "500ms" }}
          >
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Briefcase size={28} className="text-blue-600" />
              Professional Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-background to-muted/50 border border-border rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg">{exp.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mt-2 flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.year}
                      </p>
                      <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg h-fit">
                      <Briefcase size={24} className="text-blue-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
