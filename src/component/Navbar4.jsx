import React from 'react';
import { useTranslation } from 'react-i18next';

const CabinetCostas = () => {
  const { t } = useTranslation();
  const title = t('home.navbar4.title');
  const subtitle = t('home.navbar4.titre');
  const paragraphs = t('home.navbar4.text', { returnObjects: true });

  return (
    <div className="container mx-auto px-6 py-12">
      {/* En-tête */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-blue-500">{title}</h1>
        <p className="mt-4 text-lg text-blue-600">{subtitle}</p>
      </header>

      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Colonne gauche */}
        <div className="md:w-1/2 space-y-6">
          {Array.isArray(paragraphs) && paragraphs.map((para, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Colonne droite : Images */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 flex flex-col space-y-6">
          <img
            src="ime.pnj.webp"
            alt="Cabinet COSTAS 1"
            className="w-full rounded-xl object-cover shadow-md transition-transform duration-500 hover:scale-105"
          />
          <img
            src="images.webp"
            alt="Cabinet COSTAS 2"
            className="w-full rounded-xl object-cover shadow-md transition-transform duration-500 hover:scale-105"
          />
          <img
            src="assia.webp"
            alt="Cabinet COSTAS 3"
            className="w-full rounded-xl object-cover shadow-md transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default CabinetCostas;
