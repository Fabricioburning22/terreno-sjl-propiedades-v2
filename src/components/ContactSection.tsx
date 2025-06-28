
import { useState, useEffect } from "react";
import { Phone, QrCode } from "lucide-react";

const ContactSection = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "info",
    message: ""
  });

  useEffect(() => {
    // Generar QR code usando una API pública
    const message = "Hola, estoy interesado en el terreno de 120m² en San Juan de Lurigancho por S/16,000. ¿Podrías darme más información?";
    const phoneNumber = "51921209325";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`;
    setQrCodeUrl(qrUrl);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, soy ${formData.name}. ${formData.message || 'Estoy interesado en el terreno de 120m² en San Juan de Lurigancho por S/16,000.'}`;
    const phoneNumber = "51921209325";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hola, estoy interesado en el terreno de 120m² en San Juan de Lurigancho por S/16,000. ¿Podrías darme más información?";
    const phoneNumber = "51921209325";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            ¡Contacta Ahora!
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Trato directo con el propietario - Sin intermediarios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* WhatsApp Directo */}
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <Phone className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">WhatsApp Directo</h3>
              <p className="mb-6 opacity-90">Respuesta inmediata las 24 horas</p>
              
              <div className="text-3xl font-bold mb-6 bg-white/20 rounded-lg py-3">
                +51 921 209 325
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover-lift shadow-lg w-full"
              >
                Contactar por WhatsApp
              </button>
            </div>
          </div>

          {/* QR Code */}
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <QrCode className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">Escanea y Contacta</h3>
              
              <div className="bg-white p-4 rounded-xl inline-block mb-4">
                {qrCodeUrl && (
                  <img
                    src={qrCodeUrl}
                    alt="Código QR para WhatsApp"
                    className="w-48 h-48 mx-auto"
                  />
                )}
              </div>
              
              <p className="text-sm opacity-90">
                Escanea el código QR para contactar directamente por WhatsApp
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Solicita Más Información</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500"
                  required
                />
                
                <input
                  type="tel"
                  placeholder="Tu número de teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-4 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500"
                />
                
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full p-4 rounded-lg bg-white/90 text-gray-800"
                >
                  <option value="info">Información general</option>
                  <option value="visit">Agendar visita</option>
                  <option value="financing">Opciones de financiamiento</option>
                  <option value="docs">Revisar documentos</option>
                </select>
                
                <textarea
                  placeholder="Mensaje adicional (opcional)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  className="w-full p-4 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 resize-none"
                />
                
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-orange-500 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover-lift shadow-lg"
                >
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Urgencia */}
        <div className="mt-16 text-center">
          <div className="bg-red-500/20 border-2 border-red-300/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">¡Oportunidad Limitada!</h3>
            <p className="text-lg opacity-90 mb-4">
              Los precios en la zona suben constantemente. ¡No pierdas esta oportunidad!
            </p>
            <div className="text-sm opacity-75">
              Solo quedan pocas semanas al precio actual
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
