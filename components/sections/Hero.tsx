import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Digitalizá tu negocio
            <span className="text-blue-600 block">sin complicaciones</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Convertimos tus ideas en soluciones digitales simples y efectivas. 
            Software listo para usar o completamente personalizado, según lo que necesites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
              Contanos tu problema
            </Button>
            <Button variant="outline" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Quiero digitalizarme
            </Button>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Proyectos completados</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-orange-600">24h</div>
                <div className="text-sm text-gray-600">Tiempo de respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}