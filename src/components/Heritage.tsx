import { useReveal } from '../hooks/useReveal'

const STORY_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuACaGBN-hp4_r-7AzPz4VtqgLCINm9JsaPfqxpSyfdIxcART9KiMKQsEbFeteVutGQA14CUvZxcTz46GdVp4SYk-T9ZeC9oir5dR-53ptFqJ9TfiYRPppShqVpZOs5c9DfhUsC_3t4Kw1Rg1vKcCfZjCyyY79K2l8AoaCpI8Utr9NhVgCcexNL2JVouG0X_8etwpz7ebxC9tYeUDq-rYuHnDyF39QNtmdgNpGJYOjV0i1iMLhfN2Yz1uw'

const STATS = [
  { top: 'Est.', bottom: '2012' },
  { top: 'Local', bottom: 'Zamboanga' },
  { top: 'Hand', bottom: 'Crafted' },
]

function StatItem({ top, bottom, delay }: { top: string; bottom: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay}`}>
      <span className="block font-display text-[26px] text-espresso italic">{top}</span>
      <span className="font-body text-[10px] uppercase tracking-widest text-outline">{bottom}</span>
    </div>
  )
}

export default function Heritage() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section className="py-24 md:py-32 px-6 bg-surface" id="heritage">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-center">
          <div ref={imgRef} className="reveal md:col-span-6">
            <div className="border border-outline-variant/40 bg-cream shadow-sm p-10 relative">
              <div className="absolute inset-[10px] border border-outline-variant/20 pointer-events-none" />
              <img
                className="w-full aspect-[4/5] object-cover border border-outline-variant"
                alt="Master roaster inspecting beans at the Barid roastery in Zamboanga, warm wood interiors and vintage scales"
                src={STORY_IMG}
              />
            </div>
          </div>

          <div ref={textRef} className="reveal reveal-delay-2 md:col-span-6 border-l border-outline-variant pl-10">
            <span className="font-body text-[11px] text-clay uppercase tracking-widest2 mb-3 block">
              Our Story
            </span>
            <h2 className="font-display text-[32px] md:text-[42px] text-espresso mb-6 leading-tight">
              A Legacy Reimagined in the City of Flowers
            </h2>
            <div className="space-y-5 text-ink-soft font-body text-[17px] leading-[1.7]">
              <p>
                Barid's journey began with a simple devotion to the classic brew. In the heart of Zamboanga
                City, we established a sanctuary where the heritage of the bean meets the precision of
                modern artisanry.
              </p>
              <p>
                Our roastery is more than a workshop; it is a testament to the local connection. By blending
                global excellence with the soulful rhythm of Zamboanga, we've created a ritual that
                celebrates both the origin and the destination.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-outline-variant grid grid-cols-3 gap-6">
              {STATS.map((s, i) => (
                <StatItem key={s.bottom} top={s.top} bottom={s.bottom} delay={Math.min(i + 2, 4)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
