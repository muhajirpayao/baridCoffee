import { useReveal } from '../hooks/useReveal'

type Item = {
  eyebrow: string
  name: string
  desc: string
  price: string
  img: string
  alt: string
}

const ITEMS: Item[] = [
  {
    eyebrow: 'Signature Series',
    name: 'Zamboanga Reserve',
    desc: 'Notes of dark caramel, tropical cacao, and a hint of local spice.',
    price: '₱1,250',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAl2KVU0H-J5cEb2f7CWUjO-GDJSInAkebGc9nfYc_WUwNPO3h36Hcma20lQBjWyZBzm7Sg2RPnVf6sbvbMm7GuQteugaRyoLlmwgRPQnOOpDPx1nrU7MdajWrAxGOJRSzs1NooaUjem25hl8n1IY9wGijHVOncdFRXOjGfR7SI-A8Y_qRBRq_saa53uMQlN4FYqPEfV80o0hMjz7djpirZP4dh7Z5OjI7HPxuCOPToID87wlKWSWCXw',
    alt: 'Handcrafted Zamboanga Reserve coffee beans in a parchment-colored tin',
  },
  {
    eyebrow: 'Heritage Selection',
    name: 'Ancient Leaves',
    desc: 'Hand-plucked high-mountain tea, traditionally cured for depth.',
    price: '₱1,800',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGA6qAUjfOZD_iMaFfgrgLbQ6NWZ02AjZ1DHr-0Kv0BIeQU-OPMcXwbXq752FS2Sz1lJlx-cm6QPgdbnjmVG_Pchh9Qjy45OK0JoRtvCwyF75cY0eZG8TnENbaDvb5v1SXh7-toQ1doC4tHyI4jdrHNYAm4JpoGUlxtp4ZbmnAvlkwkAZO3u6hRsBrs24A7bkh44Y0BKJW_dzha8ZjNbH5ZyK5pE_uJKSjYuLa311RXmv1qKY0ty4Rfw',
    alt: 'Traditional handcrafted tea leaves in a ceramic bowl',
  },
  {
    eyebrow: 'The Atelier',
    name: 'Heritage Dripper',
    desc: 'Solid brass construction, crafted for the perfect slow pour.',
    price: '₱3,200',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzzG8Vj3bTw5liZJ1V6atZPkX5-uzd0WGxdRChHtkayDPWteYmL4OJnPobPbg4qPHYJQMLNIo9yFG8-jWXtXNdHZXu2LKrLmme1PHt37uoK569kog1AJTr02xr0VEHGUlF_zCzRthH2sFN9usUK_zCZfxjlGklA2aL8Fve7CGGusvBIH0VpzVDVptsZAp3Mpx58owhTuXbCd_-q3YS4rwIG0Bq_c-4cN3NNqgurhaBpTSvD8FS9iA6Zw',
    alt: 'Artisan coffee tools on a dark wood surface with copper and brass accents',
  },
]

function Card({ item, delay }: { item: Item; delay: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} group border border-outline-variant/50 bg-surface p-3 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 w-[78vw] sm:w-[60vw] md:w-auto flex-shrink-0 snap-center md:snap-align-none`}
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-3 md:mb-5 border border-outline-variant/60">
        <img
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          alt={item.alt}
          src={item.img}
        />
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-500" />
      </div>
      <div className="px-2 pb-2 md:pb-3">
        <span className="font-body text-[9px] md:text-[10px] text-clay tracking-widest uppercase mb-1 md:mb-1.5 block">
          {item.eyebrow}
        </span>
        <h3 className="font-display text-[19px] md:text-[24px] text-espresso mb-1.5 md:mb-2">{item.name}</h3>
        <p className="text-ink-soft font-body text-[13px] md:text-[15px] mb-3 md:mb-5 h-10 md:h-12 overflow-hidden leading-relaxed">
          {item.desc}
        </p>
        <div className="flex justify-between items-center border-t border-outline-variant pt-3 md:pt-4">
          <span className="font-display text-[18px] md:text-[22px] font-semibold text-espresso">{item.price}</span>
          <button className="text-clay font-body text-[10px] md:text-[11px] uppercase tracking-widest hover:text-espresso transition-colors relative group/btn">
            Details
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-espresso transition-all duration-300 group-hover/btn:w-full" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Collections() {
  const headRef = useReveal<HTMLDivElement>()

  return (
    <section
      className="min-h-[100svh] md:min-h-0 flex flex-col justify-center py-14 md:py-32 px-0 md:px-6 bg-cream"
      id="collection"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div ref={headRef} className="reveal text-center mb-8 md:mb-16 px-6">
          <span className="font-body text-[10px] md:text-[11px] text-clay uppercase tracking-widest3 mb-2 md:mb-3 block">
            The Roastery Curations
          </span>
          <h2 className="font-display text-[24px] md:text-[42px] text-espresso">Signature Collections</h2>
          <div className="w-24 h-px bg-outline-variant mx-auto mt-4 md:mt-6" />
        </div>

        {/* Mobile: horizontal swipe carousel. Desktop: 3-column grid. */}
        <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-0 pb-2 md:pb-0 hide-scrollbar">
          {ITEMS.map((item, i) => (
            <Card key={item.name} item={item} delay={Math.min(i + 1, 4)} />
          ))}
        </div>
        <p className="md:hidden text-center text-[10px] uppercase tracking-widest text-outline mt-4">
          Swipe to explore →
        </p>
      </div>
    </section>
  )
}