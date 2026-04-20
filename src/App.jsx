import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problema from './components/Problema'
import Solucion from './components/Solucion'
import Servicios from './components/Servicios'
import PackEstrella from './components/PackEstrella'
import Proceso from './components/Proceso'
import Testimonios from './components/Testimonios'
import SobreMi from './components/SobreMi'
import Oferta from './components/Oferta'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Solucion />
        <Servicios />
        <PackEstrella />
        <Proceso />
        <Testimonios />
        <SobreMi />
        <Oferta />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
