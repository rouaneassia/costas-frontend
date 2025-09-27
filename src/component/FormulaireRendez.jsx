import { useState, useEffect } from "react";
import { axiosClient } from "../api/axios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";



export default function RendezVousForm({ onAdd }) {
  const [form, setForm] = useState({
    equipe_id: "",
    nom: "",
    telephone: "",
    email: "",
    date: "",
    heure: "",
    sujet: "",
  });

  const [avocats, setAvocats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const {authenticated} = useAuth()
  const navigate = useNavigate()


  useEffect(() => {
    if(!authenticated){
      navigate('/login')
    }
  
  }, [authenticated,navigate])
  
  // Charger la liste des avocats
  useEffect(() => {
    fetch("http://localhost:8000/api/equipes")
      .then((res) => res.json())
      .then((data) => {
        setAvocats(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Impossible de charger la liste des avocats");
        setLoading(false);
      });
  }, []);

  const selectedAvocat = avocats.find((a) => a.id.toString() === form.equipe_id);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axiosClient.get("sanctum/csrf-cookie");
      await axiosClient.post("api/rendezvous", form);

      alert("✅ Votre rendez-vous a été enregistré avec succès");

      setForm({
        equipe_id: "",
        nom: "",
        telephone: "",
        email: "",
        date: "",
        heure: "",
        sujet: "",
      });

      if (onAdd) {
        onAdd();
      }
    } catch (err) {
      alert("❌ Une erreur est survenue lors de l'enregistrement");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-4"
    >
      {loading ? (
        <p className="text-gray-500">Chargement des avocats...</p>
      ) : (
        <select
          name="equipe_id"
          value={form.equipe_id}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
          disabled={submitting}
        >
          <option value="">-- Choisir un avocat --</option>
          {avocats.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name_fr}
            </option>
          ))}
        </select>
      )}

      {selectedAvocat && (
        <div className="flex items-center gap-4 p-4 bg-blue-50 border rounded">
          <img
            src={`http://localhost:8000/storage/${selectedAvocat.image}`}
            alt={selectedAvocat.name_fr}
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <p className="font-bold">{selectedAvocat.name_fr}</p>
          </div>
        </div>
      )}

      <input
        type="text"
        name="nom"
        value={form.nom}
        onChange={handleChange}
        placeholder="Nom complet"
        required
        className="w-full border p-2 rounded"
        disabled={submitting}
      />
      <input
        type="tel"
        name="telephone"
        value={form.telephone}
        onChange={handleChange}
        placeholder="Téléphone"
        required
        className="w-full border p-2 rounded"
        disabled={submitting}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Adresse e-mail"
        required
        className="w-full border p-2 rounded"
        disabled={submitting}
      />

      <div className="flex gap-4">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
          disabled={submitting}
        />
        <input
          type="time"
          name="heure"
          value={form.heure}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
          disabled={submitting}
        />
      </div>

      <textarea
        name="sujet"
        value={form.sujet}
        onChange={handleChange}
        placeholder="Sujet du rendez-vous"
        required
        className="w-full border p-2 rounded h-24"
        disabled={submitting}
      />

      <button
        type="submit"
        className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed`}
        disabled={submitting}
      >
        {submitting ? "Envoi en cours..." : "Réserver"}
      </button>
    </form>
  );
}
