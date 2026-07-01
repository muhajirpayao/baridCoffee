import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TickerWords from './components/TickerWords'
import Heritage from './components/Heritage'
import Collections from './components/Collections'
import Menu from './components/Menu'
import Details from './components/Details'
import Footer from './components/Footer'
import PromoPopup from './components/PromoPopup'

function App() {
  return (
    <div className="bg-surface text-ink font-body selection:bg-clay-light">
      <Navbar />
      <Hero />
      <TickerWords />
      <Heritage />
      <Collections />
      <Menu />
      <Details />
      <Footer />
      <PromoPopup />
    </div>
  )
}

export default App
