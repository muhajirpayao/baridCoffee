import { useEffect, useState } from 'react'

const HERO_POSTER =
  'https://images.pexels.com/videos/17422066/arabian-coffee-coffe-coffee-art-coffee-bar-17422066.jpeg?auto=compress&cs=tinysrgb&h=1920&w=1080&fit=crop'

// Free Pexels stock footage — royalty free, HD (1080x1920), no attribution required.
const HERO_VIDEO = 'https://videos.pexels.com/video-files/17422066/17422066-hd_1080_1920_25fps.mp4'

export default function Hero() {
  const [offset, setOffset] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.25)
    window.addEventListener('scroll', onScroll, { passive: true })
    const t = setTimeout(() => setLoaded(true), 100)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t)
    }
  }, [])

  return (
    <header id="top" className="relative h-[92vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translateY(${offset}px) scale(1.04)` }}
      >
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          aria-label="Espresso pouring into a cup at the Barid roastery"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/35 to-espresso/70 z-[1]" />

      {/* Signature: rising steam wisps */}
      <div className="absolute left-1/2 top-[22%] -translate-x-1/2 z-[2] flex gap-3 opacity-80 pointer-events-none">
        <span className="w-1.5 h-10 rounded-full bg-surface/40 blur-[3px] animate-steam1" />
        <span className="w-1.5 h-14 rounded-full bg-surface/30 blur-[3px] animate-steam2" />
        <span className="w-1.5 h-10 rounded-full bg-surface/40 blur-[3px] animate-steam3" />
      </div>

      <div
        className={`relative z-10 text-center px-6 max-w-4xl border border-surface/20 py-14 md:py-20 bg-espresso/10 backdrop-blur-[2px] mx-4 transition-all duration-[1400ms] ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="font-body text-[11px] text-clay-light tracking-widest3 uppercase mb-3 block">
          Heritage &amp; Craft
        </span>
        <h1 className="font-display text-[52px] md:text-[86px] text-surface leading-[1.05] tracking-[0.1em] mb-5 uppercase">
          <span className="text-shimmer">Classic Heritage</span>
        </h1>
        <p className="font-display text-[20px] md:text-[24px] text-parchment-high italic font-normal tracking-wide border-t border-b border-surface/20 py-3 inline-block px-4">
          Refined Roasting in Zamboanga City
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-surface text-espresso px-9 py-3 font-body text-[11px] uppercase tracking-[0.2em] border border-surface hover:bg-transparent hover:text-surface transition-all duration-500"
          >
            View Rituals
          </a>
          <a
            href="#details"
            className="border border-surface text-surface px-9 py-3 font-body text-[11px] uppercase tracking-[0.2em] hover:bg-surface hover:text-espresso transition-all duration-500"
          >
            Visit Roastery
          </a>
        </div>
      </div>

      <a
        href="#heritage"
        aria-label="Scroll to heritage section"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-surface/70 hover:text-surface transition-all duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-[9px] uppercase tracking-widest2 font-body">Scroll</span>
        <span className="w-px h-10 bg-surface/50 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/2 bg-surface animate-bounce" />
        </span>
      </a>
    </header>
  )
}