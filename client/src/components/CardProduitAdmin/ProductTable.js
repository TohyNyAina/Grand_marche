import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EditProduct from './EditProduct';
import Cardcrud from './Cardcrud';
import {AiFillDelete} from 'react-icons/ai'
import {RiEdit2Fill} from 'react-icons/ri'

const ProductTable = () => {
  const [produits, setProduits] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const response = await axios.get("http://localhost:3002/user/getAll");
      setProduits(response.data.data);
    } catch (error) {
      console.log("Failed to load products:", error);
    }
  }

  function openModal(product) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }

  async function deleteProduct(_id) {
    try {
      await axios.delete("http://localhost:3002/user/delete/" + _id);
      alert("Product deleted successfully");
      Load();
    } catch (error) {
      alert("Failed to delete product");
    }
  }

  return (
    <div>
      <table className="table-auto w-[90%] bg-slate-100">
            <thead className='bg-primary text-white'>
                <tr className='border'>
                    <th>Code</th>
                    <th>Nom</th>
                    <th>Categorie</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th>Photo</th>
                    <th>Actions</th>
                </tr>
            </thead>
        <tbody>
          {produits.map((produit, index) => (
            <tr key={index}>
              <td>{produit._id}</td>
              <td>{produit.name}</td>
              <td>{produit.categorie}</td>
              <td>{produit.description}</td>
              <td>{produit.prix}</td>
              <td>
                {produit.image && (
                  <img src={`http://localhost:3002/${produit.image}`} alt="Product" className='w-[50px]' />
                )}
              </td>
              <td>
                <button onClick={() => openModal(produit)}> <RiEdit2Fill size={25} /> </button>
                <button onClick={() => deleteProduct(produit._id)}><AiFillDelete size={25} className=' text-red-800'/> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <EditProduct
          product={selectedProduct}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ProductTable;
