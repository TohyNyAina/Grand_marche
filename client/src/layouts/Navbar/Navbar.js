import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { MdStore, MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { AiFillCalculator, AiOutlineHeart } from "react-icons/ai";
import logo from "../../assets/jpg/logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const panier_product = useSelector(state => state.panier?.items);

  return (
    <div>
      <nav className="flex flex-col justify-center ml-10 fixed top-0 left-0 w-full z-50 bg-white shadow">
        <br/>

        <div className="w-[90%]">
          <div className="flex flex-wrap">
            <div className="px-4 mb-4 w-full md:w-auto md:flex-initial">
              <Link to="/">
                <img src={logo} alt="logo" width={100} />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start w-full md:w-auto">
              <ul className="flex gap-7">
                <Link to="/">
                  <li className="flex text-black text-center text-sm gap-2">
                    <div>
                      <MdStore size={25} />
                    </div>{" "}
                    <label className="hover:text-primary cursor-pointer duration-500">Accueil</label>
                  </li>
                </Link>

                <Link to="/vendors">
                  <li className="flex text-black text-center text-sm gap-2">
                    <div>
                      <FaStoreAlt size={25} />
                    </div>{" "}
                    <label className="hover:text-primary cursor-pointer duration-500">Mes Commande</label>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="ml-[60px] mt-[3px]">
              <ul className="flex justify-center items-center mb-1">
                <Link to="/login">
                  <li className="px-7 mt-1 w-full text-white bg-blue-600 hover:bg-blue-400 py-2 rounded-xl shadow-lg">CONNEXION</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;