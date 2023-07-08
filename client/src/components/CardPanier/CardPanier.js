import React, {useState, useEffect} from "react";
import "./Panier.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useSelector ,useDispatch } from "react-redux";
import { addToPanier , removeToPanier , decrementPanier } from "../../Services/panier";
import axios from "axios";
import instance from "../../constants/axiosConfig";

const CardPanier = () => {
  const panier_datas = useSelector((state) => state.panier.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    axios
    .get("http://localhost:3002/api/login")
    .then((response) => {
      const data = response.data;
      console.log("Données de l'API :", data);
      setNom(data.user[0].nom);
      setEmail(data.user[0].email);
      setId(data.user[0].id); // Mettre à jour l'ID à partir de la réponse de l'API
    })
    .catch((error) => {
      console.error(
        "Erreur lors de la récupération des données de l'API :",
        error
      );
    });
  }, []);

  useEffect(() => {
    console.log("ID mis à jour :", id);
    console.log("Nom:", nom);
    console.log("Email:", email);
  }, [id,nom,email]);

  const notify = () => {
    // Envoyez les données du panier au serveur via une requête POST
    axios
      .post(`http://localhost:3002/commande/commande/${id}/${nom}/${email}`, { panierDatas: panier_datas })
      .then((response) => {
        toast.success("Paiement réussi");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        toast.error("Erreur lors du paiement");
        console.error("Erreur lors du paiement : ", error);
      });
    };
  return (
    <div>
      <div className="pannier-root">
        <div className="pannier-conatainer">
          <div className="pannier-container-1">
            <div className="pannier-section-1">
              <div className="section-1">
                <div>
                  <h1>Pannier</h1>
                </div>
                <div>
                  {panier_datas.length > 0 && <p>il ny a rien dans votre pannier</p> }
                </div>

                <div className="pannier-produit-section">
                  {panier_datas.map((panier_data) => (
                    <div key={panier_data.name} className="w-full flex flex-row border-b py-2 ">
                      <div className="w-1/2">
                        <h2 className="mt-3  p-1 ">nom produit: {panier_data.name} </h2>
                        <h2 className="mt-3  p-1 ">prix unitaire: {panier_data.prix}MGA</h2>
                      </div>

                      <div className="">
                        <div className="mt-3">
                          <button onClick={() => dispatch(addToPanier(panier_data))} className="">+1</button>
                          <span className="mt-3 ml-3 bg-gray-300 p-2 ">{panier_data.nombre}</span>
                          <button onClick={()=> dispatch(decrementPanier(panier_data))} className="ml-3">-1</button>
                        </div>
                        <br />
                        <button onClick={() => dispatch(removeToPanier(panier_data._id))} className="bg-blue-900 w-28 h-12 text-white rounded-lg hover:bg-blue-800">
                          retirer
                        </button>
                        <hr />
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

          <div className="pannier-container-2">
            <div className="pannier-section-2">
              <div className="section-2">
                <div className="section2-container-root">
                  <div className="section-container-1">
                    <div className="prix-livaraison-container">
                      <div className="prix">
                          {panier_datas.map((produit_data) => (
                            <div className="flex justify-between px-2">
                            <p>{produit_data.nombre} {produit_data.name}</p>
                            <h4 className="text-md">{parseInt(produit_data.nombre ,10) * parseInt(produit_data.prix,10)}</h4>
                          </div>
                          ))}
                          <div className="flex justify-between mt-4 px-2">
                            <p>Livraison</p>
                            <h4 className="text-md">Gratuite</h4>
                          </div>
                      </div>
                      <div className="panier-total">
                        <hr />
                        <div className="total-container">
                          <div className="total-ttc">
                            <span>Total TTC</span>
                          </div>

                          <div className="total-prix">
                            <span>{panier_datas.length > 0 ? panier_datas.map(el=> el.prix * el.nombre).reduce((prev,cur)=> prev + cur ) : 0} MGA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                </div>
                <div className="section-container-root-2">
                  <div className="code-promo">
                  
                    <p>Vous avez un code promo ?</p>
                  </div>
                  <div className="boutton-section">
                    <button className="button-payement" onClick={notify}>
                      Passer au payement
                    </button>
                    <Toaster />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPanier;
