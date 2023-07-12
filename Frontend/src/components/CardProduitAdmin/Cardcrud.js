import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Cardcrud = () => {
  const [produits, setProduits] = useState([]);
  const [formValues, setFormValues] = useState({
    _id: "",
    name: "",
    categorie: "",
    description: "",
    prix: "",
    image: null,
  });

  useEffect(() => {
    loadProduits();
  }, []);

  async function loadProduits() {
    try {
      const response = await axios.get("http://localhost:3002/user/getAll");
      setProduits(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to load produits:", error);
    }
  }

  async function saveProduit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("categorie", formValues.categorie);
    formData.append("description", formValues.description);
    formData.append("prix", formValues.prix);
    formData.append("image", formValues.image);

    try {
      await axios.post("http://localhost:3002/user/create", formData);
      alert("Produit registered successfully");
      resetForm();
      loadProduits();
    } catch (error) {
      console.error("Failed to register produit:", error);
      alert("Produit registration failed");
    }
  }

  async function updateProduit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("_id", formValues._id);
    formData.append("name", formValues.name);
    formData.append("categorie", formValues.categorie);
    formData.append("description", formValues.description);
    formData.append("prix", formValues.prix);
    formData.append("image", formValues.image);

    try {
      await axios.patch(
        `http://localhost:3002/user/update/${formValues._id}`,
        formData
      );
      alert("Produit updated successfully");
      resetForm();
      loadProduits();
    } catch (error) {
      console.error("Failed to update produit:", error);
      alert("Produit update failed");
    }
  }

  function deleteProduit(_id) {
    try {
      axios.delete(`http://localhost:3002/user/delete/${_id}`);
      alert("Produit deleted successfully");
      loadProduits();
    } catch (error) {
      console.error("Failed to delete produit:", error);
      alert("Produit deletion failed");
    }
  }

  function handleFormInputChange(event) {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleImageInputChange(event) {
    const file = event.target.files[0];
    setFormValues((prevValues) => ({
      ...prevValues,
      image: file,
    }));
  }

  function resetForm() {
    setFormValues({
      _id: "",
      name: "",
      categorie: "",
      description: "",
      prix: "",
      image: null,
    });
  }

  return (
    <div className="flex flex-col gap-2 p-3 md:w-[70%]">
      <h1 className="font-semibold">CRUD</h1>
      <form>
        <label className="flex flex-col">
          Nom du produit:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleFormInputChange}
            className="border shadow-sm focus:shadow-md outline-primary p-1 rounded-lg"
          />
        </label>
        <label className="flex flex-col">
          Categorie:
          <input
            type="text"
            name="categorie"
            value={formValues.categorie}
            onChange={handleFormInputChange}
            className="border shadow-sm focus:shadow-md outline-primary p-1 rounded-lg"
          />
        </label>
        <label className="flex flex-col">
          Description:
          <textarea
            type="text"
            name="description"
            value={formValues.description}
            onChange={handleFormInputChange}
            className="border shadow-sm focus:shadow-md outline-primary p-1 rounded-lg"
          />
        </label>
        <label className="flex flex-col">
          Prix:
          <input
            type="number"
            name="prix"
            value={formValues.prix}
            onChange={handleFormInputChange}
            className="border shadow-sm focus:shadow-md outline-primary p-1 rounded-lg"
          />
        </label>
        <label className="flex flex-col">
          Image:
          <input
            type="file"
            name="image"
            onChange={handleImageInputChange}
            className="outline-primary p-1 rounded-lg"
          />
        </label>
        <div className="button-container">
          {formValues._id ? (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={updateProduit}
            >
              Update
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary bg-blue-500 text-white py-1 px-4 text-sm rounded-md shadow-sm hover:shadow-md w-24 ml-72 hover:bg-blue-400"
              onClick={saveProduit}
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Cardcrud;
