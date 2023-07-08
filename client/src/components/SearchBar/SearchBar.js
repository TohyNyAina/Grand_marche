import React from "react";

const SearchBar = ({ Search, setSearch, handleClick }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white items-center justify-between flex rounded-full shadow-lg p-2 mb-5 sticky" style={{ top: '5px' }}>
        <input
          className="w-full font-bold uppercase rounded-full py-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="text"
          placeholder="search here..."
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleClick} className="bg-blue-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
          <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;