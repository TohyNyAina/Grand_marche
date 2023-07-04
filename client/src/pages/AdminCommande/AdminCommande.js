import React from 'react';
import NavbarAdmin from '../../layouts/NavbarAdmin/NavbarAdmin'
import CardCommande from '../../components/CardCommande/CardCommande';


const AdminCommande = () => {
    return (
        <div className='text-slate-900 md:grid md:grid-cols-4 gap-0'>
        <NavbarAdmin />
        <div className='space-y-11 md:col-span-3'>
            <CardCommande/>
            
            

           
            <div className='md:grid md:grid-cols-4 md:gap-3 py-4 w-[90%]'>
               
            </div>
            
        </div>
    </div>
    );
}

export default AdminCommande;
