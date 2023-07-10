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
      <table className="table-auto w-[90%] bg-slate-100 mt-12">
        <thead className="bg-primary text-white">
          <tr className="border">
            <th>Nom du produit</th>
            <th>Nombre</th>
            <th>Prix</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map((commande) => {
            const total = commande.nombre * commande.prix_unitaire;

            return (
              <tr key={commande.id}>
                <th>{commande.nom_produit}</th>
                <th>{commande.nombre}</th>
                <th>{commande.prix_unitaire} Ar</th>
                <th>{total} Ar</th>
              </tr>
            );
          })}
          <tr>
            <th colSpan="3" className="text-right pr-4">
              Total à payer :
            </th>
            <th>{calculerTotalAPayer()} Ar</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardMarche;