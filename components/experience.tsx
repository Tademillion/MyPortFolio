"use client";

import { useEffect, useState } from "react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("experience-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications, mentoring junior developers, and architecting microservices.",
      highlights: [
        "Led 5+ major projects",
        "Mentored 3 junior developers",
        "Improved performance by 40%",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using React and Node.js, implemented CI/CD pipelines.",
      highlights: [
        "Built 15+ projects",
        "Implemented CI/CD",
        "Reduced load time by 50%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency Co.",
      period: "2018 - 2020",
      description:
        "Created responsive web interfaces, optimized performance, and collaborated with design teams.",
      highlights: [
        "Designed 20+ interfaces",
        "Achieved 98% Lighthouse score",
        "Led design system",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-cyan-600 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative pl-8 pb-8 border-l-2 border-accent/30 hover:border-accent transition-all ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-gradient-to-br from-accent to-cyan-600 rounded-full border-4 border-background transform hover:scale-125 transition-transform" />

              {/* Content */}
              <div className="bg-muted/50 p-6 rounded-lg hover:bg-muted transition-all hover:shadow-lg hover:shadow-accent/10 transform hover:translate-x-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-accent font-semibold">
                    {exp.period}
                  </span>
                </div>

                <p className="text-accent font-semibold mb-3">{exp.company}</p>
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
