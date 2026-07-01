import Logo from './Logo'
export default function Footer() {
  return (
    <footer className="bg-espresso-deep text-surface py-10 md:py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14 items-start">
        <div className="text-left">
          <div className="flex items-center gap-3 mb-4">
            <Logo className="w-8 h-8 text-surface" />
            <h2 className="font-display text-[26px] tracking-widest2 uppercase">Barid</h2>
          </div>
          <p className="font-body text-parchment-high/70 max-w-xs">
            Preserving the art of the slow pour since 2012. Crafted in Zamboanga City.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-body text-clay-light uppercase tracking-widest2 mb-1 text-[11px]">
            Inquiries
          </span>
          {['Wholesale Roastery', 'Private Tastings', 'Heritage Blog'].map((label) => (
            <a
              key={label}
              href="#"
              className="font-body text-[11px] uppercase tracking-widest hover:text-clay-light transition-colors w-fit"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-body text-clay-light uppercase tracking-widest2 mb-1 text-[11px]">
            Follow Us
          </span>
          <div className="flex gap-5">
            <a href="#" aria-label="Instagram" className="hover:opacity-70 hover:-translate-y-0.5 transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter / X" className="hover:opacity-70 hover:-translate-y-0.5 transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 md:mt-16 pt-6 md:pt-8 border-t border-surface/10 text-center">
        <p className="font-body text-[10px] uppercase tracking-widest3 opacity-40">
          © 2024 Barid Coffee &amp; Tea Roastery. Zamboanga City Branch.
        </p>
      </div>
    </footer>
  )
}