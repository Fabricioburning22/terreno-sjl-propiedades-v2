import { useState } from "react";
import { X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/uploads/8af55c6f-ab28-4ca6-9b78-d1936f6e3701.png",
      title: "Vista Principal del Terreno",
      description: "120m² listos para construir"
    },
    {
      src: "/uploads/7172a270-ec89-40c0-95ce-795baba12287.png",
      title: "Comunidad Unida",
      description: "Vecinos colaborativos"
    },
    {
      src: "/uploads/eb451262-1306-4af9-a0e4-4cd616e13874.png",
      title: "Servicios Básicos",
      description: "Gas y otros servicios"
    },
    {
      src: "/uploads/dcb38846-b9fa-4f39-b31b-19f70309b69c.png",
      title: "Ubicación Estratégica",
      description: "Cerca de Posta Montenegro"
    },
    {
      src: "/uploads/54bdf3aa-fcdc-4024-9025-86318508843f.png",
      title: "Zona en Crecimiento",
      description: "Nuevos proyectos cercanos"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6">
            Conoce el terreno y la zona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Imágenes reales del terreno y ubicación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
