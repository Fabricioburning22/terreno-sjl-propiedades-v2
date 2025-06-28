
import { FileText, CheckCircle, Clock } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    {
      title: "Documentos de Posesión",
      description: "Títulos de propiedad y documentos que acreditan la posesión legal del terreno",
      status: "Completo",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Recibos ENEL",
      description: "Comprobantes de pago de servicios eléctricos al día",
      status: "Al día",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Certificaciones",
      description: "Documentos municipales y registrales correspondientes",
      status: "Vigente",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6">
            Documentación Legal Completa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todos los papeles en regla para tu tranquilidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-blue-500 mb-4">
                {doc.icon}
              </div>
              
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-3">
                {doc.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {doc.description}
              </p>
              
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-green-600 font-semibold">{doc.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-4">
              Garantía de Documentación
            </h3>
            
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Todos los documentos están verificados y en regla. Ofrecemos 30 días para revisar 
              toda la documentación sin compromiso.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-semibold">Sin problemas legales</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-semibold">Transferencia inmediata</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-semibold">Asesoría incluida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
