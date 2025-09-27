import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(t("email.form.sending"));
    const formData = new FormData(event.target);
    formData.append("access_key", "e4d84c33-6c06-4ba1-966e-b017ccf6f650");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(t("email.form.success"));
        event.target.reset();
      } else {
        setResult("❌ " + data.message);
      }
    } catch (error) {
      setResult(t("email.form.error"));
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Image à gauche */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-4 max-w-md md:max-w-none">
        <img
          src="image.png"
          alt="Avocat"
          className="w-full max-w-lg h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Formulaire à droite */}
      <div className="md:w-1/2 w-full px-6 md:px-12 py-8 max-w-md md:max-w-none">
        <h1 className="text-blue-700 mb-2 text-center md:text-left text-lg md:text-xl">
          {t("email.title")}
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-black text-center md:text-left">
          {t("email.subtitle")}
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder={t("email.form.name")}
              required
              className="flex-1 bg-gray-100 text-gray-800 px-4 py-3 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder={t("email.form.email")}
              required
              className="flex-1 bg-gray-100 text-gray-800 px-4 py-3 rounded-md focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder={t("email.form.phone")}
            required
            className="w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-md focus:outline-none"
          />

          <select
            name="service"
            required
            className="w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-md focus:outline-none"
          >
            <option value="" disabled >
              {t("email.form.subjectPlaceholder")}
            </option>
            <option value="heritage">{t("email.form.subjectOptions.heritage")}</option>
            <option value="accident">{t("email.form.subjectOptions.accident")}</option>
            <option value="contrat">{t("email.form.subjectOptions.contrat")}</option>
            <option value="autre">{t("email.form.subjectOptions.autre")}</option>
          </select>

          <textarea
            name="message"
            placeholder={t("email.form.message")}
            required
            rows="4"
            className="w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-md focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white font-bold py-3 px-6 rounded-md uppercase tracking-wider hover:bg-white transition duration-200 hover:text-[#74553a] hover:border-2 hover:border-[#74553a]"
          >
            {t("email.form.send")}
          </button>

          {result && (
            <div className="mt-4 text-center text-sm text-green-600 font-medium">
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
