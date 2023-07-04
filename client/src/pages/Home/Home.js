import React ,{useState,useEffect} from "react";
import axios from 'axios'
import Navbar from "../../layouts/Navbar/Navbar";
import CardProduit from "../../components/CardProduit/CardProduit";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Categorie from "../../components/Categorie/Categorie";
import SearchBar from '../../components/SearchBar/SearchBar'
import homeImage from '../../assets/jpg/7a04469e89f0c5be97fdd66ffde3a66014312eb8_couverture-min.jpg'


const Home = () => {
const [Search, setSearch] = useState('');
const [produitData,setProduitData] = useState([]);
const [filterSearch, setFilterSearch] = useState();



const filterItems = (item)=>{
  const regexp = new RegExp(item,'i')
  return produitData.filter((elmts)=>  regexp.test(elmts.name) || regexp.test(elmts.description))
}

const handelclick =()=>{
   const searchResult= filterItems(Search)
   console.log(searchResult);
   setFilterSearch(searchResult);
}



useEffect(()=>{

const getData  = async()=>{
 try {
  const result = await axios.get('http://localhost:3002/user/getAll')
  
  setProduitData(result.data.data)

  
 } catch (error) {
   console.log(error);
 }
}

getData()




},[])

  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center px-24 w-full h-auto mt-24">

    
        <div className="flex w-[65%] h-full">

{/* ato no misy categorie */}
 <div className="w-[40%]">
          


         <Categorie/>

        </div>
         

       {/*   ato mappena sy  filtrena ny produit */}

        <div className="w-[75%] ml-12">
        <SearchBar Search={Search} setSearch={setSearch} handleClick={handelclick} />
         
          <div>
                    <img src={homeImage} alt="imghome" width={860}  />
          </div>

          <h2>porduits</h2>
           
           
           <div className="porduits-container-card grid grid-cols-2">
               
           {
              filterSearch?.length > 0 && Search.length > 0
              ?
              (filterSearch.map((elmt) =><CardProduit data={elmt}  />))
              :
              (produitData.map((elmt) =><CardProduit data={elmt} />))
            }
           </div>

               
              
        </div>

        </div>
       
      </div>

      <Footer />
    </>
  );
};

export default Home;
