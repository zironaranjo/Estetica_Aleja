const incluye = [
  'Diagnóstico personalizado de tu piel',
  '3 sesiones faciales adaptadas a tu caso',
  'Rutina de casa recomendada específica para ti',
  'Seguimiento continuo entre sesiones',
  'Guía de cuidado y mantenimiento',
]

export default function PackEstrella() {
  return (
    <section id="pack" className="py-24 bg-[#fdfaf7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#c4956a] font-medium">
                Pack estrella
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2c2018] leading-tight">
                Programa{' '}
                <span className="italic text-[#c4956a]">Piel Perfecta</span>
              </h2>
              <p className="text-[#8a7a72] text-sm font-light tracking-wide">4 semanas · Resultados visibles</p>
            </div>

            <p className="text-[#6b5c52] font-light text-lg leading-relaxed">
              El camino completo hacia una piel más limpia, uniforme y saludable. Todo lo que necesitas en un solo programa, sin improvisar.
            </p>

            <ul className="space-y-3">
              {incluye.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c4956a]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#c4956a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#4a3028] font-light">{item}</p>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="#reservar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c4956a] text-white font-light tracking-wide rounded-full hover:bg-[#b08050] transition-colors text-sm"
              >
                Quiero empezar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#2c2018] rounded-3xl p-8 md:p-10 space-y-8">
              <div className="text-center space-y-2">
                <p className="font-serif text-5xl text-white font-light">4</p>
                <p className="text-[#a89487] text-sm tracking-widest uppercase">semanas</p>
              </div>

              <div className="border-t border-[#3d3028]" />

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="space-y-1">
                  <p className="font-serif text-3xl text-[#c4956a]">3</p>
                  <p className="text-[#a89487] text-xs tracking-wide">Sesiones incluidas</p>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-3xl text-[#c4956a]">1</p>
                  <p className="text-[#a89487] text-xs tracking-wide">Diagnóstico gratuito</p>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-3xl text-[#c4956a]">∞</p>
                  <p className="text-[#a89487] text-xs tracking-wide">Seguimiento continuo</p>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-3xl text-[#c4956a]">100%</p>
                  <p className="text-[#a89487] text-xs tracking-wide">Personalizado</p>
                </div>
              </div>

              <div className="border-t border-[#3d3028]" />

              <div className="bg-[#3d3028] rounded-2xl p-4 text-center">
                <p className="text-[#d4c5bc] font-light text-sm leading-relaxed italic font-serif">
                  "Resultado: piel más limpia, uniforme y luminosa desde las primeras semanas."
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#c4956a] text-white text-xs font-medium px-3 py-1.5 rounded-full">
              El más completo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
