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
      <nav className="flex flex-col justify-center ml-10">
        <div className="flex justify-center gap-96 w-full h-1/2 items-center">
          <div>
            <a href="https://www.facebook.com/BoutikNakaEnLigne/" className=" decoration-inherit">
              <GrFacebookOption className="hover:text-primary" />
            </a>
          </div>
          <div className="flex">
            <ul className="flex gap-3 cursor-pointer list-none">
              <li className="hover:text-primary">Compare</li>
              <li>|</li>
              <li className="hover:text-primary">MGA Ar</li>
            </ul>
          </div>
        </div>
        
        <div className="w-[90%] ">
          <div className="flex w-auto">
            <div className="px-4">
              <Link to="/">
                <img src={logo} alt="logo" width={100} />
              </Link>
            </div>

            <div className="flex items-center">
              
              <div className="">
                <ul className="flex gap-7">
                  <Link to="/">
                    {" "}
                    <li className="flex text-black text-center text-sm gap-2">
                      {" "}
                      <div>
                        <MdStore size={25} />
                      </div>{" "}
                      <label className="hover:text-primary cursor-pointer duration-500">Aceuill</label>
                    </li>{" "}
                  </Link>
                  {/* <Link to="/faire-un-devis">
                    {" "}
                    <li className="flex text-black text-center text-sm gap-2">
                      {" "}
                      <div>
                        <AiFillCalculator size={25} />
                      </div>{" "}
                      <label className="hover:text-primary cursor-pointer duration-500">Faire un devis</label>
                    </li>{" "}
                  </Link> */}
                  <Link to="/vendors">
                    {" "}
                    <li className="flex text-black text-center text-sm gap-2">
                      {" "}
                      <div>
                        <FaStoreAlt size={25} />
                      </div>{" "}
                      <label className="hover:text-primary cursor-pointer duration-500">Place de Marche</label>
                    </li>{" "}
                  </Link>
                </ul>
              </div>

              <div className="ml-[60px] mt-[3px]">
                <ul className="flex justify-center items-center mb-1">
                  <Link to="/login">
                    {" "}
                    <li className="hover:text-primary duration-500">CONNEXION/</li>
                  </Link>
                  <Link to="/compte">
                    {" "}
                    <li className="text-sm text-black hover:text-primary duration-500 ">MON COMPTE</li>
                  </Link>
                </ul>
              </div>

              <div className="flex w-14 gap-2 ml-5">
                <div className="flex items-center">
                  <Link to="/favori">
                    <AiOutlineHeart size={25} className="effect-color-icon" />
                  </Link>
              
                   <span className="bg-primary rounded-[50%] w-6 h-3/4 text-white flex justify-center items-center">0</span>

                </div>

                <div className="flex items-center">
                  <Link to="/panier">
                    <MdOutlineLocalGroceryStore
                      size={25}
                      className="effect-color-icon"
                    />
                  </Link>

                  <span className="bg-primary rounded-[50%] w-6 h-3/4 text-white flex justify-center items-center">{panier_product.length || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
