import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io';

const Categorie = ({ handleCategoryClick }) => {
  const [produits, setProduits] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, []);

  async function load() {
    const result = await axios.get('http://localhost:3002/user/getAll');
    const categories = result.data.data.map((produit) => produit.categorie.toLowerCase());
    const uniqueCategories = Array.from(new Set(categories));

    setProduits(['Tous', ...uniqueCategories]); // Ajouter 'Tous' à la liste des catégories
  }

  async function selectCategory(category) {
    setSelectedCategory(category);

    if (category === 'Tous') {
      handleCategoryClick([]); // Afficher tous les produits
    } else {
      const result = await axios.get('http://localhost:3002/user/getAll');
      const filteredProducts = result.data.data.filter(
        (produit) => produit.categorie.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filteredProducts);
      handleCategoryClick(filteredProducts);
    }
  }

  return (
    <>
      <div className='flex justify-center mt-12'>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg mt-12">
          <div className='rounded-tl-[10px] rounded-tr-[10px] w-auto h-[40px] flex items-center justify-center text-white bg-primary'>
            <h4 className='flex items-center gap-1'>
              <GiHamburgerMenu size={20} /> Tous Catégories
            </h4>
          </div>
          <div className='text-categorie-liste'>
            <ul className='p-2'>
              {produits.map((categorie, index) => (
                <a className="hover:text-blue-600" href='#' key={index} onClick={() => selectCategory(categorie)}>
                  <li className={`flex justify-between items-center ${selectedCategory === categorie ? 'font-bold' : ''}`}>
                    {categorie} <IoIosArrowForward />
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorie;