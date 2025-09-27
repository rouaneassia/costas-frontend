import { useEffect, useState } from "react";
import { axiosClient } from "../api/axios";
import EquipeSection from "../component/cardequipe";
import Contact from "../component/Email";
import Equipes from "../component/navequipe";

export default function Equipe() {
  const [equipe, setEquipe] = useState([]);

  useEffect(() => {
    const fetchEquipe = async () => {
      try {
        const res = await axiosClient.get("/api/equipes");
        setEquipe(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement des données d'équipe:", error);
      }
    };

    fetchEquipe();
  }, []);

  return (
    <div>
      <Equipes />
      <EquipeSection equipe={equipe} />
      <Contact />
    </div>
  );
}
