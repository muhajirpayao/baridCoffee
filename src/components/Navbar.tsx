import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#heritage', label: 'Heritage' },
  { href: '#collection', label: 'Curations' },
  { href: '#menu', label: 'Ritual' },
  { href: '#details', label: 'Visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`md:fixed top-0 w-full z-[60] border-b transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-surface/95 backdrop-blur-md border-outline-variant/40 shadow-[0_1px_0_rgba(0,0,0,0.03)]'
          : 'py-6 bg-surface/80 backdrop-blur-sm border-outline-variant/20'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-8 flex-1">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-espresso hover:opacity-70 transition-opacity"
          >
            <span className="block w-5 h-px bg-current mb-[5px] transition-transform duration-300" style={{ transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
            <span className={`block w-5 h-px bg-current mb-[5px] transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className="block w-5 h-px bg-current transition-transform duration-300" style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>

        <a href="#top" className="text-center group mb-1">
          <span
            className={`font-display text-espresso uppercase transition-all duration-500 ${
              scrolled ? 'text-[20px] tracking-[0.28em]' : 'text-[26px] tracking-[0.32em]'
            }`}
          >
            Barid
          </span>
          <span className="block text-[9px] uppercase tracking-widest3 text-clay mt-1 font-body">
            Zamboanga Roastery
          </span>
        </a>

        <div className="flex items-center justify-end gap-8 flex-1">
          <div className="hidden md:flex gap-8 items-center">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative font-body text-[11px] uppercase tracking-widest text-ink-soft hover:text-espresso transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-espresso transition-all duration-500 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-5 pb-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-[12px] uppercase tracking-widest text-ink-soft hover:text-espresso transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
