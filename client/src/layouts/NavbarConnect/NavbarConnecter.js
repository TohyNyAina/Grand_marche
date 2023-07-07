import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrFacebookOption } from "react-icons/gr";
import { MdStore, MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { AiFillCalculator, AiOutlineHeart } from "react-icons/ai";
import logo from "../../assets/jpg/logo.jpg";
import { Link } from "react-router-dom";


const NavbarConnecter = ({ history }) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const panier_product = useSelector((state) => state.panier?.items);

  useEffect(() => {
    const handleScroll = () => {
      const isFixed = window.pageYOffset > 0;
      setIsNavbarFixed(isFixed);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = isNavbarFixed
    ? "fixed border-gray-300 duration-300 rounded-lg top-0 left-0 right-0 bg-white shadow z-50"
    : "";
  const mobileMenuClassName = isMobileMenuOpen ? "block" : "hidden";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    // Effacer le cookie
    document.cookie =
      "token_jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <div>
      <nav className="flex flex-col justify-center ml-10 fixed top-0 left-0 w-full z-50 bg-white shadow">
        <br />
        <div className="w-[90%]">
          <div className="flex">
            <div className="px-4 mb-4 w-full md:w-auto md:flex-initial">
              <Link to="/">
                <img src={logo} alt="logo" width={100} />
              </Link>
            </div>

            <div className="flex items-center">
              <div className="">
                <ul className="flex gap-7">
                  <Link to="/">
                    <li className="flex text-black text-center text-sm gap-2">
                      <div>
                        <MdStore size={25} />
                      </div>
                      <label className="hover:text-primary cursor-pointer duration-500">
                        Accueil
                      </label>
                    </li>
                  </Link>
                  <Link to="/vendors">
                    <li className="flex text-black text-center text-sm gap-2">
                      <div>
                        <FaStoreAlt size={25} />
                      </div>
                      <label className="hover:text-primary cursor-pointer duration-500">
                        Place de Marche
                      </label>
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="flex w-14 gap-2 ml-5">
                <div className="flex items-center">
                  <Link to="/favori">
                    <AiOutlineHeart size={25} className="effect-color-icon" />
                  </Link>
                  <span className="bg-primary rounded-[50%] w-6 h-3/4 text-white flex justify-center items-center">
                    0
                  </span>
                </div>

                <div className="flex items-center">
                  <Link to="/panier">
                    <MdOutlineLocalGroceryStore
                      size={25}
                      className="effect-color-icon"
                    />
                  </Link>
                  <span className="bg-primary rounded-[50%] w-6 h-3/4 text-white flex justify-center items-center">
                    {panier_product.length || 0}
                  </span>
                </div>

                <div>
                  
                    <Link to="/compte">
                      <p className="mt-4 px-7 text-sm text-black hover:text-primary duration-500">
                        MON_COMPTE
                      </p>
                    </Link>
                 
                </div>

                <div className="ml-[60px] mt-[3px]">
                  <ul className="flex justify-center items-center mb-1">
                    <Link to="/login">
                      <li
                        className="px-7 mt-1 w-full text-white bg-blue-600 hover:bg-blue-400 py-2 rounded-xl shadow-lg"
                        onClick={handleLogout}
                      >
                        DECONNEXION
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarConnecter;
