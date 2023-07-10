import React, { useState, useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';

const CardCommande = () => {
  const [commandes, setCommandes] = useState([]);
  const [totals, setTotals] = useState({});

  useEffect(() => {
    fetchAllCommandes();
  }, []);

  const fetchAllCommandes = () => {
    axios.get('http://localhost:3002/commande/commande')
      .then(res => {
        setCommandes(res.data);
        calculateTotals(res.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des commandes :', error);
      });
  }

  const handleLivrer = (id) => {
    axios.post(`http://localhost:3002/commande/commande/livraison/${id}`)
      .then(() => {
        alert('Produit livré avec succès');
        fetchAllCommandes();
      })
      .catch(error => {
        alert('Erreur lors de la livraison :', error);
      });
  };

  const calculateTotals = (commandes) => {
    const totals = {};
    for (const commande of commandes) {
      const total = commande.nombre * commande.prix_unitaire;
      if (totals[commande.userId]) {
        totals[commande.userId] += total;
      } else {
        totals[commande.userId] = total;
      }
    }
    setTotals(totals);
  };

  return (
    <div>
      <table className="table-auto w-[90%] bg-slate-100">
        <thead className="bg-primary text-white">
          <tr className="border gap-4">
            <th>id</th>
            <th>id d'Utilisateur</th>
            <th>Nom du client</th>
            <th>Email du client</th>
            <th>Nom du produit</th>
            <th>Nombre</th>
            <th>Prix</th>
            <th>Total</th>
            <th>Total à payer</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {commandes.map((commande) => {
            const total = commande.nombre * commande.prix_unitaire;
            const userTotal = totals[commande.userId];

            return (
              <tr key={commande.id}>
                <th>{commande.id}</th>
                <th>{commande.userId}</th>
                <th>{commande.nom}</th>
                <th>{commande.email}</th>
                <th>{commande.nom_produit}</th>
                <th>{commande.nombre}</th>
                <th>{commande.prix_unitaire} Ar</th>
                <th>{total} Ar</th>
                {userTotal && (
                  <th>{userTotal} Ar</th>
                )}
                <th>
                  <button
                    className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                    onClick={() => handleLivrer(commande.id)}
                  >
                    Livrer
                  </button>
                  <button
                    className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                  >
                    Supprimer
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CardCommande;