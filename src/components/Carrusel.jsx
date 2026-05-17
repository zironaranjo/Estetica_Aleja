import { useState, useRef } from 'react'

const medios = [
  { tipo: 'imagen', src: '/servicio1.png', alt: 'Tratamiento facial en Moldearte' },
  { tipo: 'video', src: '/servicio1.mp4', alt: 'Tratamiento en Moldearte' },
  { tipo: 'video', src: '/servicio2.mp4', alt: 'Tratamiento en Moldearte' },
]

function ItemMedio({ medio, activo }) {
  const videoRef = useRef(null)

  if (medio.tipo === 'video') {
    return (
      <video
        ref={videoRef}
        src={medio.src}
        className="w-full h-full object-cover"
        autoPlay={activo}
        muted
        loop
        playsInline
      />
    )
  }
  return (
    <img
      src={medio.src}
      alt={medio.alt}
      className="w-full h-full object-cover"
    />
  )
}

export default function Carrusel() {
  const [actual, setActual] = useState(0)

  const anterior = () => setActual(i => (i === 0 ? medios.length - 1 : i - 1))
  const siguiente = () => setActual(i => (i === medios.length - 1 ? 0 : i + 1))

  return (
    <section className="py-16 bg-[#fdfaf7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#c4956a] font-medium">
            En acción
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2c2018] leading-tight">
            Así trabajamos en Moldearte
          </h2>
        </div>

        <div className="relative max-w-sm mx-auto">
          <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#e8d5c4]">
            <ItemMedio medio={medios[actual]} activo={true} />

            <button
              onClick={anterior}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4 text-[#5a3e35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={siguiente}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Siguiente"
            >
              <svg className="w-4 h-4 text-[#5a3e35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {medios.map((_, i) => (
              <button
                key={i}
                onClick={() => setActual(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === actual
                    ? 'w-6 h-2 bg-[#c4956a]'
                    : 'w-2 h-2 bg-[#e8ddd4] hover:bg-[#c4956a]/50'
                }`}
                aria-label={`Ir a ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
