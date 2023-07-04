import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const InformationCompteCard = () => {
  const {
    handleSubmit,
    register,
    formState: { Error },
  } = useForm();

  const onSubmit3 = (data) => {
    /*  axios.post('http://localhost:3002/api/login',data)
     .then((reponse)=>{
        console.log(reponse);
     })
     .catch((error)=>{
        console.log(error);
     }) */


  };
  return (
    <>
      <div className="information-root-conatiner">
        {/* <div className="information-container-form">
          <form onSubmit={handleSubmit(onSubmit3)} className="-container-form">
            <label>Nom</label>
            <input type="text" {...register("nom", { required: true })} />

            <label>Prenom</label>
            <input type="text" {...register("prenom", { required: true })} />

            <label>adresse</label>
            <input type="text" {...register("nom", { required: true })} />

       


            <button className="button-save" type="submit">
                   Sauvegarder
                  </button>
          </form>
        </div> */}

<div className="w-1/2 mt-32  " >
       <form className="h-auto w-70">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
           Nom
          </label>
        </div>
        <div className="">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" {...register("nom", { required: true })} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Prenom
          </label>
        </div>
        <div className="">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" {...register("nom", { required: true })} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
           Adresse  
          </label>
        </div>
        <div className="">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" {...register("nom", { required: true })} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
           Password    {"  "}
          </label>
        </div>
        <div className="">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" {...register("nom", { required: true })} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">
            J'accepte toute les modifications 
          </span>
        </label>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-[#d00020] hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            sauvegarder
          </button>
        </div>
      </div>
    </form>
      
       </div>



      </div>
    </>
  );
};

export default InformationCompteCard;
