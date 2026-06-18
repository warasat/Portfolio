import { site } from '../data/site.js'

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      <div className="container-x pb-14 pt-14 sm:pb-20 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="section-kicker">MERN • AI • SaaS</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
              {site.name}
              <span className="block grad-text">{site.title}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn-ghost" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                Available for freelance / remote
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                Building AI-first SaaS products
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.18),transparent_45%)]" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-300">Status</div>
                  <div className="flex items-center gap-2 text-xs text-cyan-200">
                    <span className="relative inline-flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/40" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    </span>
                    Active
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Focus
                    </div>
                    <div className="mt-2 text-slate-100">
                      AI features, scalable APIs, premium UX
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Tooling
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['React', 'Node', 'MongoDB', 'Postgres', 'Docker', 'RAG'].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Signature
                    </div>
                    <div className="text-xs text-slate-400">v1.0</div>
                  </div>
                  <div className="mt-2 font-mono text-xs text-slate-200">
                    build({`{`} stack: "MERN", ai: true, microservices: true {`}`} )
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden sm:block">
              <div className="glass animate-float rounded-3xl px-5 py-4">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Recruiter-ready
                </div>
                <div className="mt-1 text-sm text-slate-100">
                  Clean code • fast delivery • real products
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

