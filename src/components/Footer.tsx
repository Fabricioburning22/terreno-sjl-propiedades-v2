
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold font-poppins">TerrenoSJL</span>
            </div>
            <p className="text-gray-400 mb-4">
              Tu oportunidad de tener tu propio terreno en San Juan de Lurigancho
            </p>
          </div>

          {/* Información del Terreno */}
          <div>
            <h3 className="font-bold text-lg mb-4">Información del Terreno</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Tamaño: 120 m²</li>
              <li>Precio: S/ 16,000</li>
              <li>Ubicación: San Juan de Lurigancho</li>
              <li>Estado: Disponible</li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios Incluidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Agua potable</li>
              <li>Energía eléctrica</li>
              <li>Documentación legal</li>
              <li>Asesoría gratuita</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">+51 921 209 325</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">San Juan de Lurigancho, Lima</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-gray-400">
          <p>&copy; 2024 TerrenoSJL. Todos los derechos reservados. | Venta directa sin intermediarios</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
