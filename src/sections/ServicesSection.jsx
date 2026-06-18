import { services } from '../data/site.js'

export default function ServicesSection() {
  return (
    <section id="services" className="border-y border-white/10">
      <div className="container-x py-14 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Services</p>
            <h2 className="section-title text-slate-50">
              What I can <span className="grad-text">build</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm sm:text-base text-slate-400">
            End-to-end delivery: product UI, scalable APIs, databases, and AI integrations.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-100">{s.title}</h3>
                <div className="relative h-10 w-10 overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 to-cyan-400/15" />
                  <div className="absolute inset-0 opacity-70">
                    <div className="absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-white/10 animate-shimmer" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

