import React from 'react';
import { useTranslation } from 'react-i18next';
import '../translation/i18n';
import {
  FaUsers,
  FaCarCrash,
  FaGlobe,
  FaBalanceScale,
  FaGavel
} from 'react-icons/fa';

export default function LegalTopicsSection() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="flex flex-col md:flex-row bg-white min-h-screen"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Partie gauche texte + icônes */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 px-6 md:px-10 gap-8 py-10">
        <div className="flex items-center justify-center gap-4 w-full">
          <FaGavel className="text-[#B08D57] text-4xl drop-shadow-lg" />
          <h2 className="text-2xl font-semibold text-center">
            {t('home.navbar2.title')}
          </h2>
        </div>
        

        <ul className="space-y-6 text-base text-black">
          <li className="flex items-start gap-4">
            <FaUsers className="mt-1 text-[#B08D57]" size={24} />
            <div>
              <strong>{t('home.navbar2.familleaux.title')}</strong>
              <p className="mt-1 text-gray-700 max-w-md">
                {t('home.navbar2.familleaux.text')}
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <FaCarCrash className="mt-1 text-[#B08D57]" size={24} />
            <div>
              <strong>{t('home.navbar2.accident.title')}</strong>
              <p className="mt-1 text-gray-700 max-w-md">
                {t('home.navbar2.accident.text')}
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <FaGlobe className="mt-1 text-[#B08D57]" size={24} />
            <div>
              <strong>{t('home.navbar2.internationales.title')}</strong>
              
              
              <p className="mt-1 text-gray-700 max-w-md">
                {t('home.navbar2.internationales.text')}
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <FaBalanceScale className="mt-1 text-[#B08D57]" size={24} />
            <div>
              <strong>{t('home.navbar2.successorales.title')}</strong>
              <p className="mt-1 text-gray-700 max-w-md">
                {t ('home.navbar2.successorales.text')}
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Partie droite image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="nouvelle-images.jpg"
          alt="Illustration juridique"
          className="object-cover w-full h-full pr-6"
        />
      </div>
    </div>
  );
}
