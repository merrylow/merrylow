"use client";

const SearchResults = ({ query }: { query: string }) => {
     return (
          <div className="w-[100%]">
               <p>{query ? `Search results for '${query}'` : "All our meals"}</p>
          </div>
     );
};

export default SearchResults;
