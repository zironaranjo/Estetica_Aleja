const pasos = [
  {
    numero: '01',
    titulo: 'Diagnóstico',
    descripcion: 'Analizamos tu piel en detalle: tipo, sensibilidades, preocupaciones. Sin este paso, no hay tratamiento efectivo.',
    detalle: 'Totalmente gratuito en tu primera visita',
  },
  {
    numero: '02',
    titulo: 'Tratamiento personalizado',
    descripcion: 'Diseñamos y aplicamos un protocolo específico para tus necesidades, con las técnicas y activos adecuados.',
    detalle: 'Adaptado sesión a sesión según tu evolución',
  },
  {
    numero: '03',
    titulo: 'Seguimiento',
    descripcion: 'Monitorizamos tu progreso, ajustamos el tratamiento si es necesario y te guiamos en tu rutina de casa.',
    detalle: 'Resultados visibles y progresivos',
  },
]

export default function Proceso() {
  return (
    <section id="proceso" className="py-24 bg-[#f5ede6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#c4956a] font-medium">
            Cómo funciona
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2c2018] leading-tight">
            El proceso es sencillo
          </h2>
          <p className="text-[#6b5c52] font-light text-lg">
            Tres pasos claros para que tu piel empiece a cambiar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-[#e8ddd4]" />

          {pasos.map((p, i) => (
            <div key={i} className="relative flex flex-col items-center text-center space-y-4">
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#5a3e35] flex items-center justify-center">
                <span className="font-serif text-white text-lg font-light">{p.numero}</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-[#2c2018] text-xl">{p.titulo}</h3>
                <p className="text-[#6b5c52] font-light leading-relaxed">{p.descripcion}</p>
                <p className="text-[#c4956a] text-sm font-light italic">{p.detalle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#reservar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5a3e35] text-white font-light tracking-wide rounded-full hover:bg-[#4a3028] transition-colors text-sm"
          >
            Reservar mi diagnóstico
          </a>
        </div>
      </div>
    </section>
  )
}
