import { Heart, Users, Target } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quiénes somos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos Piltri Studio, un equipo apasionado por hacer que la tecnología
            sea accesible para todos los negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Heart className="w-8 h-8 text-blue-600 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trato humano</h3>
            <p className="text-gray-600">
              Creemos que cada negocio es único y merece una atención personalizada.
              Te escuchamos y te entendemos.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Users className="w-8 h-8 text-green-600 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicidad</h3>
            <p className="text-gray-600">
              Convertimos lo complejo en simple. Sin tecnicismos, sin complicaciones.
              Solo soluciones que funcionan.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <Target className="w-8 h-8 text-orange-600 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Efectividad</h3>
            <p className="text-gray-600">
              Nos enfocamos en resultados reales para tu negocio.
              Cada solución está pensada para hacer crecer tu empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
