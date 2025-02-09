"use client";

import { useState, useRef, useEffect } from "react";
import { Store } from "@/lib/definitions";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";


const Dropdown = ({ stores } : { stores: Store[] }) => {
     const [isOpen, setIsOpen] = useState(false);
     const dropdownRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
               }
          };

          document.addEventListener("mousedown", handleOutsideClick); // For desktops
          document.addEventListener("touchstart", handleOutsideClick);
          return () => {
               document.removeEventListener("touchstart", handleOutsideClick);
               document.removeEventListener("mousedown", handleOutsideClick);
          };
     }, []);

     return (
     <div className="relative w-[95%] flex justify-center space-y-10" ref={dropdownRef}>
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="min-w-[80%] w-[85%] bg-gray-100 text-gray-800 py-2 px-4 rounded-lg text-[14.6px] text-center shadow-md"
          >
               Ericas and more...
               <span className="inline-block pl-1 relative top-[2.3px]">
                    <TiArrowSortedDown className="" />
               </span>
          </button>
          {isOpen && (
          <ul className="absolute w-full h-64 bg-white shadow-md rounded-lg z-10 overflow-y-scroll border border-gray-200">
               {stores.map((item) => (
                    <li key={item.id}>
                         <Link
                              href={`#store-${item.id}`}
                              className="block px-4 py-2 hover:bg-gray-100"
                              onClick={() => setIsOpen(false)}
                         >
                              {item.name}
                         </Link>
                    </li>
               ))}
          </ul>
          )}
     </div>
     );
};

export default Dropdown;
