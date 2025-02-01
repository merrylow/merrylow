'use client'
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, MapPinIcon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


export default function Navbar() {
     const [isOpen, setIsOpen] = useState(false);
     const menuRef = useRef<HTMLDivElement | null>(null); // Reference for the menu
     const pathname = usePathname();

     // Close menu when clicking outside
     useEffect(() => {
          function handleClickOutside(event: MouseEvent) {
               if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                    setIsOpen(false); // Close menu if click is outside
               }
          }

          if (isOpen) {
               document.addEventListener("mousedown", handleClickOutside);
          }

          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
          };
     }, [isOpen]);


     // Closes menu & scroll to top when a route changes
     useEffect(() => {
          setIsOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
     }, [pathname]); 



     return (
          <nav className="h-16 flex justify-between items-center px-4 bg-[#16191e] text-[#eaeaea] relative">
               {/* Location */}
               <section className="flex items-center">
                    <MapPinIcon width={24} className="text-red-500" />
                    <h2 className="text-sm">University of Ghana</h2>
               </section>

               {/* Hamburger Icon */}
               <section className="md:hidden flex">
                    <button title="hamburger-button" type="button" onClick={() => setIsOpen(true)}>
                         <Bars3Icon className="text-[#b532f7]" width={36} />
                    </button>
               </section>

               {/* Mobile Menu - Slides Down from Top */}
               <section
                    ref={menuRef} // Attach ref here
                    className={`absolute top-0 left-0 w-full h-[70vh] bg-[#222] text-white flex flex-col p-4 pt-7 rounded-lg z-10
                    transition-all duration-500 ease-in-out transform
                    ${isOpen ? "translate-y-0 opacity-95 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}`}
               >
                    {/* Close Icon (Inside Menu) */}
                    <div className="flex justify-end">
                         <button title="hamburger-close" type="button" onClick={() => setIsOpen(false)}>
                              <XMarkIcon className="text-[#b532f7] w-7 mr-3" />
                         </button>
                    </div>

                    {/* Menu Links */}
                    <div className="w-[60%] h-[70%] mx-auto flex flex-col items-center justify-between mt-10">
                         <Link href="/" className="hover:text-[#b532f7]">Home</Link>
                         <Link href="/order-now" className="hover:text-[#b532f7]">Order Now</Link>
                         <Link href="/cart" className="hover:text-[#b532f7]">Cart</Link>
                         <Link href="my-account" className="hover:text-[#b532f7]">My Account</Link>
                         <Link href="#" className="hover:text-[#b532f7] inline">
                              Partners
                              <span><ChevronDownIcon className="w-4 inline ml-1" /></span>
                         </Link>
                    </div>
               </section>
          </nav>
     );
}