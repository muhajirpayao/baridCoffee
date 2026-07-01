import { useEffect, useState } from 'react'

const SESSION_KEY = 'barid-promo-dismissed'

export default function PromoPopup() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    const t = setTimeout(() => setOpen(true), 4500)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    setClosing(true)
    sessionStorage.setItem(SESSION_KEY, '1')
    setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 400)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setTimeout(close, 1600)
  }

  if (!open) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-6 transition-opacity duration-400 ${
        closing ? 'opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Newsletter offer"
    >
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-espresso/70 backdrop-blur-sm cursor-default"
      />

      <div
        className={`relative bg-surface border border-outline-variant max-w-md w-full p-8 md:p-10 shadow-2xl transition-all duration-500 ease-out ${
          closing ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100 animate-fadeUp'
        }`}
      >
        <button
          aria-label="Close offer"
          onClick={close}
          className="absolute top-4 right-4 text-outline hover:text-espresso transition-colors text-xl leading-none w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <span className="font-body text-[10px] text-clay uppercase tracking-widest3 mb-3 block">
              A Small Welcome
            </span>
            <h3 className="font-display text-[28px] text-espresso mb-3 leading-tight">
              Take 10% Off Your First Ritual
            </h3>
            <p className="font-body text-ink-soft text-[15px] mb-6 leading-relaxed">
              Join our list for early access to seasonal roasts, tasting sessions, and news from the roastery.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="border border-outline-variant bg-cream px-4 py-3 font-body text-[14px] text-espresso placeholder:text-outline focus:outline-none focus:border-espresso transition-colors"
              />
              <button
                type="submit"
                className="bg-espresso text-surface px-6 py-3 font-body text-[11px] uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Claim My Discount
              </button>
            </form>
            <button
              onClick={close}
              className="mt-4 font-body text-[11px] text-outline hover:text-ink-soft transition-colors uppercase tracking-widest mx-auto block"
            >
              No thanks
            </button>
          </>
        ) : (
          <div className="py-6 text-center">
            <h3 className="font-display text-[24px] text-espresso mb-2">Welcome to Barid</h3>
            <p className="font-body text-ink-soft text-[15px]">
              Check your inbox — your code is on its way.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
