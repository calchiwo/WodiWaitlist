"use client"

import { Card } from "@/components/ui/card"

const projects = [
  {
    name: "WodiNotes",
    description: "Encrypted offline note-taking app",
    logo: "/encrypted-notes-app-logo-blue-lock-icon.jpg",
    url: "https://wodinotes.vercel.app",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "WodiC",
    description: "AI-powered voice calculator with scientific tools",
    logo: "/calculator-app-logo-with-microphone-icon.jpg",
    url: "https://wodic.vercel.app",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "WodiWideWeb",
    description: "My personal storytelling platform",
    logo: "/storytelling-blog-logo-with-book-icon.jpg",
    url: "https://wodiwideweb.vercel.app",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "WodiWaitlist",
    description: "My personal waitlist for early launches",
    logo: "/waitlist-app-logo-with-email-icon.jpg",
    url: "https://wodiwaitlist.vercel.app",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "WodiMemories",
    description: "Personal gallery of milestones & memories",
    logo: "/photo-gallery-app-logo-with-camera-icon.jpg",
    url: "https://wodimemories.vercel.app",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    name: "WodiGames",
    description: "Cross-platform games I've made for everyone to enjoy",
    logo: "/gaming-app-logo-with-game-controller-icon.jpg",
    url: "https://wodigames.vercel.app",
    color: "from-indigo-500/20 to-violet-500/20",
  },
]

export function ProjectShowcase() {
  return (
    <section className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="text-center space-y-3">
        <div className="inline-block">
          <h3 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Explore BuiltByWodi® Projects
          </h3>
          <div className="h-1 w-24 mx-auto mt-3 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </div>
        <p className="text-lg text-muted-foreground text-pretty">Check out what I've been building while you wait</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.name}
            className="group relative cursor-pointer overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-primary/50 hover-lift bg-card/50 backdrop-blur-sm"
            style={{
              animation: "stagger-in 0.5s ease-out forwards",
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
            }}
            onClick={() => window.open(project.url, "_blank")}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            <div className="relative z-10 p-6 flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-muted/50 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={project.logo || "/placeholder.svg"}
                    alt={`${project.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <h4 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>
              </div>

              <div className="flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
