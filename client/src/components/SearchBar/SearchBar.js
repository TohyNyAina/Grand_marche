import React  from "react";
import { BsSearch } from "react-icons/bs";
import iconContact from '../../assets/jpg/icon_contact.png'

const SearchBar = ({Search,setSearch,handleClick}) => {
  return (
    <>
      <div className="w-full h-24 flex justify-start gap-10 ">
        <div className="flex gap-0">
          <input
            className=" input border-r-0 p-2 rounded-tl-[20px] rounded-tr-[20px] w-14 h-12 outline-none"
            type="text"
            placeholder="search here..."
            value={Search}
            onChange={(e)=>setSearch(e.target.value)}
            
          />{" "}
          <button onClick={handleClick}  className="bg-primary border-0 w-14 h-12 rounded-tr-[20px] rounded-br-[20px] gap-0 text-white cursor-pointer hover:bg-[rgba(255, 0, 0, 0.728)] duration-500">
            {" "}
            <BsSearch />
          </button>

        </div>

        <div className="flex gap-2 mt-1 h-1/2 w-[120px]">
              <img src={iconContact} width={30} height={30} alt="icon" />
              
              <div className="w-full">
              <p>(+261) 32 55 504 44</p>
                      <p>Service client</p>
              </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
