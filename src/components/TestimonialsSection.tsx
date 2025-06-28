
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Vecina desde 2019",
      text: "Es una zona muy tranquila y segura. Los vecinos somos unidos y nos apoyamos mutuamente. Mis hijos van al colegio caminando sin problemas.",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Mendoza",
      role: "Vecino desde 2020",
      text: "La conexión con el centro de Lima es excelente. En 30 minutos estoy en mi trabajo usando el Metro. Los servicios básicos funcionan muy bien.",
      avatar: "👨‍💼"
    },
    {
      name: "Ana y Roberto",
      role: "Propietarios desde 2021",
      text: "Compramos nuestro terreno hace 3 años y ya construimos nuestra casa. La zona ha crecido mucho y el valor se ha incrementado considerablemente.",
      avatar: "👫"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6">
            Lo que dicen nuestros vecinos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencias reales de quienes ya viven en la zona
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-4 text-center">{testimonial.avatar}</div>
              
              <blockquote className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                <div className="text-blue-600 font-semibold">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-green-100 border-2 border-green-200 px-8 py-4 rounded-full">
            <span className="text-green-700 font-bold text-lg">
              ⭐ Más de 50 familias ya viven felices en la zona
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
