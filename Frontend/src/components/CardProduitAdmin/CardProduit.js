import React from 'react'
import { Link } from 'react-router-dom'

const CardProduit = () => {
  return (
    <div className='text-slate-900 flex flex-col min-w-sm md:min-w-xs rounded-lg shadow-md border hover:shadow-primary'>
        <img src="https://s.alicdn.com/@sc04/kf/H5e3cf51b911347c98467948d234866b6W.jpg_200x200.jpg" alt="" className='rounded-t-lg' />
        <div className='p-3 flex flex-col space-y-3'>
            <Link to="/product/detail" className="font-semibold text-xl hover:underline hover:underline-offset-2">Laptop</Link>
            <p className='text-sm text-gray-500'>Electronics</p>
            <h1 className='text-xl font-bold'>$759.99</h1>
            <button className='bg-primary text-white hover:bg-secondary shadow-sm rounded-md p-1'>Ajouter au panier</button>
        </div>
    </div>
  )
}

export default CardProduit