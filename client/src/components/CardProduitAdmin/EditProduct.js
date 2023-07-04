import axios from 'axios';
import React, { useState } from 'react';

const EditProductModal = ({ product, closeModal }) => {
  const [name, setName] = useState(product.name);
  const [categorie, setCategorie] = useState(product.categorie);
  const [description, setDescription] = useState(product.description);
  const [prix, setPrix] = useState(product.prix);
  const [image, setImage] = useState(null);

  async function updateProduct(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("categorie", categorie);
    formData.append("description", description);
    formData.append("prix", prix);
    formData.append("image", image);

    try {
      await axios.patch(
        "http://localhost:3002/user/update/" + product._id,
        formData
      );
      alert("Product updated successfully");
      closeModal();
    } catch (error) {
      alert("Failed to update product");
    }
  }

  return (
    <div className="h-screen w-full fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-[2px] flex justify-center items-center">
      <div className="bg-slate-100 px-7 py-11 rounded-lg shadow-lg space-y-2">
        <h2 className='text-slate-900 font-semibold text-lg'>Edit Product</h2>
        <form onSubmit={updateProduct} className='space-y-1'>
          <label className="flex flex-col" >Name: </label>
          <input className="border shadow-sm focus:shadow-md outline-primary p-1 rounded-lg" type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <label className="flex flex-col" >Categorie:</label>
          <input className="border shadow-sm focus:shadow-md outline-primary p-1 rounded-lg" type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} />

          <label className="flex flex-col" >Description:</label>
          <input className="border shadow-sm focus:shadow-md outline-primary p-1 rounded-lg" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

          <label className="flex flex-col" >Prix:</label>
          <input  className="border shadow-sm focus:shadow-md outline-primary p-1 rounded-lg" type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />

          <label className="flex flex-col">Image:</label>
          <input className="border shadow-sm focus:shadow-md outline-primary p-1 rounded-lg" type="file" onChange={(e) => setImage(e.target.files[0])} />

          <div className="py-2 space-x-3">
            <button type="submit" className='bg-blue-500 text-white py-1 px-4 text-sm rounded-md shadow-sm hover:shadow-md'>Update</button>
            <button onClick={closeModal}  className='bg-red-500 text-white py-1 px-4 text-sm rounded-md shadow-sm hover:shadow-md'>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
