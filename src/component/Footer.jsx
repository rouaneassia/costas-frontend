import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaGavel,
  FaBalanceScale,
  FaGlobe,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div className="flex flex-col items-start">
            <img
              src="costas.pnj.png"
              alt="Logo Costas"
              className="w-40 h-auto mb-4 max-w-full"
            />
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {t("footer.description")}
            </p>
          </div>

          {/* Domaines d'expertise */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              {t("footer.expertise.title")}
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <FaUsers className="text-blue-500" /> {t("footer.expertise.list.0")}
              </li>
              <li className="flex items-center gap-2">
                <FaGavel className="text-blue-500" /> {t("footer.expertise.list.1")}
              </li>
              <li className="flex items-center gap-2">
                <FaBalanceScale className="text-blue-500" /> {t("footer.expertise.list.2")}
              </li>
              <li className="flex items-center gap-2">
                <FaGlobe className="text-blue-500" /> {t("footer.expertise.list.3")}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              {t("footer.contact.title")}
            </h4>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p className="flex items-center gap-2">
                <FaPhone className="text-blue-500" /> {t("footer.contact.phone")}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" /> {t("footer.contact.email")}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-blue-500" /> {t("footer.contact.hours.0")}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-blue-500" /> {t("footer.contact.hours.1")}
              </p>
            </div>
          </div>

          {/* Adresse */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              {t("footer.contact.addressTitle")}
            </h4>
            <p className="text-gray-300 flex items-start gap-2 text-sm sm:text-base">
              <FaMapMarkerAlt className="mt-1 text-blue-500" />
              <span>
                {t("footer.contact.address.line1")} <br />
                {t("footer.contact.address.line2")} <br />
                {t("footer.contact.address.city")}
              </span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2025 Costas. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
