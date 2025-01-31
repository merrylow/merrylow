"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoFastFood } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";


const BottomNavigation = () => {
     const pathname = usePathname(); // Get current URL path

     return (
          <section className="fixed bottom-0 left-0 w-full h-[4.5em] flex items-center justify-center bg-[#16191e] shadow-lg text-[#eaeaea]">
               <div className="w-[94%] flex justify-between items-center px-4 py-2">
                    {/* Home */}
                    <Link
                         href="/"
                         className={`text-[14px] flex flex-col items-center ${
                              pathname === "/" ? "text-[#a12fda] font-bold" : "text-gray-500"
                         }`}
                    >
                         <AiFillHome className="w-6" />
                         <span>Home</span>
                    </Link>

                    {/* Order Now */}
                    <Link
                         href="/order-now"
                         className={`text-[14px] flex flex-col items-center ${
                              pathname === "/order-now" ? "text-[#a12fda] font-bold" : "text-gray-500"
                         }`}
                    >
                         <IoFastFood className='w-6 h-6' />
                         <span>Order Now</span>
                    </Link>

                    {/* Cart */}
                    <Link
                         href="/cart"
                         className={`text-[14px] flex flex-col items-center ${
                              pathname === "/cart" ? "text-[#a12fda] font-bold" : "text-gray-500"
                         }`}
                    >
                         <FaCartShopping className="w-5 h-5" />
                         <span>Cart</span>
                    </Link>

                    {/* My Account */}
                    <Link
                         href="/my-account"
                         className={`text-[14px] flex flex-col items-center ${
                              pathname === "/my-account" ? "text-[#a12fda] font-bold" : "text-gray-500"
                         }`}
                    >
                         <FaUserCircle className="w-5 h-5" />
                         <span>My Account</span>
                    </Link>
               </div>
          </section>
     );
};

export default BottomNavigation;
