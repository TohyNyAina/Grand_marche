import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlaceMarche.css";

const CardMarche = () => {
  const [id, setId] = useState("");
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/login")
      .then((response) => {
        const data = response.data;
        console.log("Données de l'API :", data);
        setId(data.user[0].id); // Mettre à jour l'ID à partir de la réponse de l'API
        fetchAllCommandes(data.user[0].id); // Appeler la fonction pour récupérer les candidatures envoyées
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de l'API :",
          error
        );
      });
  }, []);

  const fetchAllCommandes = (userId) => {
    axios
      .get(`http://localhost:3002/commande/commandeenvoye/${userId}`)
      .then((res) => {
        setCommandes(res.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des commandes :", error);
      });
  };

  const calculerTotalAPayer = () => {
    let totalAPayer = 0;
    commandes.forEach((commande) => {
      totalAPayer += commande.nombre * commande.prix_unitaire;
    });
    return totalAPayer;
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full mt-12">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Nom du produit</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Prix</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {commandes.map((commande) => {
                const total = commande.nombre * commande.prix_unitaire;

                return (
                  <tr className="text-gray-700" key={commande.id}>
                    <td className="px-4 py-3 text-sm border">
                      {commande.nom_produit}
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      {commande.nombre}
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      {commande.prix_unitaire} Ar
                    </td>
                    <td className="px-4 py-3 text-sm border">{total} Ar</td>
                  </tr>
                );
              })}
              <tr>
                <th colSpan="3" className="px-4 py-3 text-sm border">
                  Total à payer :
                </th>
                <th>{calculerTotalAPayer()} Ar</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardMarche;
