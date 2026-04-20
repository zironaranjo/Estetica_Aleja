const valores = [
  { titulo: 'Personalización real', descripcion: 'No existen dos pieles iguales. Cada cliente tiene un protocolo diseñado para ella.' },
  { titulo: 'Resultados honestos', descripcion: 'Sin promesas vacías. Solo tratamientos que funcionan y resultados que se ven.' },
  { titulo: 'Trato cercano', descripcion: 'Estoy contigo en cada paso: antes, durante y después de cada sesión.' },
]

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 bg-[#f5ede6]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="w-full aspect-square max-w-sm bg-[#e8d5c4] rounded-[2.5rem] overflow-hidden flex items-center justify-center">
            <div className="text-center space-y-4 p-10">
              <div className="w-20 h-20 rounded-full bg-[#c4956a]/20 mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-[#c4956a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="font-serif text-2xl text-[#5a3e35] italic">Aleja</p>
              <p className="text-[#8a7a72] text-sm font-light">Especialista en estética facial</p>
              <div className="flex justify-center gap-2">
                <span className="text-xs bg-[#5a3e35]/10 text-[#5a3e35] px-3 py-1 rounded-full">+5 años</span>
                <span className="text-xs bg-[#5a3e35]/10 text-[#5a3e35] px-3 py-1 rounded-full">Formación continua</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 border border-[#e8ddd4]">
            <p className="font-serif text-3xl text-[#c4956a]">+200</p>
            <p className="text-xs text-[#8a7a72]">Clientas satisfechas</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#c4956a] font-medium">
              Sobre mí
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2c2018] leading-tight">
              Cuidado profesional con enfoque real
            </h2>
          </div>

          <p className="text-[#6b5c52] font-light text-lg leading-relaxed">
            Soy especialista en estética facial y llevo más de 5 años ayudando a personas a conseguir una piel sana, equilibrada y bonita.
          </p>

          <p className="text-[#6b5c52] font-light leading-relaxed">
            Mi enfoque no es aplicar protocolos estándar, sino entender cada piel en profundidad y diseñar un plan que funcione de verdad. Porque cuando tu piel mejora, cambia cómo te ves y cómo te sientes.
          </p>

          <div className="space-y-4 pt-2">
            {valores.map((v, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c4956a] mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#2c2018] text-sm">{v.titulo}</p>
                  <p className="text-[#6b5c52] font-light text-sm">{v.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
