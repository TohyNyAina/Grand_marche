import React from "react";
import "./Footer.css";
import logoSponsor1 from "../../assets/png/footer1.png";
import logoSponsor2 from "../../assets/png/footer2.png";
import logoLinkFooter from "../../assets/jpg/logo.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-linkcategory">
          <div className="footer-container-1">
            <div className="linkcategory-root">
              <div className="linkcategory-container">
                <div className="linkcategory-section-1">
                  <div>
                    <img src={logoLinkFooter} alt="logo" width={220} />
                  </div>

                  <div>
                    <ul>
                      <li>
                        Service a pour but de faciliter les achats en ligne
                        <br /> en Europe, Etats-unis et Chine pour la population
                        à Madagascar.
                        <br /> On commande les produis et on nous livre
                        <br /> chez vous ou à nos point relais.
                      </li>
                      <li>
                        <strong>Adresse:</strong> 162 LB Lazaret Nord - Rue
                        François
                        <br /> de Mahy Antsiranana MADAGASCAR
                      </li>
                      <li>
                        <strong>Email:</strong>contact@boutik-naka.com
                      </li>
                      <li>
                        <strong> Appelez-Nous:</strong>(+261)32 55 504 44
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="linkcategory-section-2">
                  <div>
                    <h3>Information</h3>
                  </div>
                  <div>
                    <ul>
                      <Link to="/livraison">
                        {" "}
                        <li>Livraison</li>
                      </Link>
                      <li>Mentions Légales</li>
                      <Link to="/condition">
                        <li>Conditions D'utilisation</li>
                      </Link>
                      <li>A Propos</li>
                      <li>Paiement Sécurisé</li>
                      <li>Nous Contacter </li>
                      <li>Plan Du Site Magasins</li>
                    </ul>
                  </div>
                </div>

                <div className="linkcategory-section-3">
                  <div>
                    <h3>Liens Personnalisés</h3>
                  </div>
                  <div>
                    <ul>
                      <li>Promotions</li>
                      <li>Nouveaux</li>
                      <li>Produits</li>
                      <li> Meilleures</li>
                      <li>Ventes</li>
                      <Link to="/login">
                        <li> Connexion</li>
                      </Link>
                      <Link to="/register">
                        <li> Mon Compte</li>
                      </Link>
                    </ul>
                  </div>
                </div>

                <div className="linkcategory-section-4">
                  <div>
                    <h3>S'inscrire À La Newsletter</h3>

                    <div>
                      <ul>
                        <li>
                          <p>
                            Vous pouvez vous désinscrire à tout moment.
                            <br /> Vous trouverez pour cela nos informations de{" "}
                            <br /> contact dans les conditions d'utilisation du
                            site.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-root">
          <div className="footer-container">
            <div className="footer-container-2">
              <div className="copyright">
                <p className="copyright-text">
                  {" "}
                  Copyright &copy; 2023 .réaliser par Tohy Ny Aina & Landry
                </p>
              </div>
              <div className="sponsor">
                <div className="img-sponsor">
                  <img className="logoSponsor" src={logoSponsor1} alt="" />
                  <img className="logoSponsor" src={logoSponsor2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
