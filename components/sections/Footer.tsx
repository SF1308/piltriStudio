import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Piltri Studio</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Hacemos que digitalizar tu negocio sea simple y accesible.
              Soluciones tecnológicas con trato humano.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+54 2 944 290047</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>piltri.studio@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>El Bolsón, Patagonia Argentina</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-3" />
                <div>
                  <p>Lun - Vie: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Piltri Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
