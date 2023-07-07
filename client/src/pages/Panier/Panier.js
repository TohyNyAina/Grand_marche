import React from "react";

import NavbarConnecter from "../../layouts/NavbarConnect/NavbarConnecter";
import CardPanier from "../../components/CardPanier/CardPanier";
import Footer from "../../components/Footer/Footer";

const Panier = () => {

  

 
  return (
    <>
      <NavbarConnecter />
    
        <CardPanier />
      <Footer />
    </>
  );
};

export default Panier;
