
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Hola, estoy interesado en el terreno de 120m² en San Juan de Lurigancho por S/16,000. ¿Podrías darme más información?";
    const phoneNumber = "51921209325";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold font-poppins text-gray-800">TerrenoSJL</span>
          </div>
          
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 font-semibold transition-all duration-300 hover-lift shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>Contactar Ahora</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
