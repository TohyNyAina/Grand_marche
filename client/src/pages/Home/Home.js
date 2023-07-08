import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from "../../layouts/Navbar/Navbar";
import NavbarConnect from "../../layouts/NavbarConnect/NavbarConnecter"
import CardProduit from "../../components/CardProduit/CardProduit";
import Footer from "../../components/Footer/Footer";
import Categorie from "../../components/Categorie/Categorie";
import SearchBar from '../../components/SearchBar/SearchBar';
import homeImage from '../../assets/jpg/7a04469e89f0c5be97fdd66ffde3a66014312eb8_couverture-min.jpg';

const Home = () => {
  const [Search, setSearch] = useState('');
  const [filterSearch, setFilterSearch] = useState([]);
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
  const [produitData, setProduitData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const filterItems = (item) => {
    const regexp = new RegExp(item, 'i');
    return produitData.filter((elmts) => regexp.test(elmts.name) || regexp.test(elmts.description));
  };

  const handleClick = () => {
    if (Search === '') {
      setFilterSearch([]);
    } else {
      const searchResult = filterItems(Search);
      setFilterSearch(searchResult);
    }
  };

  useEffect(() => {
    // Effectue la vérification de l'authentification et met à jour l'état
    const checkAuthentication = async () => {
      const authToken = Cookies.get('token_jwt');
      setIsLoggedIn(!!authToken);
    };

    // Vérifie l'authentification après la récupération des données
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3002/user/getAll');
        setProduitData(result.data.data);
        await checkAuthentication(); // Vérifie l'authentification après la récupération des données
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Appelle la fonction pour récupérer les données
  }, []);

  return (
    <>
       {isLoggedIn ? <NavbarConnect /> : <Navbar />}

      <div className="flex flex-col justify-center items-stretch px-24 w-full min-h-screen mt-24">
        <div className="flex flex-grow">
          {/* Partie des catégories */}
          <div className="w-[15%]">
            <Categorie handleCategoryClick={setSelectedCategoryProducts}/>
          </div>

          {/* Partie des produits et du filtrage */}
          <div className="w-[75%] ml-12">
            <div className="sticky top-0">
              <SearchBar Search={Search} setSearch={setSearch} handleClick={handleClick} />
            </div>
            <div className="produits-container-card grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
              {filterSearch.length > 0 && Search.length > 0 ? (
                filterSearch.map((elmt) => (
                  <div className='ml-6 mt-6' key={elmt.id}>
                    <CardProduit data={elmt} />
                  </div>
                ))
              ) : (
                selectedCategoryProducts.length > 0 ? (
                  selectedCategoryProducts.map((elmt) => (
                    <div className='ml-6 mt-6' key={elmt.id}>
                      <CardProduit data={elmt} />
                    </div>
                  ))
                ) : (
                  produitData.map((elmt) => (
                    <div className='ml-6 mt-6' key={elmt.id}>
                      <CardProduit data={elmt} />
                    </div>
                  ))
                )
              )}
            </div>
          </div>
        </div>
      </div>  

      <Footer />
    </>
  );
};

export default Home;