
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/lovable-uploads/8af55c6f-ab28-4ca6-9b78-d1936f6e3701.png",
    "/lovable-uploads/7172a270-ec89-40c0-95ce-795baba12287.png",
    "/lovable-uploads/eb451262-1306-4af9-a0e4-4cd616e13874.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleWhatsAppClick = () => {
    const message = "Hola, estoy interesado en el terreno de 120m² en San Juan de Lurigancho por S/16,000. ¿Podrías darme más información?";
    const phoneNumber = "51921209325";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Terreno imagen ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="animate-fade-in">
          <div className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-float">
            OPORTUNIDAD ÚNICA
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 text-shadow leading-tight">
            TERRENO EN VENTA
            <br />
            <span className="text-accent">San Juan de Lurigancho</span>
          </h1>
          
          <div className="text-center mb-8">
            <div className="text-lg mb-2">Precio:</div>
            <div className="text-5xl md:text-6xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
              S/ 16,000
            </div>
            <div className="text-xl text-yellow-300 font-semibold">NEGOCIABLE</div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-lg">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold">120 m²</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold">Papeles en Regla</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold">Con Servicios</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover-lift shadow-2xl"
            >
              Contactar por WhatsApp
            </button>
            
            <button
              onClick={scrollToFeatures}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover-lift"
            >
              Ver Detalles
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white" />
      </div>

      {/* Image dots indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
