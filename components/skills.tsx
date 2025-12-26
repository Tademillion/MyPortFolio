"use client"

import { useEffect, useState } from "react"

export default function Skills() {
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

    const element = document.getElementById("skills-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", description: "Building interactive UIs with modern patterns", icon: "⚛️" },
        { name: "Next.js", description: "Full-stack React with SSR and static generation", icon: "▲" },
        { name: "TypeScript", description: "Type-safe JavaScript for scalable applications", icon: "TS" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid design", icon: "🎨" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", description: "JavaScript runtime for server-side applications", icon: "🟢" },
        { name: "Express.js", description: "Lightweight framework for building APIs", icon: "⚡" },
        { name: ".NET Core", description: "Microsoft framework for cross-platform apps", icon: "🔷" },
        { name: "REST APIs", description: "Designing scalable HTTP-based services", icon: "🔌" },
      ],
    },
    {
      category: "Databases",
      skills: [
        // { name: "PostgreSQL", description: "Powerful open-source relational database", icon: "🐘" },
        { name: "MongoDB", description: "NoSQL database for flexible data models", icon: "🍃" },
        { name: "SQL Server", description: "Enterprise database management system", icon: "🗄️" },
        { name: "MySQL", description: "Popular open-source relational database", icon: "🐬" },
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", description: "Version control and collaboration", icon: "🐙" },
        { name: "Docker", description: "Containerization for consistent deployment", icon: "🐳" },
        { name: "Postman", description: "API platform for building, testing, and documentation", icon: "🚀" },
        { name: "Swagger", description: "Tools for designing and documenting RESTful APIs", icon: "📖" },
        // { name: "GraphQL", description: "Query language for flexible API design", icon: "📊" },
        // { name: "AWS", description: "Cloud infrastructure and services", icon: "☁️" },
      ],
    },
  ]

  return (
    <section id="skills-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Full-stack developer proficient in modern technologies and best practices
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold">
                  {catIdx + 1}
                </span>
                {category.category}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className={`p-6 rounded-xl bg-background border border-border hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 group cursor-pointer transform hover:scale-105 ${
                      isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${(catIdx * 4 + idx) * 50}ms` }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <span className="text-4xl group-hover:scale-125 transition-transform duration-300 origin-left">
                          {skill.icon}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-cyan-500 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-2">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Summary */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20">
          <h3 className="text-xl font-bold text-foreground mb-6">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Full-Stack Development</p>
              <p className="text-sm text-muted-foreground">
                End-to-end development from database design to responsive user interfaces
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">API Architecture</p>
              <p className="text-sm text-muted-foreground">
                Designing scalable RESTful  APIs with proper authentication and Roles
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Performance & Optimization</p>
              <p className="text-sm text-muted-foreground">
                Building fast, responsive applications with optimized code and databases
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
