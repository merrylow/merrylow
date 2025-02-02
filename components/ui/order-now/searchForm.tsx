'use client'

import Form from "next/form";
import { FaSearch } from 'react-icons/fa';
import SearchFormResetButton from "./searchFormResetButton";
import { useFormStatus } from "react-dom";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// import { useState } from "react";


const SearchForm = ({ onSearch }: { onSearch: (query: string) => void }) => {
     // const query = 'test'
     // const status = useFormStatus();bb
     const searchParams = useSearchParams(); //gets search params(eg. 'waffles')
     const pathname = usePathname(); //gets current path(/order-now)
     const { replace } = useRouter(); //replaces url without page reload
     const query = searchParams.get("query") || "";

     function handleSearch(term: string) { //updates the url without a page reload
          // console.log(term);
          // setQuery(term); // Update state
          onSearch(term);

          const params = new URLSearchParams(searchParams.toString()); //updates query params dynamically & converts search params to a string

          if (term) {
               params.set('query', term);
          } else {
               params.delete('query');
          }
          replace(`${pathname}?${params.toString()}`); //updates url dynamically(without reload)
     }


     return (
          <Form action='/' className="border-2">
               <div className="flex w-[50%]">
                    <input 
                         type="text" 
                         name="query"
                         placeholder="Search dishes"
                         // defaultValue={query}
                         defaultValue={searchParams.get('query') || ''} //keeps input synced with url
                         onChange={(e) => {
                              handleSearch(e.target.value); //updates as user types
                         }}
                         aria-label="search-button"
                         className="border border-red-500"
                    /> 
                    <div className="flex gap-2">
                         <button type="submit" className="search-btn" title="search button">
                              <FaSearch />
                         </button>
                    </div>
               </div>
          </Form>
     )
}

export default SearchForm