import React,{useState, useEffect} from 'react'
import Navbar from "../../layouts/Navbar/Navbar";
import NavbarConnecter from '../../layouts/NavbarConnect/NavbarConnecter';
import Foooter from '../../components/Footer/Footer'
import CardMarche from '../../components/CardMarche/CardMarche';


const PlaceMarche = () => {

  return (
    <>
      <NavbarConnecter />
      <CardMarche/>

     <Foooter/>
    </>
    
  )
}

export default PlaceMarche