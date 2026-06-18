import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/site.js'

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container-x py-14 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Work</p>
            <h2 className="section-title text-slate-50">
              Selected <span className="grad-text">Projects</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm sm:text-base text-slate-400">
            A few builds across healthcare, e-commerce, realtime apps, and agentic AI.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

