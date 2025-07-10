import { Package, Wrench, Calendar, ShoppingCart, Users, BarChart3 } from 'lucide-react'

export default function Services() {
  const cannedSolutions = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Sistema de Turnos",
      description: "Reserva de turnos online automática para tu negocio"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Tienda con IA",
      description: "E-commerce inteligente que vende por vos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM Multicanal",
      description: "Gestión completa de clientes en un solo lugar"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Cursos Online",
      description: "Plataforma completa para vender tus conocimientos"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Qué ofrecemos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dos caminos para digitalizar tu negocio: rápido y probado, o 100% personalizado
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Software Enlatado */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Software Enlatado</h3>
                <p className="text-gray-600">Rápido • Económico • Probado</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Soluciones listas para usar que podés implementar en días. 
              Perfectas para empezar rápido y sin grandes inversiones.
            </p>
            
            <div className="space-y-4">
              {cannedSolutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-blue-600 mt-1">
                    {solution.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{solution.title}</h4>
                    <p className="text-sm text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Software a Medida */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <Wrench className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Software a Medida</h3>
                <p className="text-gray-600">Personalizado • Único • Escalable</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Desarrollamos la solución exacta que tu negocio necesita. 
              Desde la idea hasta la implementación, te acompañamos en todo el proceso.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Análisis completo</h4>
                  <p className="text-sm text-gray-600">Estudiamos tu negocio para entender exactamente qué necesitás</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Diseño personalizado</h4>
                  <p className="text-sm text-gray-600">Creamos una solución única que se adapte a tu forma de trabajar</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Soporte continuo</h4>
                  <p className="text-sm text-gray-600">Te acompañamos después del lanzamiento con actualizaciones y mejoras</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}