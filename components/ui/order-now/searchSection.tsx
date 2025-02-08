"use client";

import { useState } from "react";
import { Store, Product } from "@/lib/definitions";
import SearchBar from "./searchBar";
import SearchResults from "./searchResults";
// import Loading from "@/app/loading";
import OrderNow from "./allStoresAndProducts";
import AllStoresAndProducts from "./allStoresAndProducts";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const SearchSection = ({ stores, products } : { stores: Store[], products: Product[] }) => {
     const [query, setQuery] = useState(""); // Manages search state locally

     const handleReset = () => setQuery(""); // Clears input and results

     const normalizedQuery = query.trim().toLowerCase();
     const filteredProducts = normalizedQuery
          ? products.filter((product) => product.name.toLowerCase().includes(normalizedQuery))
          : products;


     return (
          <div className="w-[90%] min-w-sm mx-auto mt-10">
               <div className="w-[50%] mx-auto relative">
                    <SearchBar query={query} onSearch={setQuery} />

                    <button type="button" title="Reset button" onClick={handleReset} className={ query.length > 0 ? 'block absolute top-0 right-8' : 'top-0 right-8 absolute hidden'}>
                         <MdClear />
                    </button>

                    <FaSearch className="absolute top-1.5 right-2.5" />
               </div>

               <SearchResults query={query} />

               <AllStoresAndProducts stores={stores} products={filteredProducts} query={query} />
          </div>
     );
};

export default SearchSection;
