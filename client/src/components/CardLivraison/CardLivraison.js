import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const CardLivraison = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    fetchAllCommandes();
  }, []);

  const fetchAllCommandes = () => {
    axios
      .get("http://localhost:3002/commande/livraison")
      .then((res) => {
        setCommandes(res.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des candidatures :",
          error
        );
      });
  };

  const handleRemove = (id) => {
    try {
      const deleteLivraison = async () => {
        const result = await axios.delete(
          `http://localhost:3002/commande/livraison/${id}`
        );
        setCommandes((prevState) => prevState.filter((n) => n.id != id));
      };
      toast.success("Supprimer avec succes !");
      deleteLivraison();
    } catch (error) {
      console.log(error);
      toast.error("Erreur lors du suppression !");
    }
  };

  return (
    <div>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full mt-10">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">id</th>
                <th className="px-4 py-3">Nom du client</th>
                <th className="px-4 py-3">Email du client</th>
                <th className="px-4 py-3">Nom du produit</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Prix</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {commandes.map((commande) => {
                const total = commande.nombre * commande.prix_unitaire;

                return (
                  <tr className="text-gray-700" key={commande.id}>
                    <td className="px-4 py-3 text-sm border">{commande.id}</td>
                    <td className="px-4 py-3 text-sm border">{commande.nom}</td>
                    <td className="px-4 py-3 text-sm border">{commande.email}</td>
                    <td className="px-4 py-3 text-sm border">{commande.nom_produit}</td>
                    <td className="px-4 py-3 text-sm border">{commande.nombre}</td>
                    <td className="px-4 py-3 text-sm border">{commande.prix_unitaire} Ar</td>
                    <td className="px-4 py-3 text-sm border">{total} Ar</td>
                    <td className="px-4 py-3 text-sm border">{commande.date}</td>
                    <td>
                      <button
                        className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                        onClick={() => handleRemove(commande.id)}
                      >
                        Supprimer
                      </button>
                      <Toaster />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardLivraison;
