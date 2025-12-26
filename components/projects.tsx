"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, X } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "Human Resource Management System",
      description:
        "A Human Resource Management System (HRMS) is a comprehensive digital ecosystem designed to centralize and automate the entire employee lifecycle. It transforms complex administrative tasks into streamlined workflows, from core personnel records and leave tracking to performance evaluations and organizational growth.",
      tags: [".Net Frameworks ", "SQL Server", "DevExpress", "IIS"], 
      image: "/HRMS.webp",
      gallery: [
        
      ],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Stock Management System",
      description:
        "The Stock Management System (SMS) is a centralized application designed to manage the complete lifecycle of inventory—from procurement to issuance, transfers, returns, and auditing. It ensures real-time stock visibility, accountability, and compliance across stores, warehouses, and employees.",
      tags: [".Net Frameworks ", "SQL Server", "DevExpress", "IIS"],
      image: "/stockManagement.webp",
      gallery: [
        "/stockManagement1.jpg",
        "/stockManagement2.jpg",
       ],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Budget And Planing System",
      description:
        "The Budget and Planning System (BPS) is a centralized financial application designed to support annual budget preparation, consolidation, analysis, and reporting across a multi-level organizational structure. The system enables branches to submit detailed yearly budgets by category, automatically aggregates data at district and bank-wide levels, and provides comprehensive reports to support planning, monitoring, and decision-making.",
      tags: ["Next.js", "MongoDb", "Tailwind", "TypeScript","NodeJs","Express"], 
      image: "/budgetandPlan.webp",
      gallery: [
        "/budgetandPlan1.webp",
        
      ],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Digital Letter Verification System",
      description:
        "Compressive and secure Digital Letter Verification System used to verify the Forgid Letter from Original Letter and verify through different Method.",
      tags: ["Next.js", "MongoDb", "Tailwind", "TypeScript","NodeJs","Express"],
      image: "/DigitalLetter.avif",
      gallery: [
        
      ],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Amhara Region Court Fee Management System",
      description:
        "Its The System That Transform The Amhara Region Court System into Digital Platforms and manage Courts by level,Financial Security and payments",
      tags: ["Nextjs", "Tailwind", "NodeJs", "Docker","MongoDb"],
      image: "/courtFeeImg.png",
      gallery: [
        "/courtFeeImg.png", 
      ],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Invetory Management Solution",
      description:
        "This system manages products and tracks inventory accurately across warehouses.It includes an AI assistant that analyzes sales and stock history to forecast future demand and recommend reorder quantities.This helps businesses avoid stock shortages and overstocking.",
      tags: [".Net Core", "SQL Server", "NextJs", "Tailwind","JWT"],
      image: "/backend-server-architecture-with-api-endpoints.jpg",
      gallery: [
        "/backend-server-architecture-with-api-endpoints.jpg"
      ],
      link: "#",
      github: "https://github.com/Tademillion/Court-Management-System",
    },
  ]

  return (
    <section id="projects-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing my expertise in full-stack development with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.link}
                    target="_blanku"
                    className="p-3 bg-white/20 backdrop-blur-sm hover:bg-cyan-500 text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label="View project"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="p-3 bg-white/20 backdrop-blur-sm hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label="View project images"
                  >
                    <Github size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-600 dark:text-cyan-400 rounded-full hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-card rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative border border-border">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-cyan-500 rounded-lg transition-all duration-300 z-10"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Gallery Content */}
            <div className="p-6 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                {projects.find((p) => p.id === selectedProject)?.title}
              </h3>
              <div className="grid gap-4">
                {projects
                  .find((p) => p.id === selectedProject)
                  ?.gallery.map((img, idx) => (
                    <div key={idx} className="relative h-64 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Project view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={projects.find((p) => p.id === selectedProject)?.github}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Github size={18} /> View Code
                </a>
                <a
                  href={projects.find((p) => p.id === selectedProject)?.link}
                  className="flex-1 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
