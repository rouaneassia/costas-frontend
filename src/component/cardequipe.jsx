import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const EquipeSection = ({ equipe }) => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 hover:text-blue-800">
        Notre Équipe
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {equipe.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              {member.image ? (
                <img
                  src={`http://localhost:8000/storage/${member.image}`}
                  alt={member.name_fr}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="text-gray-400 text-sm">Aucune image disponible</div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-1">
                  {member.name_fr}
                </h3>

                {member.date && (
                  <p className="text-sm text-gray-600 mb-1">
                    📅 {new Date(member.date).toLocaleDateString()}
                  </p>
                )}

                {member.bio_fr && (
                  <p className="text-sm text-gray-700 mb-3 italic whitespace-pre-line">
                    {member.bio_fr}
                  </p>
                )}

                {member.email && (
                  <p className="flex items-center text-sm text-blue-600 font-medium mb-3">
                    <MdEmail className="mr-2" size={18} />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:underline"
                    >
                      {member.email}
                    </a>
                  </p>
                )}
              </div>

              <div className="flex gap-4 mt-auto pt-4">
                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipeSection;
