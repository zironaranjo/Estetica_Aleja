const servicios = [
  {
    nombre: 'Limpieza facial profunda',
    resultado: 'Piel limpia y uniforme',
    descripcion: 'Eliminamos impurezas, puntos negros y células muertas con técnicas profesionales adaptadas a tu tipo de piel.',
    tag: 'Más solicitado',
  },
  {
    nombre: 'Tratamiento antiacné',
    resultado: 'Menos brotes, menos marcas',
    descripcion: 'Protocolo específico para controlar la grasa, reducir brotes activos y mejorar la apariencia de cicatrices.',
    tag: null,
  },
  {
    nombre: 'Hidratación intensiva',
    resultado: 'Efecto glow inmediato',
    descripcion: 'Devolvemos elasticidad, suavidad y luminosidad a pieles secas, apagadas o deshidratadas.',
    tag: null,
  },
  {
    nombre: 'Rejuvenecimiento facial',
    resultado: 'Piel más firme y luminosa',
    descripcion: 'Combinamos técnicas y activos para mejorar la firmeza, reducir líneas de expresión y revitalizar tu piel.',
    tag: 'Premium',
  },
  {
    nombre: 'Diseño de cejas',
    resultado: 'Mirada más definida',
    descripcion: 'Diseño adaptado a tu rostro y rasgos para resaltar tu mirada de forma natural y equilibrada.',
    tag: null,
  },
  {
    nombre: 'Limpieza Deluxe',
    resultado: 'Experiencia completa',
    descripcion: 'La limpieza profunda elevada a experiencia: masaje facial, aromaterapia y protocolo antiedad incluidos.',
    tag: 'Premium',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-[#f5ede6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#c4956a] font-medium">
            Tratamientos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2c2018] leading-tight">
            Diseñados para transformar tu piel
          </h2>
          <p className="text-[#6b5c52] font-light text-lg">
            Cada servicio tiene un objetivo claro: que veas resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#e8ddd4] hover:border-[#c4956a]/50 transition-all duration-300 flex flex-col gap-4 group"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-medium text-[#2c2018] text-base leading-snug group-hover:text-[#5a3e35] transition-colors">
                  {s.nombre}
                </h3>
                {s.tag && (
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ml-2 ${
                    s.tag === 'Premium'
                      ? 'bg-[#5a3e35] text-white'
                      : 'bg-[#c4956a]/15 text-[#8a6040]'
                  }`}>
                    {s.tag}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c4956a]" />
                <p className="text-[#c4956a] text-sm font-medium">{s.resultado}</p>
              </div>

              <p className="text-[#6b5c52] font-light text-sm leading-relaxed flex-1">
                {s.descripcion}
              </p>

              <a
                href="#reservar"
                className="text-sm font-medium text-[#5a3e35] hover:text-[#c4956a] transition-colors flex items-center gap-1 mt-auto"
              >
                Reservar
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
