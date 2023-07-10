import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CardLogin = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  axios.defaults.withCredentials = true;

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3002/api/login", data)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        document.cookie = `token_jwt=${token}`;
        const user = response.data.user;
        if (user.type === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Nom d'utilisateur ou mot de passe incorrect");
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <br/><br/>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Connexion à votre compte
          </p>

          <div>
            <label className="sr-only">Email</label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Votre Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>Votre email est requis</p>
              )}
            </div>
          </div>

          <div>
            <label className="sr-only">Password</label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Votre mot de passe"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p style={{ color: "red" }}>Votre mot de passe est requis</p>
              )}
              {errorMessage && (
                <p style={{ color: "red" }}>{errorMessage}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:bg-blue-600"
          >
            Se connecter
          </button>

          <p className="text-center text-sm text-gray-500">
            Vous n'avez pas de compte?
            <Link className="underline" to="/register">
              S'inscrire
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CardLogin;
