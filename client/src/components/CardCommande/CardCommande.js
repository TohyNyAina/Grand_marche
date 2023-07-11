import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const CardCommande = () => {
  const [commandes, setCommandes] = useState([]);
  const [totals, setTotals] = useState({});

  useEffect(() => {
    fetchAllCommandes();
  }, []);

  const fetchAllCommandes = () => {
    axios
      .get('http://localhost:3002/commande/commande')
      .then((res) => {
        setCommandes(res.data);
        calculateTotals(res.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des commandes :', error);
      });
  };

  const handleLivrer = (id) => {
    axios
      .post(`http://localhost:3002/commande/commande/livraison/${id}`)
      .then(() => {
        toast.success('Produit livré avec succès');
        fetchAllCommandes();
      })
      .catch((error) => {
        toast.error('Erreur lors de la livraison :', error);
      });
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/commande/commande/${id}`);
      setCommandes((prevState) => prevState.filter((n) => n.id !== id));
      toast.success('Annulé avec succès !');
    } catch (error) {
      console.log(error);
      toast.error("Erreur lors de l'annulation !");
    }
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
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full mt-10">
            <thead className="bg-primary text-white">
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">id</th>
                <th className="px-4 py-3">User_Id</th>
                <th className="px-4 py-3">Nom du client</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Produit</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Prix</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Total à payer</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {Array.isArray(commandes) && commandes.length > 0 ? (
                commandes.map((commande) => {
                  const total = commande.nombre * commande.prix_unitaire;
                  const userTotal = totals[commande.userId];

                  return (
                    <tr className="text-gray-700" key={commande.id}>
                      <td className="px-4 py-3 text-sm border">{commande.id}</td>
                      <td className="px-4 py-3 text-sm border">{commande.userId}</td>
                      <td className="px-4 py-3 text-sm border">{commande.nom}</td>
                      <td className="px-4 py-3 text-sm border">{commande.email}</td>
                      <td className="px-4 py-3 text-sm border">{commande.nom_produit}</td>
                      <td className="px-4 py-3 text-sm border">{commande.nombre}</td>
                      <td className="px-4 py-3 text-sm border">{commande.prix_unitaire} Ar</td>
                      <td className="px-4 py-3 text-sm border">{total} Ar</td>
                      {userTotal && <td>{userTotal} Ar</td>}
                      <td className="px-4 py-3 text-sm border">
                        <button
                          className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                          onClick={() => handleLivrer(commande.id)}
                        >
                          Livrer
                        </button>
                        <button
                          className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                          onClick={() => handleRemove(commande.id)}
                        >
                          Annuler
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="10">Aucune commande disponible</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CardCommande;