import React, { useState, useEffect } from 'react';
import {AiFillDelete} from "react-icons/ai";
import axios from 'axios';

const CardLivraison = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    fetchAllCommandes();
  }, []);

const fetchAllCommandes = () => {
    axios.get('http://localhost:3002/commande/livraison')
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
              <th>Nom du client</th>
              <th>Email du client</th>
              <th>Nom du produit</th>
              <th>Nombre</th>
              <th>Prix</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {commandes.map((commande) => (
              <tr key={commande.id}>
                <th>{commande.id}</th>
                <th>{commande.nom}</th>
                <th>{commande.email}</th>
                <th>{commande.nom_produit}</th>
                <th>{commande.nombre}</th>
                <th>{commande.prix_unitaire}</th>
                <th>{commande.date}</th>
                <th>
                  <button 
                    class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                      >
                    Supprimer
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default CardLivraison;