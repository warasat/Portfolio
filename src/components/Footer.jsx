import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-x py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} <span className="text-slate-200">{site.name}</span>. All
            rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              className="text-slate-300 hover:text-slate-100 transition"
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
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
              href={`mailto:${site.email}`}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

