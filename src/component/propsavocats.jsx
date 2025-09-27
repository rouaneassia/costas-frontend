import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const CounterCard = ({ end, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="bg-[#16213e] text-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center"
    >
      <div className="text-4xl font-extrabold text-white mb-2">
        {inView ? <CountUp end={end} duration={2} /> : 0}
      </div>
      <div className="text-sm font-medium text-gray-300 text-center">
        {label}
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const { t } = useTranslation();
  const title = t("about.propsavocats.title");
  const content = t("about.propsavocats.content", { returnObjects: true });
  const counters = t("about.propsavocats.counters", { returnObjects: true });

  return (
    <section className="text-white py-16 px-4 sm:px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texte à gauche */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-400">
            {title}
          </h2>
          {Array.isArray(content) &&
            content.map((para, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg leading-relaxed text-gray-800 mb-4"
              >
                {para}
              </p>
            ))}
        </div>

        {/* Compteurs à droite */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2 w-full">
          <CounterCard end={1000} label={counters.wonCases} />
          <CounterCard end={50} label={counters.lawyers} />
          <CounterCard end={1000} label={counters.clients} />
          <CounterCard end={40} label={counters.countries} />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
