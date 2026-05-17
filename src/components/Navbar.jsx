import { useState, useEffect } from 'react'
import logo from '/moldeArte.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Resultados', href: '#testimonios' },
    { label: 'Sobre mí', href: '#sobre-mi' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fdfaf7]/95 backdrop-blur-sm border-b border-[#e8ddd4]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Moldearte" className="h-16 w-auto object-contain" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-light text-[#4a4a4a] hover:text-[#c4956a] transition-colors tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reservar"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#5a3e35] text-white text-sm font-light tracking-wide rounded-full hover:bg-[#4a3028] transition-colors"
        >
          Reservar cita
        </a>

        <button
          className="md:hidden text-[#5a3e35] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-px bg-current transition-all" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#fdfaf7] border-t border-[#e8ddd4] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-light text-[#4a4a4a] hover:text-[#c4956a] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservar"
            className="inline-flex justify-center px-5 py-2.5 bg-[#5a3e35] text-white text-sm font-light tracking-wide rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Reservar cita
          </a>
        </div>
      )}
    </header>
  )
}
