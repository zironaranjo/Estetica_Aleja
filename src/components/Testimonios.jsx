const testimonios = [
  {
    nombre: 'Laura M.',
    tratamiento: 'Programa Piel Perfecta',
    texto: 'Mi piel cambió completamente en pocas semanas. Nunca la había tenido así de bonita. El antes y después es increíble.',
    estrellas: 5,
  },
  {
    nombre: 'Sofía R.',
    tratamiento: 'Tratamiento antiacné',
    texto: 'Probé de todo durante años y nada funcionaba. Aquí por fin vi resultados reales en menos de un mes. Lo recomiendo sin dudarlo.',
    estrellas: 5,
  },
  {
    nombre: 'Carmen A.',
    tratamiento: 'Limpieza Deluxe',
    texto: 'Me siento mucho más segura saliendo sin maquillaje. El trato es súper profesional y personalizado. Volveré siempre.',
    estrellas: 5,
  },
  {
    nombre: 'Andrea P.',
    tratamiento: 'Rejuvenecimiento facial',
    texto: 'Los resultados son visibles desde la primera sesión. Mi piel tiene una luminosidad que hacía años que no tenía.',
    estrellas: 5,
  },
]

function Estrellas({ n }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#c4956a]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-[#fdfaf7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#c4956a] font-medium">
            Resultados reales
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2c2018] leading-tight">
            Lo que dicen quienes ya lo vivieron
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 border border-[#e8ddd4] space-y-4 ${
                i === 0 ? 'md:col-span-2 lg:col-span-1 bg-[#2c2018] border-transparent' : 'bg-white'
              }`}
            >
              <Estrellas n={t.estrellas} />
              <p className={`font-serif text-xl font-light leading-relaxed italic ${
                i === 0 ? 'text-[#d4c5bc]' : 'text-[#2c2018]'
              }`}>
                "{t.texto}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#e8ddd4]/20">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${
                  i === 0 ? 'bg-[#c4956a]/20 text-[#c4956a]' : 'bg-[#f5ede6] text-[#5a3e35]'
                }`}>
                  {t.nombre.charAt(0)}
                </div>
                <div>
                  <p className={`text-sm font-medium ${i === 0 ? 'text-white' : 'text-[#2c2018]'}`}>{t.nombre}</p>
                  <p className={`text-xs font-light ${i === 0 ? 'text-[#a89487]' : 'text-[#8a7a72]'}`}>{t.tratamiento}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
