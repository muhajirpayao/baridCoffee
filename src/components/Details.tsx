import { useReveal } from '../hooks/useReveal'

const MAPS_LINK =
  'https://www.google.com/maps/place/Barid+Coffee+And+Tea/@6.9158323,122.0438471,17z/data=!3m1!4b1!4m6!3m5!1s0x32504139b0864871:0x41b24a1e11167cad!8m2!3d6.9158323!4d122.046422!16s%2Fg%2F11vb3gt0w0'
const MAPS_EMBED = 'https://www.google.com/maps?q=6.9158323,122.046422&z=16&output=embed'

export default function Details() {
  const leftRef = useReveal<HTMLDivElement>()
  const mapRef = useReveal<HTMLDivElement>()

  return (
    <section
      className="min-h-[100svh] md:min-h-0 flex flex-col justify-center py-10 md:py-32 px-6 bg-cream"
      id="details"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        <div ref={leftRef} className="reveal space-y-5 md:space-y-12 border-l border-outline-variant pl-5 md:pl-10">
          <div>
            <span className="font-body text-[9px] md:text-[11px] text-clay tracking-widest2 uppercase mb-2 md:mb-3 block">
              The Roastery Location
            </span>
            <h2 className="font-display text-[22px] md:text-[38px] text-espresso mb-3 md:mb-6 uppercase tracking-tight leading-tight">
              Barid Coffee And Tea, Zamboanga City
            </h2>
            <address className="not-italic text-ink-soft font-body text-[13px] md:text-[17px] space-y-1 md:space-y-1.5 leading-relaxed">
              <p>Governor Camins Avenue,</p>
              <p>Zamboanga City, 7000</p>
              <p className="pt-2 md:pt-3 text-espresso font-semibold">+63 (062) 991 2345</p>
            </address>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 border-t border-outline-variant pt-4 md:pt-8">
            <div>
              <span className="font-body text-[9px] md:text-[10px] uppercase tracking-widest text-outline block mb-1 md:mb-1.5">
                Mon — Sat
              </span>
              <p className="font-body text-[13px] md:text-base text-espresso font-semibold">08AM — 10PM</p>
            </div>
            <div>
              <span className="font-body text-[9px] md:text-[10px] uppercase tracking-widest text-outline block mb-1 md:mb-1.5">
                Sunday
              </span>
              <p className="font-body text-[13px] md:text-base text-espresso font-semibold">10AM — 09PM</p>
            </div>
          </div>
          <div className="pt-1 md:pt-2 flex flex-wrap gap-3 md:gap-4">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-espresso text-surface px-5 md:px-8 py-2.5 md:py-3 font-body text-[10px] md:text-[11px] uppercase tracking-widest hover:opacity-90 transition-opacity inline-block"
            >
              Get Directions
            </a>
            <a
              href="tel:+630629912345"
              className="border border-espresso text-espresso px-5 md:px-8 py-2.5 md:py-3 font-body text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-espresso hover:text-surface transition-all duration-500 inline-block"
            >
              Call the Roastery
            </a>
          </div>
        </div>

        <div
          ref={mapRef}
          className="reveal reveal-delay-2 relative h-[220px] md:h-[520px] bg-surface border border-outline-variant overflow-hidden group"
        >
          <iframe
            title="Barid Coffee And Tea location map"
            src={MAPS_EMBED}
            className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-espresso/5 pointer-events-none" />
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block absolute bottom-6 left-6 bg-surface p-4 border border-outline-variant shadow-lg max-w-xs hover:shadow-xl transition-shadow duration-300"
          >
            <p className="font-body text-[10px] uppercase tracking-widest text-clay mb-1.5">
              Gateway to the City
            </p>
            <p className="font-display text-[18px] text-espresso">
              Located near the Zamboanga International Airport
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}