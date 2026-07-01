import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const MOMENTS = ['Sunrise', 'Midday', 'Golden Hour', 'Nightfall']
const REPEAT_WORDS = ['Rise.', 'Roast.', 'Steep.', 'Repeat.']

function CyclingWord() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % MOMENTS.length)
        setVisible(true)
      }, 420)
      return () => clearTimeout(swap)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-block align-baseline min-w-[7ch] md:min-w-[9ch] text-left">
      <span
        className={`inline-block font-display italic text-clay-light transition-all duration-500 ease-out ${
          visible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-[2px]'
        }`}
      >
        {MOMENTS[index]}
      </span>
    </span>
  )
}

function Word({ word, delay }: { word: string; delay: number }) {
  const ref = useReveal<HTMLSpanElement>()
  return (
    <span
      ref={ref}
      className={`reveal font-display text-[34px] md:text-[56px] text-surface uppercase tracking-tight`}
      style={{ transitionDelay: `${delay * 130}ms` }}
    >
      {word}
    </span>
  )
}

function RepeatLine() {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-7">
      {REPEAT_WORDS.map((word, i) => (
        <Word key={word} word={word} delay={i} />
      ))}
    </div>
  )
}

export default function TickerWords() {
  const eyebrowRef = useReveal<HTMLSpanElement>()

  return (
    <section className="py-24 md:py-28 px-6 bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_60%,white,transparent_30%)]" />
      <div className="max-w-5xl mx-auto text-center relative">
        <span
          ref={eyebrowRef}
          className="reveal font-body text-[11px] text-clay-light tracking-widest3 uppercase mb-6 block"
        >
          Ready to Welcome
        </span>
        <h2 className="font-display text-[28px] md:text-[42px] text-surface leading-tight mb-16">
          We have a brew for every <CyclingWord />
        </h2>
        <RepeatLine />
      </div>
    </section>
  )
}
