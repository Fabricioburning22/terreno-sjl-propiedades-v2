
import { useState } from "react";
import { CheckCircle, CreditCard } from "lucide-react";

const PaymentSection = () => {
  const [initialPayment, setInitialPayment] = useState(6000);
  const [monthlyPayments, setMonthlyPayments] = useState(24);

  const totalFinanced = 20000;
  const remaining = totalFinanced - initialPayment;
  const monthlyAmount = remaining / monthlyPayments;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6">
            Facilidades de Pago
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hacemos realidad tu sueño de tener tu propio terreno
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pago al Contado */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 hover-lift">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-2">
                Pago al Contado
              </h3>
              
              <div className="text-4xl font-bold text-green-600 mb-4">
                S/ 16,000
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Transferencia inmediata</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Todos los gastos incluidos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Asesoría legal gratuita</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pago Fraccionado */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 hover-lift">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-2">
                Pago Fraccionado
              </h3>
              
              <div className="text-4xl font-bold text-blue-600 mb-4">
                S/ 20,000
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Inicial desde S/ 6,000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Cuotas flexibles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Sin intereses adicionales</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculadora */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6 text-center">
            Calculadora de Financiamiento
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pago Inicial (S/)
                </label>
                <input
                  type="range"
                  min="6000"
                  max="15000"
                  step="500"
                  value={initialPayment}
                  onChange={(e) => setInitialPayment(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-lg font-bold text-blue-600 mt-2">
                  S/ {initialPayment.toLocaleString()}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Número de Cuotas
                </label>
                <select
                  value={monthlyPayments}
                  onChange={(e) => setMonthlyPayments(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value={12}>12 meses</option>
                  <option value={18}>18 meses</option>
                  <option value={24}>24 meses</option>
                  <option value={36}>36 meses</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Resumen de Pago</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pago inicial:</span>
                  <span className="font-semibold">S/ {initialPayment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saldo a financiar:</span>
                  <span className="font-semibold">S/ {remaining.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cuota mensual:</span>
                  <span className="font-semibold text-blue-600">S/ {Math.round(monthlyAmount).toLocaleString()}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total a pagar:</span>
                  <span className="text-green-600">S/ {totalFinanced.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
