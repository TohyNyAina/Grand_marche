import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Categorie.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io';

const Categorie = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, []);

  async function load() {
    const result = await axios.get('http://localhost:3002/user/getAll');
    const categories = result.data.data.map((produit) => produit.categorie.toLowerCase());
    const uniqueCategories = Array.from(new Set(categories));

    setProduits(uniqueCategories);
    console.log(result.data);
  }

  return (
    <>
      <div className='flex justify-center'>
        <div className='rounded-lg w-[250px] border-2 border-primary'>
          <div className='rounded-tl-[10px] rounded-tr-[10px] w-auto h-[40px] flex items-center justify-center text-white bg-primary'>
            <h4 className='flex items-center gap-1'>
              <GiHamburgerMenu size={20} /> Tous Catégories
            </h4>
          </div>
          <div className='text-categorie-liste'>
            <ul className='p-2'>
              {produits.map((categorie, index) => (
                <a href='#' key={index}>
                  <li className='flex justify-between items-center'>
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
