"use client";

import { useState } from "react";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";

const SearchSection = () => {
    const [query, setQuery] = useState(""); // ✅ Keep state in a client component

     return (
          <div className="w-[90%] min-w-sm mx-auto mt-10">
               <div className="w-[50%] mx-auto border border-green-500">
                    <SearchForm onSearch={setQuery} />
               </div>

               <SearchResults query={query} />
          </div>
     );
};

export default SearchSection;
