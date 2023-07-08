import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ConditionUtilisation from './pages/ConditionsUtilisation/ConditionUtilisation'
import './App.css';


import {Route,Routes} from "react-router-dom"
import PlaceMarche from './pages/PlaceMarche/PlaceMarche'
import Devis from './pages/Devis/Devis'
import Register from './pages/Register/Register';
import Panier from './pages/Panier/Panier';
import Admin from './pages/Admin/Admin';
import Compte from './pages/Compte/Compte';
import Favoris from './pages/Favori/Favoris'
import Livraison from './pages/Livraison/Livraison';
import AdminGestoinProduit from './pages/AdminGestionProduit/AdminGestoinProduit';
import CompteInformation from './pages/CompteInformation/CompteInformation'
import AdminGestionUser from './pages/AdminGestionUser/AdminGestionUser';
import AdminAjoutProduit from './pages/AdminAjoutProduit/AdminAjoutProduit';
import AdminCommande from './pages/AdminCommande/AdminCommande';

import { AuthAdmin_layout , AuthClient_layout , Authentified_layout } from './Auth';

function App() {
  return (
    <div className="App">

         <Routes >
              <Route element={<AuthAdmin_layout />}>
                {/* <Route path='/admin'  element={<Admin/>}/> */}
                <Route path='/admin' element={<AdminGestoinProduit/>}/>
                <Route path='/admin/gestion-user' element={<AdminGestionUser/>}/>
                <Route path='/admin/ajout-produit' element={<AdminAjoutProduit/>}/>
                <Route path='/admin/commande' element={<AdminCommande/>}/>
             </Route>
         </Routes>


     <Routes>
      <Route element={<Authentified_layout />}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
      </Route>
      <Route path='/' element={<Home/>}/>
     </Routes>
           <Routes>
              <Route element={<AuthClient_layout />}>
                
                <Route path='/vendors' element={<PlaceMarche/>} />
                <Route path='/faire-un-devis' element={<Devis/>} />
                <Route path='/condition' element={<ConditionUtilisation/>} />
                <Route path='/panier' element={<Panier/>} />
                <Route path='/compte' element={<Compte/>}/>
                <Route path='/compte/information' element={<CompteInformation/>} />
                <Route path='/favori' element={<Favoris/>}/>
                <Route path='/livraison' element={<Livraison/>}/>
              </Route>
           </Routes>
               
          
          
    </div>
  );
}

export default App;
