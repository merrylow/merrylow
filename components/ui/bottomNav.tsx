"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ShoppingCartIcon, UserCircleIcon, ShoppingBagIcon } from "@heroicons/react/16/solid";

const BottomNavigation = () => {
     const pathname = usePathname(); // Get current URL path

     return (
          <section className="fixed bottom-0 left-0 w-full h-[13%] flex items-center justify-center bg-[#16191e] border-t shadow-lg text-[#eaeaea]">
               <div className="w-[94%] flex justify-between items-center px-4 py-2">
                    {/* Home */}
                    <Link
                         href="/"
                         className={`text-[14px] flex flex-col items-center ${
                              pathname === "/" ? "text-[#a12fda] font-bold" : "text-gray-500"
                         }`}
                    >
                         <HomeIcon className="w-5" />
                         <span>Home</span>
                    </Link>

                    {/* Order Now */}
                    <Link
                         href="/order-now"
                         className={`text-[14px] flex flex-col items-center ${
                              pathname === "/order-now" ? "text-[#a12fda] font-bold" : "text-gray-500"
                         }`}
                    >
                         <ShoppingBagIcon className="w-5" />
                         <span>Order Now</span>
                    </Link>

                    {/* Cart */}
                    <Link
                         href="/cart"
                         className={`text-[14px] flex flex-col items-center ${
                              pathname === "/cart" ? "text-[#a12fda] font-bold" : "text-gray-500"
                         }`}
                    >
                         <ShoppingCartIcon className="w-5" />
                         <span>Cart</span>
                    </Link>

                    {/* My Account */}
                    <Link
                         href="/my-account"
                         className={`text-[14px] flex flex-col items-center ${
                              pathname === "/my-account" ? "text-[#a12fda] font-bold" : "text-gray-500"
                         }`}
                    >
                         <UserCircleIcon className="w-5" />
                         <span>My Account</span>
                    </Link>
               </div>
          </section>
     );
};

export default BottomNavigation;
