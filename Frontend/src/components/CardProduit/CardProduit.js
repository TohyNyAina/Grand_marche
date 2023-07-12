import React from 'react';
import { Link } from 'react-router-dom';
import { BiCartAdd } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToPanier } from '../../Services/panier';
import { FaBasketShopping } from 'react-icons/fa';

const CardProduit = ({ data }) => {
  const Dispatch = useDispatch();

  const handleToPanier = (item_data) => {
    Dispatch(addToPanier(item_data));
  };

  return (
    <div>
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 className="mb-3 text-xl font-bold text-blue-600">{data.name}</h3>
        <div className="relative">
          <img
            className="w-full h-[150px] object-cover rounded-xl"
            src={`http://localhost:3002/file/${data.image}`}
            alt="Colors"
          />
        </div>
        <h1 className="mt-4 text-gray-600 text-2xl font-bold cursor-pointer">{data.categorie}</h1>
        <div className="my-4">
          <div className="flex space-x-1 items-center">
            <p>Prix: {data.prix} Ar</p>
          </div>
          <div className="flex space-x-1 items-center">
            <p>Details: {data.description} Ar</p>
          </div>
          <button
            className="mt-4 w-full text-white bg-blue-600 hover:bg-blue-400 py-2 rounded-xl shadow-lg"
            onClick={() => handleToPanier(data)}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduit;