import logo from '/moldearte.png'

export default function Footer() {
  return (
    <footer className="py-10 bg-[#1e1610] border-t border-[#3d3028]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Moldearte" className="h-9 w-auto object-contain opacity-80" />

        <div className="flex flex-wrap justify-center gap-6 text-xs text-[#6b5c52] font-light tracking-wide">
          <a href="#servicios" className="hover:text-[#c4956a] transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-[#c4956a] transition-colors">Proceso</a>
          <a href="#testimonios" className="hover:text-[#c4956a] transition-colors">Resultados</a>
          <a href="#sobre-mi" className="hover:text-[#c4956a] transition-colors">Sobre mí</a>
          <a href="#reservar" className="hover:text-[#c4956a] transition-colors">Reservar</a>
        </div>

        <p className="text-xs text-[#4a4038] font-light">
          © 2026 · Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
