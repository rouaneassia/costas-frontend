// src/components/RendezVousBanner.jsx
import { CalendarCheck2 } from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function RendezVousBanner() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/rendez-vous")}
      className=" cursor-pointer hover:bg-blue-300 bg-white border border-gray-200 hover:border-blue-500 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center flex flex-col items-center m-14"
    >
      <div className="bg-blue-100 hover:text-blue-600 p-3 rounded-full">
        <CalendarCheck2 className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Prendre un rendez-vous</h2>
        <p className="text-sm text-gray-900">Cliquez ici pour réserver une consultation avec notre équipe.</p>
      </div>
    </div>
  );
}
