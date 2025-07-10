import { MessageSquare, Lightbulb, Headphones, Rocket } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Trato humano",
      description: "Hablamos tu idioma, no el de las computadoras. Conversaciones claras y directas."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Sin tecnicismos",
      description: "Explicamos todo de manera simple. Si no entendés algo, es responsabilidad nuestra."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Escucha activa",
      description: "Primero te escuchamos, después proponemos. Tus necesidades son nuestra prioridad."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Acompañamiento total",
      description: "Desde la primera idea hasta que estés usando tu solución. No te dejamos solo."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por qué elegir Piltri Studio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajamos de una manera diferente, pensando siempre en vos y en tu negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110">
                <div className="text-blue-600">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¿Tenés dudas sobre qué camino elegir?
          </h3>
          <p className="text-blue-100 mb-6">
            Hablamos y te ayudamos a decidir qué opción es la mejor para tu negocio. 
            Sin compromiso, sin vueltas.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Charlamos 15 minutos gratis
          </button>
        </div>
      </div>
    </section>
  )
}