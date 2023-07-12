import React from 'react';
import NavbarAdmin from '../../layouts/NavbarAdmin/NavbarAdmin';
import './AdminAjoutProduit.css';

const AdminAjoutProduit = () => {
    return (
        <div className="admin-page-root">
            <div className="sidebar-container">
                <NavbarAdmin />
            </div>
            <div className="page-admin-container">
                <div className='cardform'>
                    <form>
                        <h1 className='ajout'>Ajout du produit.</h1>
                        <br/>
                        
                        
                        <label className='lb'>Nom du produit</label> 
                        <label className='tp'>Photo</label>
                        <br/>
                        <input type="text" className='ip'/>
                        <input type="file" className='ip'/>
                        <br/> <br/>

                        <label className='lb'>Prix Unitaire </label>
                        <label className='tp'>Type</label>
                        <br/>
                        <input type="number" className='ip'/>
                        <input type="text" className='ip'/>
                        <br/> <br/>

                        <label className='lb'>Prix de gros </label>
                        <label className='tp'>Code</label>
                        <br/>
                        <input type="number" className='ip'/>
                        <input type="text" className='ip'/>
                        <br/> <br/>

                        <button type="button" class="ajbutton">Ajouter</button>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAjoutProduit;
