import React, { useState } from "react";
import "./Login.css";
import axio from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CardLogin = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  axio.defaults.withCredentials = true;
  const onSubmit = (data) => {
    axio
      .post("http://localhost:3002/api/login", data)
      .then((response) => {
        console.log(response);
        document.cookie = `token_jwt=${response.data.token}`;
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Nom d'utilisateur ou mot de passe incorrect");
      });
  };

  return (
    <div>
      <div className="text-connexion">
        <h2>Connectez-vous à votre compte:</h2>
      </div>
      <div className="login-root">
        <div className="login-root-container">
          <div className="container-login">
            <div className="container-login-1">
              {/* ====================form==================== */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="fomr-container"
              >
                <div className="form-container-login">
                  <div className="form-1">
                    <div className="label-form">
                      <label>Email</label>
                    </div>
                    <div className="form-login-input">
                      <input
                        type="text"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <p style={{ color: "red" }}>Your email is required</p>
                      )}
                    </div>
                  </div>

                  <div className="form-2">
                    <div className="label-form">
                      <label>Mot de passe</label>
                    </div>
                    <div className="form-login-input">
                      <input
                        type="password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && (
                        <p style={{ color: "red" }}>
                          Your password is required
                        </p>
                      )}
                      {errorMessage && (
                        <p style={{ color: "red" }}>{errorMessage}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="button-container">
                  <p>Mot de passe oublié?</p>

                  <button className="bg-blue-900 w-28 h-12 text-white rounded-lg hover:bg-blue-800" type="submit">
                    Connexion
                  </button>
                </div>
              </form>

              {/* ============================================================ */}
              <hr />
            </div>

            <div className="container-login-2">
              <div>
                <p>Log in with:</p>
              </div>

              <div className="container-login-2-1">
                <h3 className="text-h3-login">UTILISEZ VOTRE COMPTE AMAZON</h3>
                <p>
                  Avec Amazon Pay et Connexion avec Amazon, vous pouvez
                  facilement vous connecter et utiliser les informations
                  d’expédition et de paiement stockées dans votre compte Amazon
                  pour passer une commande dans cette boutique.
                </p>
                <hr />

                <div className="container-login-2-2">
                  <Link to="/register">
                    <p>Pas de compte? Créez-en un ici</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLogin;