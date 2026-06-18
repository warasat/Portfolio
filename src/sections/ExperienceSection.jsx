import { experiences } from '../data/site.js'

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-white/5 bg-slate-900/10">
      <div className="container-x py-14 sm:py-20">
        
        {/* Header (Bilkul projects jaisa layout) */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <p className="section-kicker">Journey</p>
            <h2 className="section-title text-slate-50">
              Work <span className="grad-text">Experience</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm sm:text-base text-slate-400">
            My professional career timeline, ranging from graduation projects to international freelancing and enterprise SaaS roles.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-2 md:ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-8 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-slate-700 ring-4 ring-slate-950 transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-125" />
              
              {/* Title & Duration */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100 group-hover:text-blue-400 transition">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-slate-400">{exp.company}</p>
                </div>
                <span className="text-xs md:text-sm text-slate-500 font-mono">
                  {exp.duration}
                </span>
              </div>
              
              {/* Main Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-3 max-w-4xl">
                {exp.description}
              </p>
              
              {/* Bullet Points Highlights */}
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs md:text-sm max-w-3xl">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="leading-relaxed hover:text-slate-300 transition">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}