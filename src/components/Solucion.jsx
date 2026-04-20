const diferencias = [
  {
    titulo: 'Diagnóstico real',
    descripcion: 'Antes de cualquier tratamiento, analizamos tu piel en detalle para entender qué necesita realmente.',
  },
  {
    titulo: 'Sin protocolo genérico',
    descripcion: 'Cada sesión se adapta a tu piel, tu estilo de vida y tus objetivos. Nada copiado, todo personalizado.',
  },
  {
    titulo: 'Seguimiento continuo',
    descripcion: 'No desaparezco después de la sesión. Te acompaño en el proceso y ajusto el tratamiento cuando hace falta.',
  },
  {
    titulo: 'Resultados visibles',
    descripcion: 'Trabajo para que veas cambios reales, progresivos y duraderos, no solo efectos temporales.',
  },
]

export default function Solucion() {
  return (
    <section id="solucion" className="py-24 bg-[#fdfaf7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#c4956a] font-medium">
            La diferencia
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2c2018] leading-tight">
            Un tratamiento hecho exactamente para ti
          </h2>
          <p className="text-[#6b5c52] font-light text-lg leading-relaxed">
            Analizo tu piel, entiendo tus necesidades y diseño un protocolo específico. Así es como se consiguen resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {diferencias.map((d, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-[#e8ddd4] hover:border-[#c4956a]/40 hover:bg-[#fdf5f0] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl text-[#c4956a]/30 font-light leading-none mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="space-y-2">
                  <h3 className="font-medium text-[#2c2018] text-lg group-hover:text-[#5a3e35] transition-colors">
                    {d.titulo}
                  </h3>
                  <p className="text-[#6b5c52] font-light leading-relaxed">
                    {d.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#reservar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5a3e35] text-white font-light tracking-wide rounded-full hover:bg-[#4a3028] transition-colors text-sm"
          >
            Empieza con tu diagnóstico gratuito
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
