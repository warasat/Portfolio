import { skillGroups } from '../data/site.js'

export default function SkillsSection() {
  return (
    <section id="skills" className="border-y border-white/10">
      <div className="container-x py-14 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Capabilities</p>
            <h2 className="section-title text-slate-50">
              Skills that ship <span className="grad-text">production</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm sm:text-base text-slate-400">
            Modern stack for building fast, reliable SaaS products with AI features and scalable
            backends.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group glass rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-100">{group.title}</h3>
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 ring-1 ring-white/10" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200 transition group-hover:border-cyan-300/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

