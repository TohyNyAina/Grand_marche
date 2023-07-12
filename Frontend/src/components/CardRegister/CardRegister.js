import React from 'react'
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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
        toast.success('Enregistrer avec succes')
        console.log(response);
      }).catch(error => {
        console.log(error);
        toast.error("Erreur lors de l'enregistrement")
      });
      navigate('/login');
  }

  return (
    <>
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
          <Toaster/>
        </form>
      </div>
    </div>
    </>
  )
}

export default CardRegister;