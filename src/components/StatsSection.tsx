
import { Clock, Users, CheckCircle } from "lucide-react";

interface StatsSectionProps {
  visitorsCount: number;
  growthRate: number;
}

const StatsSection = ({ visitorsCount, growthRate }: StatsSectionProps) => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover-lift">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">{visitorsCount}</div>
            <div className="text-gray-600">Personas interesadas hoy</div>
          </div>

          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover-lift">
            <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">30</div>
            <div className="text-gray-600">Min al centro en Metro</div>
          </div>

          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover-lift">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">{growthRate}%</div>
            <div className="text-gray-600">Crecimiento anual zona</div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-block bg-red-100 border border-red-200 px-6 py-3 rounded-full">
            <span className="text-red-700 font-semibold">🔥 Disponible Ahora - Los precios en la zona suben constantemente</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
