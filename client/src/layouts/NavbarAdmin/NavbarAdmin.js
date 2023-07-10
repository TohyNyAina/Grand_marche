import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu, MdPerson, MdShoppingCart, MdChecklist, MdOutlineShoppingBag, MdHome, MdLogout, MdClear } from 'react-icons/md'

const NavbarAdmin = () => {
  const navigate = useNavigate();

  const handleDeconnexion =()=>{

    
    document.cookie = `token_jwt=;expires=${new Date(0).toUTCString()}`
    navigate('/')
 }

  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className='p-5'>
      <div ref={menuRef} className={`${menu ? "translate-x-0 shadow-xl" : "-translate-x-full"} md:translate-x-0 ease-in-out duration-300 fixed top-0 left-0 z-40 h-screen w-[65%] md:w-[20%] bg-primary`}>
        <div className='py-3 rounded-r-lg space-y-7 text-white'>
          <div className='px-4 text-end'><button onClick={handleMenu} className='md:hidden bg-secondary text-white rounded-full p-1'><MdClear size={30} /></button></div>
          <h1 className='p-4 text-white text-xl font-semibold'>Admin Dashboard</h1>
          <div className='flex flex-col items-start'>
            <Link to="/admin/gestion-user" className='hover:text-red-100 hover:bg-secondary rounded-l-lg text-lg px-4 py-3 w-full flex items-center gap-1'><MdPerson /> Gestion Utilisateur</Link>
            <Link to="/admin" className='hover:text-red-100 hover:bg-secondary rounded-l-lg text-lg px-4 py-3 w-full flex items-center gap-1'><MdShoppingCart /> Gestion Produit</Link>
            <Link to="/admin/commande" className='hover:text-red-100 hover:bg-secondary rounded-l-lg text-lg px-4 py-3 w-full flex items-center gap-1'><MdOutlineShoppingBag /> Commande</Link>
            <Link to="/admin/livraison" className='hover:text-red-100 hover:bg-secondary rounded-l-lg text-lg px-4 py-3 w-full flex items-center gap-1'><MdOutlineShoppingBag /> Historique de livrason</Link>
            <Link to="/" className='hover:text-red-100 hover:bg-secondary rounded-l-lg text-lg px-4 py-3 w-full flex items-center gap-1'><MdHome /> Revenir au site</Link>
            <button onClick={handleDeconnexion} className='hover:text-red-100 hover:bg-secondary rounded-l-lg text-lg px-4 py-3 w-full flex items-center gap-1'><MdLogout /> <span >deconnexion</span></button>
          </div>
        </div>
      </div>
      <button onClick={handleMenu} className='bg-primary text-white rounded-lg p-1 shadow-md md:hidden'><MdMenu size={35} /></button>
    </div>
  );
};

export default NavbarAdmin;
