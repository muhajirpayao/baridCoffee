import { useReveal } from '../hooks/useReveal'

type MenuItem = { name: string; desc: string; price: string }

const COFFEES: MenuItem[] = [
  { name: 'Basilan Highlands Pour', desc: 'Balanced notes of molasses and wild berries.', price: '₱180' },
  { name: 'Heritage Espresso', desc: 'Intense, nutty profile with a heavy cacao finish.', price: '₱150' },
]

const TEAS: MenuItem[] = [
  { name: 'Silk Road Oolong', desc: 'Steeped in traditional clay pots. Earthy and floral.', price: '₱220' },
  { name: 'Zamboanga Herbal Brew', desc: 'Local lemongrass, ginger, and wild honey blend.', price: '₱160' },
]

function Row({ item }: { item: MenuItem }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="reveal flex justify-between items-baseline group">
      <div className="flex-1">
        <h4 className="font-display text-[19px] text-espresso">{item.name}</h4>
        <p className="text-ink-soft font-body italic text-[14px] mt-0.5">{item.desc}</p>
      </div>
      <div className="h-px border-b border-dotted border-outline flex-1 mx-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
      <span className="font-display text-[20px] font-semibold text-espresso ml-4 whitespace-nowrap">
        {item.price}
      </span>
    </div>
  )
}

function Group({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div>
      <h3 className="font-display text-[22px] italic text-espresso text-center mb-8 flex items-center justify-center gap-5">
        <span className="h-px bg-outline-variant flex-1" />
        {title}
        <span className="h-px bg-outline-variant flex-1" />
      </h3>
      <div className="space-y-6">
        {items.map((item) => (
          <Row key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function Menu() {
  const headRef = useReveal<HTMLDivElement>()
  const frameRef = useReveal<HTMLDivElement>()

  return (
    <section className="py-24 md:py-32 px-6 bg-surface relative" id="menu">
      <div
        ref={frameRef}
        className="reveal max-w-4xl mx-auto border-double border-4 border-outline-variant p-8 md:p-16"
      >
        <div ref={headRef} className="text-center mb-16">
          <span className="font-body text-[11px] text-clay uppercase tracking-widest3 block mb-3 italic">
            Established Tradition
          </span>
          <h2 className="font-display text-[32px] md:text-[42px] text-espresso uppercase tracking-[0.08em]">
            The Ritual Menu
          </h2>
          <p className="font-body text-ink-soft mt-5 max-w-sm mx-auto text-[15px]">
            Served with traditional local shortbread and a moment of silence.
          </p>
        </div>

        <div className="space-y-16">
          <Group title="Handcrafted Coffees" items={COFFEES} />
          <Group title="Tea Rituals" items={TEAS} />
        </div>

        <div className="mt-16 text-center">
          <button className="border border-espresso text-espresso px-9 py-3 font-body text-[11px] uppercase tracking-widest hover:bg-espresso hover:text-surface transition-all duration-500">
            Download Full Archive
          </button>
        </div>
      </div>
    </section>
  )
}
