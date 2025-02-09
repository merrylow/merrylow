"use client";

const SearchResults = ({ query } : { query: string }) => {
     return (
          <div className="w-[90%] mx-auto mt-7 text-lg text-center">
               <p>{query ? `Search results for '${query}'` : "Our Menu"}</p>
          </div>
     );
};

export default SearchResults;