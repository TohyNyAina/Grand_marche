import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardCommande = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    fetchAllCommandes();
  }, []);

  const fetchAllCommandes = () => {
    axios.get('http://localhost:3002/api/commande')
      .then(res => {
        setCommandes(res.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des candidatures :', error);
      });
  }


  return (
    <div>
        <table className="table-auto w-[90%] bg-slate-100">
          <thead className="bg-primary text-white">
            <tr className="border">
              <th>id</th>
              <th>Nom</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {commandes.map((commande) => (
              <tr key={commande.id}>
                <td>{commande.id}</td>
                <td>{commande.nom_produit}</td>
                <td>{commande.prix_unitaire}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default CardCommande;