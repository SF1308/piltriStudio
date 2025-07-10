import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Martín González",
      business: "Barbería El Corte",
      text: "Antes anotaba los turnos en papelitos y se me perdían. Ahora mis clientes reservan online y yo me concentro en cortar el pelo. Increíble la diferencia.",
      rating: 5
    },
    {
      name: "Laura Mendoza",
      business: "Studio de Yoga",
      text: "Necesitaba vender mis clases online pero no sabía por dónde empezar. Piltri me armó todo en 2 semanas. Ahora vendo clases a todo el país.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      business: "Ferretería Don Roberto",
      text: "Pensé que era muy complicado tener una tienda online. Los chicos de Piltri me demostraron que no. Ahora vendo más que nunca.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Historias reales de éxito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estos son algunos de nuestros clientes que ya digitalizaron sus negocios
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}