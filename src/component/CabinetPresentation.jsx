import React from "react";
import { useTranslation } from "react-i18next";

const CabinetPresentation = () => {
  const { t } = useTranslation();

  // Récupérer les paragraphes et titres depuis les fichiers de traduction
  const title = t("about.cabinetpresentation.title");
  const paragraphs = t("about.cabinetpresentation.content", { returnObjects: true });
  const domainsTitle = t("about.cabinetpresentation.domains_title");
  const domains = t("about.cabinetpresentation.domains_content", { returnObjects: true });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
      {/* Partie 1 : Présentation générale */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">{title}</h2>
          {paragraphs.map((para, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">{para}</p>
          ))}
        </div>
        <div className="w-full h-[380px]">
          <img
            src="img.pnj.jpg"
            alt={title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Partie 2 : Activité, originalité, valeurs */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-[500px] order-2 md:order-1">
          <img
            src="images.webp"
            alt={domainsTitle}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="space-y-4 order-1 md:order-2">
          <h2 className="text-3xl font-bold text-blue-600">{domainsTitle}</h2>
          {domains.map((para, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">{para}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CabinetPresentation;
