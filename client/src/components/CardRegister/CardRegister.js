import React from 'react'
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from 'axios';

const CardRegister = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();

  axios.defaults.withCredentials = true;

  const onSubmit = (data) => {
    if (data.passwordRegister !== data.confirmPassword) {
      alert("Le mot de passe et la confirmation du mot de passe doivent correspondre.");
      return;
    }

    axios.post('http://localhost:3002/api/register', data)
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
      navigate('/login');
  }

  return (
    <>
      {/* <div className="text-connexion">
        <h2>Créez votre compte:</h2>
      </div>
      <div className="login-root">
        <div className="register-root-container">
          <div className="container-login">
            <div className="container-login-1">
              <form onSubmit={handleSubmit(onSubmit)} className="fomr-container">
                <div className="form-container-register">
                <div className="form-1">
                    <div className="label-form">
                      <label>Nom</label>
                    </div>
                    <div className="form-login-input">
                      <input type="text" {...register('nomRegister', { required: true })}  className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-sm bg-gray-200"/>
                      {errors.nomRegister && (<p style={{ color: 'red' }}>Votre nom est requis</p>)}
                    </div>
                  </div>

                  <div className="form-1">
                    <div className="label-form">
                      <label>Adresse</label>
                    </div>
                    <div className="form-login-input">
                      <input type="text" {...register('adresseRegister', { required: true })} className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-sm bg-gray-200"/>
                      {errors.adresseRegister && (<p style={{ color: 'red' }}>Votre adresse est requis</p>)}
                    </div>
                  </div>
                  
                  <div className="form-1">
                    <div className="label-form">
                      <label>Email</label>
                    </div>
                    <div className="form-login-input">
                      <input type="email" {...register('emailRegister', { required: true })} className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-sm bg-gray-200"/>
                      {errors.emailRegister && (<p style={{ color: 'red' }}>Votre email est requis</p>)}
                    </div>
                  </div>

                  <div className="form-2">
                    <div className="label-form">
                      <label>Mot de passe</label>
                    </div>
                    <div className="form-login-input">
                      <input type="password" {...register('passwordRegister', { required: true })} className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-sm bg-gray-200"/>
                      {errors.passwordRegister && (<p style={{ color: 'red' }}>Votre mot de passe est requis</p>)}
                    </div>
                  </div>

                  <div className="form-2">
                    <div className="label-form">
                      <label>Confirmer mot de passe</label>
                    </div>
                    <div className="form-register-input">
                      <input type="password" {...register('confirmPassword', { required: true })} className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-sm bg-gray-200"/>
                      {errors.confirmPassword && (<p style={{ color: 'red' }}>Veuillez confirmer votre mot de passe</p>)}
                    </div>
                  </div>
                </div>

                <div className="button-container">
                  <p>Mot de passe oublié?</p>

                  <button className="bg-blue-900 w-28 h-12 text-white rounded-lg hover:bg-blue-800" type="submit" disabled={isSubmitting}>
                    Sauvegarder
                  </button>
                </div>
              </form>
            </div>

            <div className="container-login-2">
              <div></div>

              <div className="container-login-2-1">
                <h3 className="text-h3-login">UTILISEZ VOTRE COMPTE AMAZON</h3>
                <p>
                  Avec Amazon Pay et Connexion avec Amazon, vous pouvez facilement vous connecter et utiliser les informations d’expédition et de paiement stockées dans votre compte Amazon pour passer une commande dans cette boutique.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
          <br/><br/>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Inscription
          </p>

          <div>
            <label for="name" className="sr-only">
              Nom
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Votre Nom"
                {...register('nomRegister', { required: true })}
              />
              {errors.nomRegister && (<p style={{ color: 'red' }}>Votre nom est requis</p>)}
            </div>
          </div>

          <div>
            <label for="name" className="sr-only">
              Adresse
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Votre Adresse"
                {...register('adresseRegister', { required: true })}
              />
              {errors.adresseRegister && (<p style={{ color: 'red' }}>Votre adresse est requis</p>)}
            </div>
          </div>

          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Votre Email"
                {...register('emailRegister',{required:true})}
              />
              {errors.emailRegister && (<p style={{color:'red'}}> your email is required</p>)}
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Mot de passe
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Votre mot de passe"
                {...register('passwordRegister',{required:true})}
              />
              {errors.passwordRegister && (<p style={{color:'red'}}> your password is required</p>)}
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Confirmer votre mot de passe
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Votre mot de passe"
                {...register('confirmPassword',{required:true})}
              />
              {errors.confirmPassword && (<p style={{color:'red'}}> please confirm your password</p>)}
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:bg-blue-600"
          >
            S'inscrir
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default CardRegister;