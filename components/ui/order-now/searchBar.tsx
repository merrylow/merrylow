"use client";

import { FaSearch } from "react-icons/fa";


const SearchBar = ({ query, onSearch } : { onSearch: (query: string) => void, query: string }) => {
     
     return (
          <div className="flex w-[100%]">
               <input 
                    type="text" 
                    name="query"
                    placeholder="Search dishes..."
                    value={query} // Controlled component
                    onChange={(e) => onSearch(e.target.value)}
                    aria-label="search-button"
                    className="w-[100%] h-[30px] rounded-2xl pl-3 border border-slate-400"
               /> 
          </div>
     );
};

export default SearchBar;
