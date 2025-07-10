import { MessageCircle, Phone, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          ¿Tenés un problema digital?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          Contanos y te ayudamos a resolverlo
        </p>
        
        <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
          No importa si es grande o pequeño, si sabés exactamente qué necesitás o si 
          solo tenés una idea. Hablamos y encontramos la solución perfecta para tu negocio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="white" 
            size="lg" 
            icon={<MessageCircle className="w-5 h-5" />}
          >
            Escribinos por WhatsApp
          </Button>
          <Button 
            variant="outline-white" 
            size="lg" 
            icon={<Phone className="w-5 h-5" />}
          >
            Llamanos ahora
          </Button>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">
            O dejanos tus datos y te contactamos nosotros
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              placeholder="Tu nombre"
              className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input 
              type="email" 
              placeholder="Tu email"
              className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <textarea 
            placeholder="Contanos brevemente qué necesitás..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 mb-4"
          />
          <Button 
            variant="white" 
            size="lg" 
            icon={<Mail className="w-5 h-5" />}
          >
            Enviar mensaje
          </Button>
        </div>
      </div>
    </section>
  )
}