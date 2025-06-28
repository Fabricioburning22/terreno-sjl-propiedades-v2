
import { MapPin, Clock, CheckCircle } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6">
            Ubicación Privilegiada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cerca de todo lo que necesitas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-gray-800 mb-2">Dirección</h3>
                <p className="text-gray-600 text-lg">
                  San Juan de Lurigancho<br />
                  Cerca de Posta de Montenegro
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-4">
                Beneficios de la Ubicación
              </h3>
              <div className="space-y-3">
                {[
                  "30 min a Estación Bayóvar (Metro Línea 1)",
                  "Cerca de Posta de Montenegro",
                  "Colegios a 3 cuadras",
                  "Comercios y mercados cercanos",
                  "Zona segura y tranquila"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/xa46tPxH2HoExSxu7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover-lift shadow-lg"
            >
              Ver en Google Maps
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31205.532140098934!2d-76.9871!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6ffb4b2e93d%3A0x6b2b4d5d7c8b9c1a!2sSan%20Juan%20de%20Lurigancho%2C%20Lima!5e0!3m2!1sen!2spe!4v1637000000000!5m2!1sen!2spe"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del terreno"
              ></iframe>
            </div>
            
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-800">Ubicación del Terreno</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
