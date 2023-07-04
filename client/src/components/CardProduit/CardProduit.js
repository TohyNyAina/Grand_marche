import React from 'react'
import { Link } from 'react-router-dom'
import {BiCartAdd} from 'react-icons/bi'
import {AiOutlineHeart } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { addToPanier } from "../../Services/panier";

const CardProduit = ({data}) => {

  const Dispatch = useDispatch();

  const handleToPanier = (item_data) => {
    Dispatch(addToPanier(item_data))
  }

  return (
    <div className='text-slate-900 flex flex-col max-h-[520px] min-w-sm md:min-w-xs rounded-lg shadow-md border hover:shadow-primary'>
       <div className='flex justify-center items-center w-24'><img src={`http://localhost:3002/file/${data.image}`}  alt="" className='rounded-t-lg w-24' /></div> 
        <div className='p-3 flex flex-col space-y-3'>
            <Link to="/product/detail" className="font-semibold text-xl hover:underline hover:underline-offset-2">{data.name}</Link>
            <p className='text-sm text-gray-500'>{data.categorie}</p>
            <h1 className='text-xl font-bold'>{data.prix} Ar</h1>
            <button onClick={() => handleToPanier(data)} className='bg-primary text-white hover:bg-secondary shadow-sm rounded-md p-1 flex flex-row justify-evenly items-center'><BiCartAdd size={30}/>Ajouter au panier</button>
        </div>
    </div>
  )
}

export default CardProduit