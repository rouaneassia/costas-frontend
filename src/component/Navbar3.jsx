import { FaBullseye, FaGlobeEurope, FaThumbsUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function LegalSectionPro() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white px-4 py-8 md:px-12 md:py-16 rounded-2xl shadow-xl gap-8">
      {/* Image à gauche */}
      <div className="w-full md:w-1/2">
        <img
          src="service.jpg"
          alt="Avocats"
          className="w-full h-full max-h-[400px] md:max-h-[500px] object-cover shadow-md transition-transform duration-500"
        />
      </div>

      {/* Contenu à droite */}
      <div className="w-full md:w-1/2 space-y-8 px-2 sm:px-4 md:px-8">
        {/* Bloc 1 */}
        <div className="group flex items-start space-x-4">
          <div className="min-w-[50px] h-[50px] flex items-center justify-center border border-gray-300 rounded-full transition duration-300 group-hover:border-[#d4b585] group-hover:scale-110">
            <FaBullseye className="text-xl text-[#B08D57] transition duration-300 group-hover:text-[#d4b585] group-hover:scale-110" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {t("home.navbar3.procès gagnés.titre")}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t("home.navbar3.procès gagnés.contenu")}
            </p>
          </div>
        </div>

        {/* Bloc 2 */}
        <div className="group flex items-start space-x-4">
          <div className="min-w-[50px] h-[50px] flex items-center justify-center border border-gray-300 rounded-full transition duration-300 group-hover:border-[#d4b585] group-hover:scale-110">
            <FaGlobeEurope className="text-xl text-[#B08D57] transition duration-300 group-hover:text-[#d4b585] group-hover:scale-110" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {t("home.navbar3.pays.titre")}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t("home.navbar3.pays.contenu")}
            </p>
          </div>
        </div>

        {/* Bloc 3 */}
        <div className="group flex items-start space-x-4">
          <div className="min-w-[50px] h-[50px] flex items-center justify-center border border-gray-300 rounded-full transition duration-300 group-hover:border-[#d4b585] group-hover:scale-110">
            <FaThumbsUp className="text-xl text-[#B08D57] transition duration-300 group-hover:text-[#d4b585] group-hover:scale-110" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {t("home.navbar3.clients.titre")}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t("home.navbar3.clients.contenu")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
