
import { CheckCircle, MapPin, Users, FileText, Clock, Check } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Agua Disponible",
      description: "Servicio de agua potable por solo S/ 8 mensuales",
      status: "Activo",
      color: "text-blue-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Luz Eléctrica",
      description: "Energía eléctrica disponible por S/ 18 mensuales",
      status: "Activo",
      color: "text-yellow-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Internet y Cable",
      description: "Servicios de telecomunicaciones disponibles en la zona",
      status: "Disponible",
      color: "text-purple-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Transporte Público",
      description: "A solo 30 minutos de Estación Bayóvar (Línea 1)",
      status: "Conectado",
      color: "text-green-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Educación Cercana",
      description: "Colegios de primaria y secundaria a 3 cuadras",
      status: "Cerca",
      color: "text-indigo-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Papeles en Regla",
      description: "Documentos de posesión y recibos ENEL incluidos",
      status: "Completo",
      color: "text-red-500"
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6">
            ¿Por qué elegir este terreno?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todas las ventajas que necesitas para tu inversión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} mb-4`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-green-600 font-semibold">{feature.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold font-poppins mb-4">
            Beneficios Adicionales de la Zona
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Zona tranquila y segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Vecinos unidos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Sin delincuencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Junta vecinal activa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
