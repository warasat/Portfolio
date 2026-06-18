function TechPill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300">
      {children}
    </span>
  )
}

export default function ProjectCard({ project }) {
  const { title, summary, tech, image, links } = project

  return (
    <article className="group glass overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-glow">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 opacity-0 transition group-hover:opacity-100" />
        <img
          src={image}
          alt={`${title} preview`}
          className="h-48 w-full object-cover opacity-90 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-slate-100">{title}</h3>
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-2 py-1 text-[11px] text-cyan-200">
            Featured
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <TechPill key={t}>{t}</TechPill>
          ))}
        </div>

        {/* <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={`${title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div> */}
        {/* </div> */}

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="btn-primary"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          
        </div>
      </div>
    </article>
  )
}

