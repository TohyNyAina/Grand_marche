import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Compte.css";
import axios from 'axios'
import {HiUserCircle} from 'react-icons/hi'
import {BiLocationPlus} from 'react-icons/bi'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {ImTicket} from "react-icons/im"
import {IoMdPricetag} from 'react-icons/io'
import {BiSmile} from "react-icons/bi"
import { Link } from "react-router-dom";

const CardCompte = () => {
    
  const [User, setUser] = useState();
 const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3002/api/login")
    .then((reponse)=>{
      if(reponse.data.loggedIn === true){
          setUser(reponse.data.user[0].email)
      }

    })
 },[])

 const handleDeconnexion =()=>{

    
    document.cookie = `token_jwt=;expires=${new Date(0).toUTCString()}`
    navigate('/')
 }

  return (
    <>
      <div className="compte-root">
          
        <div className="compte-main">
           
          <div className="compte-container">
          <div className="compte-text">
          <h2> Votre compte</h2>
          <p>Bienvenu : {User}</p>
          </div>
            <div className="menu-container">
              <div className="menu-compte">
                  
                <div className="icon-compte"><HiUserCircle size={30}/></div>  
                <Link to="/compte/information"><span>information</span></Link>
              </div>
              <div className="menu-compte">
                  <div className="icon-compte"><BiLocationPlus size={30}/></div>   
                 <span> Ajouter la première adresse</span></div>
              <div className="menu-compte">
                  <div className="icon-compte"><AiTwotoneCalendar size={30}/></div>    
               <span> Historique et détails de la commande</span>
              </div>

              <div className="menu-compte">
                <div className="icon-compte"><ImTicket size={30}/></div>   
                <span>  Relevés de crédit</span></div>

              <div className="menu-compte">
              <div className="icon-compte"><IoMdPricetag size={30}/>
              
              </div>  
               <span> Pièces justificatives</span></div>
              <div onClick={handleDeconnexion} className="menu-compte">
              <div className="icon-compte"><BiSmile size={30}/></div>  
               <span>
                 Déconnexion
                </span> </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCompte;
