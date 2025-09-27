
import { useTranslation } from "react-i18next";
export default function Navcontact() {
    const { t } = useTranslation();
  return (
    <div
      className="relative h-[500px] md:h-[400px] sm:h-[300px] bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/top.webp')" }}
    >
   
      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="backdrop-blur-md bg-white/20 px-6 py-4 rounded-xl shadow-lg w-full max-w-lg">
          <h1 className="text-blue-400 text-3xl md:text-2xl sm:text-xl font-bold text-center">
              {t("navcontact.title")}
          </h1>
        </div>
      </div>
    </div>
  );
}