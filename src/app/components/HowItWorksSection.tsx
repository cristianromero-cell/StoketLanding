import React from "react";
import howItWorksImage from "../Assets/img/stoket-3-pasos.png";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Gestiona tu inventario en solo 3 pasos
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Stoket simplifica tu operación para que cargues productos, realices
            conteos y obtengas reportes en tiempo real sin complicaciones.
          </p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white">
          <img
            src={howItWorksImage}
            alt="Gestión de inventario en 3 pasos: Carga, Cuenta y Reportes Inmediatos"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
