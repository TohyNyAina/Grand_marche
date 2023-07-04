import React, {useEffect, useState} from 'react'
import './AG.css'
import axios from 'axios';
import NavbarAdmin from "../../layouts/NavbarAdmin/NavbarAdmin";
const AdminGestionUser = () => {

const [userData, setUserData] = useState([])

  useEffect(()=>{

    const getDataUser  = async()=>{
     try {
      const result = await axios.get('http://localhost:3002/api/alldata')
      
      setUserData(result.data)
            
      
     } catch (error) {
       console.log(error);
     }
    }
    
    getDataUser()
    
    
      
    
    },[])

    const handleRemove = (id)=>{
         try {
          const deleteUser = async ()=>{
            const result = await axios.delete(`http://localhost:3002/api/deleteUser/${id}`)
            /* console.log(result); */
            setUserData((prevState)=>prevState.filter(n=> n.id != id))
         }

         deleteUser()
         } catch (error) {
          console.log(error);
         }
       
    }


  return (
    <div className="admin-page-root">
      <div className="sidebar-container">
        <NavbarAdmin />
      </div>

      <div className="w-full flex content-center ">
          
  
  
 
          <section className="w-fcontainer mx-auto p-8 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Nom</th>
                  <th className="px-4 py-3">Prenom</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Adresse</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Date inscription</th>
                  <th className="px-4 py-3">Action</th>
                 
                </tr>
              </thead>
              <tbody className="bg-white">
               
                {userData.map((elemts)=>(
                   <tr className="text-gray-700">
                          <td className="px-4 py-3 text-sm border">{elemts.nom}</td>
                          <td className="px-4 py-3 text-sm border">{elemts.prenom}</td>
                          <td className="px-4 py-3 text-sm border">{elemts.type}</td>
                          <td className="px-4 py-3 text-sm border">{elemts.adresse}</td>
                          <td className="px-4 py-3 text-sm border">{elemts.email}</td>
                          <td className="px-4 py-3 text-sm border">{elemts.date}</td>
                          <td className="px-4 py-3 text-sm border">
                    
                    <button onClick={()=>handleRemove(elemts.id)} type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
                  </td>

                          </tr>
                 
                   ))}
                   
                 
                  
                
              </tbody>
            </table>
          </div>
        </div>
      </section>



      </div>
    </div>
  )
}

export default AdminGestionUser