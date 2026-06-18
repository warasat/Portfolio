import { useEffect, useMemo, useState } from 'react'
import { navItems, site } from '../data/site.js'

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  const ids = useMemo(() => navItems.map((n) => n.id), [])

  useEffect(() => {
    const observers = []

    const setFromEntry = (id) => {
      if (!ids.includes(id)) return
      setActive(id)
    }

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setFromEntry(id)
          })
        },
        {
          root: null,
          threshold: 0.35,
        },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids])

  const onNav = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl">
      <div className="container-x">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={onNav('home')}
            className="group inline-flex items-center gap-2 font-semibold tracking-tight"
          >
            {/* Image Container Wrapper */}
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
              <span className="absolute inset-0 bg-gradient-to-br from-blue-500/25 to-cyan-400/20 opacity-0 transition group-hover:opacity-100" />
              
              {/* Aapki Profile Image yahan render ho rahi hai */}
              <img 
                src="/public/images/ID_PIC-removebg-preview.png" 
                alt={site.name}
                className="h-full w-full object-cover relative z-10"
                onError={(e) => {
                  // Agar image path galat ho ya load na ho toh hidden ho jaye aur background text "WA" nazar aaye
                  e.target.style.display = 'none';
                }}
              />
              
              {/* Fallback Text: Agar image na load ho toh yeh backup dega */}
              <span className="absolute text-xs font-bold text-slate-300 uppercase">WA</span>
            </span>
            
            <span className="hidden sm:block">
              <span className="text-slate-100">{site.name}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onNav(item.id)}
                className={cx(
                  'rounded-xl px-3 py-2 text-sm transition',
                  active === item.id
                    ? 'bg-white/5 text-slate-100 ring-1 ring-white/10'
                    : 'text-slate-300 hover:bg-white/5 hover:text-slate-100',
                )}
              >
                {item.label}
              </a>
            ))}
            <a className="btn-primary ml-2" href="#contact" onClick={onNav('contact')}>
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden btn-ghost px-3"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-5 w-5 relative block">
              <span
                className={cx(
                  'absolute left-0 top-1 block h-[2px] w-5 bg-slate-100 transition',
                  open ? 'translate-y-[6px] rotate-45' : '',
                )}
              />
              <span
                className={cx(
                  'absolute left-0 top-[9px] block h-[2px] w-5 bg-slate-100 transition',
                  open ? 'opacity-0' : '',
                )}
              />
              <span
                className={cx(
                  'absolute left-0 top-[17px] block h-[2px] w-5 bg-slate-100 transition',
                  open ? 'translate-y-[-6px] -rotate-45' : '',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div className={cx('md:hidden border-t border-white/10', open ? 'block' : 'hidden')}>
        <div className="container-x py-3">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onNav(item.id)}
                className={cx(
                  'rounded-xl px-3 py-2 text-sm transition',
                  active === item.id
                    ? 'bg-white/5 text-slate-100 ring-1 ring-white/10'
                    : 'text-slate-300 hover:bg-white/5 hover:text-slate-100',
                )}
              >
                {item.label}
              </a>
            ))}
            <a className="btn-primary mt-2" href="#contact" onClick={onNav('contact')}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}