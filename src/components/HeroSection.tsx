
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [counters, setCounters] = useState({
    visitors: 0,
    metro: 0,
    growth: 0
  });

  // Animate counters on mount
  useEffect(() => {
    const animateCounter = (key: keyof typeof counters, target: number, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter('visitors', 127);
      animateCounter('metro', 30);
      animateCounter('growth', 15);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Hola, estoy interesado en el terreno de 120m² en San Juan de Lurigancho por S/16,000. ¿Podrías darme más información?";
    const phoneNumber = "51921209325";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Badge with pulse animation */}
            <div className="inline-block">
              <div className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm animate-pulse inline-flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                <span>OPORTUNIDAD ÚNICA</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                TERRENO EN VENTA
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-fade-in">
                San Juan de Lurigancho
              </h2>
            </div>

            {/* Price Section */}
            <div className="space-y-2">
              <div className="text-lg font-medium">Precio:</div>
              <div className="flex items-baseline space-x-4">
                <span className="text-5xl lg:text-6xl font-bold text-orange-400">
                  S/ 16,000
                </span>
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  NEGOCIABLE
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-orange-400">📐</span>
                <span className="font-semibold">120 m²</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-orange-400">📋</span>
                <span className="font-semibold">Papeles en Regla</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-orange-400">⚡</span>
                <span className="font-semibold">Con Servicios</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <span>Contactar por WhatsApp</span>
                </span>
              </button>
              
              <button
                onClick={scrollToGallery}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center justify-center space-x-2">
                  <span>📷</span>
                  <span>Ver Fotos</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Land Image */}
          <div className="relative animate-fade-in">
            <div className="relative transform hover:scale-105 transition-transform duration-300" style={{ perspective: '1000px' }}>
              <div 
                className="bg-white rounded-2xl p-4 shadow-2xl"
                style={{ transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)' }}
              >
                {/* Status Badge */}
                <div className="absolute -top-3 left-4 z-10">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>TERRENO EN VENTA</span>
                  </div>
                </div>
                
                {/* Availability Badge */}
                <div className="absolute -top-3 right-4 z-10">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                    <span>Disponible Ahora</span>
                  </div>
                </div>

                {/* Main Image */}
                <div className="relative">
                  <img
                    src="/lovable-uploads/8af55c6f-ab28-4ca6-9b78-d1936f6e3701.png"
                    alt="Terreno en San Juan de Lurigancho"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  
                  {/* Property Info Overlay */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-purple-600 font-bold text-lg">M12</div>
                    <div className="text-gray-800 font-semibold">120</div>
                    <div className="text-gray-600 text-sm">x 60</div>
                  </div>

                  {/* Features Icons */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
                      <span className="text-green-600">📋</span>
                      <span className="text-xs font-medium text-gray-800">Papeles en Regla</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
                      <span className="text-green-600">🏠</span>
                      <span className="text-xs font-medium text-gray-800">Listo para Construir</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
                      <span className="text-green-600">💰</span>
                      <span className="text-xs font-medium text-gray-800">Precio Negociable</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
                      <span className="text-green-600">⚡</span>
                      <span className="text-xs font-medium text-gray-800">Con Servicios</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pb-12">
          <div className="text-center text-white">
            <div className="text-5xl lg:text-6xl font-bold text-orange-400 mb-2">
              {counters.visitors}
            </div>
            <div className="text-lg font-medium">Personas interesadas hoy</div>
          </div>
          
          <div className="text-center text-white">
            <div className="text-5xl lg:text-6xl font-bold text-orange-400 mb-2">
              {counters.metro}
            </div>
            <div className="text-lg font-medium">Min al centro en Metro</div>
          </div>
          
          <div className="text-center text-white">
            <div className="text-5xl lg:text-6xl font-bold text-orange-400 mb-2">
              {counters.growth}
            </div>
            <div className="text-lg font-medium">% Crecimiento anual zona</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
