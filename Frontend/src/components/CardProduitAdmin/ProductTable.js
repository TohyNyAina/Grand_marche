import axios from "axios";
import React, { useState, useEffect } from "react";
import EditProduct from "./EditProduct";
import Cardcrud from "./Cardcrud";
import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

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
      toast.success("Product deleted successfully");
      Load();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  }

  return (
    <div>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                {/*  <th>Code</th> */}
                <th className="px-4 py-3">Nom</th>
                <th className="px-4 py-3">Categorie</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Prix</th>
                <th className="px-4 py-3">Photo</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {produits.map((produit, index) => (
                <tr className="text-gray-700" key={index}>
                  {/*  <td>{produit._id}</td> */}
                  <td className="px-4 py-3 text-sm border">{produit.name}</td>
                  <td className="px-4 py-3 text-sm border">{produit.categorie}</td>
                  <td className="px-4 py-3 text-sm border">{produit.description}</td>
                  <td className="px-4 py-3 text-sm border">{produit.prix}</td>
                  <td className="px-4 py-3 text-sm border">
                    {produit.image && (
                      <img
                        src={`http://localhost:3002/${produit.image}`}
                        alt="Product"
                        className="w-[50px]"
                      />
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    <button onClick={() => openModal(produit)}>
                      {" "}
                      <RiEdit2Fill size={25} />{" "}
                    </button>
                    <button onClick={() => deleteProduct(produit._id)}>
                      <AiFillDelete size={25} className=" text-red-800" />{" "}
                    </button>
                    <Toaster />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen && (
            <EditProduct product={selectedProduct} closeModal={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
