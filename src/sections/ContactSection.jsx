import { site } from '../data/site.js'

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container-x py-14 sm:py-20">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="relative p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-28 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/15 blur-3xl" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div>
                <p className="section-kicker">Contact</p>
                <h2 className="section-title text-slate-50">
                  Let’s build something <span className="grad-text">real</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300">
                  If you’re hiring or need a partner to ship a MERN + AI feature set, I’m happy to
                  chat and share relevant work.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="btn-primary" href={`mailto:${site.email}`}>
                    Email Me
                  </a>
                  <a
                    className="btn-ghost"
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="btn-ghost"
                    href={site.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Email</div>
                  <div className="mt-2 text-slate-100">{site.email}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Profiles
                  </div>
                  <div className="mt-3 flex flex-col gap-2 text-sm">
                    <a
                      className="text-slate-300 hover:text-slate-100 transition"
                      href={site.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="text-slate-300 hover:text-slate-100 transition"
                      href={site.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Response time
                  </div>
                  <div className="mt-2 text-slate-100">Typically within 24–48 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

