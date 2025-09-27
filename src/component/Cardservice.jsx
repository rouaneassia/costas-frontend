// CardService.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const CardService = ({ Icon, title, subtitle, description, index }) => {
  const {t}=useTranslation();
  return (
    <motion.div
      className="bg-[#111b35] text-white w-full max-w-sm p-6 rounded-xl shadow-lg flex gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      variants={cardVariants}
    >
      <div className="bg-[#B08D57] p-3 rounded-md h-fit">
        <Icon className="text-black w-6 h-6" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-blue-300">{t(title)}</h2>
        <h4 className="text-sm text-[#B08D57] mt-1">{t(subtitle)}</h4>
        <p className="text-sm mt-2 text-gray-200">{t(description)}</p>
      </div>
    </motion.div>
  );
};

export default CardService;
