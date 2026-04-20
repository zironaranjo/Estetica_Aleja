const puntos = [
  {
    icono: '○',
    texto: 'Has probado mil productos y tu piel sigue igual',
  },
  {
    icono: '○',
    texto: 'Te salen brotes constantes o manchas que no desaparecen',
  },
  {
    icono: '○',
    texto: 'Tu piel se ve apagada, sin vida ni luminosidad',
  },
  {
    icono: '○',
    texto: 'Te incomoda salir a la calle sin maquillaje',
  },
]

export default function Problema() {
  return (
    <section id="problema" className="py-24 bg-[#2c2018]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#c4956a] font-medium">
            ¿Te suena familiar?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">
            Tu piel merece más que soluciones genéricas
          </h2>
          <p className="text-[#a89487] font-light leading-relaxed text-lg">
            No es falta de esfuerzo ni de constancia. Es que cada piel es única y necesita un enfoque hecho a medida.
          </p>
        </div>

        <div className="space-y-5">
          {puntos.map((p, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-full border border-[#c4956a]/40 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#c4956a] group-hover:bg-[#c4956a]/10 transition-colors">
                <svg className="w-3 h-3 text-[#c4956a]" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
              </div>
              <p className="text-[#d4c5bc] font-light leading-relaxed text-lg pt-0.5">{p.texto}</p>
            </div>
          ))}

          <div className="mt-8 pt-8 border-t border-[#3d3028]">
            <p className="text-[#c4956a] font-serif text-xl italic">
              "No es tu culpa. Es que nadie te había dado el tratamiento correcto."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
