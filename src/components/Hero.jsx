import logo from '/moldeArte.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfaf7]">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5ede6] clip-hero" />
        <div className="absolute bottom-16 left-12 w-48 h-48 rounded-full bg-[#e8d5c4]/30" />
        <div className="absolute top-32 right-24 w-24 h-24 rounded-full bg-[#c4956a]/10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-24 pb-20 md:pt-20 md:pb-0">
        <div className="space-y-7">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#c4956a] font-medium">
            Estética facial personalizada
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#2c2018]">
            Recupera una piel{' '}
            <em className="not-italic text-[#c4956a]">sana</em> y{' '}
            <em className="not-italic text-[#c4956a]">luminosa</em>
          </h1>

          <p className="text-[#6b5c52] text-lg font-light leading-relaxed max-w-md">
            Tratamientos faciales personalizados diseñados para transformar
            tu piel desde la primera sesión. Sin soluciones genéricas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#reservar"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#5a3e35] text-white font-light tracking-wide rounded-full hover:bg-[#4a3028] transition-colors text-sm"
            >
              Diagnóstico gratuito
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c4956a] text-[#5a3e35] font-light tracking-wide rounded-full hover:bg-[#f5ede6] transition-colors text-sm"
            >
              Ver servicios
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-8 pt-4 border-t border-[#e8ddd4]">
            <div>
              <p className="font-serif text-2xl sm:text-3xl text-[#5a3e35]">+200</p>
              <p className="text-xs text-[#8a7a72] tracking-wide">Clientas felices</p>
            </div>
            <div className="w-px h-10 bg-[#e8ddd4]" />
            <div>
              <p className="font-serif text-2xl sm:text-3xl text-[#5a3e35]">5+</p>
              <p className="text-xs text-[#8a7a72] tracking-wide">Años experiencia</p>
            </div>
            <div className="w-px h-10 bg-[#e8ddd4]" />
            <div>
              <p className="font-serif text-2xl sm:text-3xl text-[#5a3e35]">100%</p>
              <p className="text-xs text-[#8a7a72] tracking-wide">Personalizado</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative w-full aspect-[3/4] max-w-sm ml-auto">
            <div className="absolute inset-0 rounded-[2rem] bg-[#e8d5c4] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-5 p-8">
                  <img src={logo} alt="Moldearte" className="h-32 w-auto object-contain mx-auto" />
                  <p className="font-serif text-xl text-[#5a3e35] italic">Tu piel,<br/>tu mejor versión</p>
                  <p className="text-[#8a7a72] text-sm font-light">Resultados visibles desde<br/>la primera sesión</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-sm border border-[#e8ddd4]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c4956a]/20 flex items-center justify-center text-[#c4956a] text-sm">✓</div>
                <div>
                  <p className="text-xs font-medium text-[#2c2018]">Diagnóstico incluido</p>
                  <p className="text-xs text-[#8a7a72]">Primera visita gratis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#problema" className="flex flex-col items-center gap-1 text-[#8a7a72]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
