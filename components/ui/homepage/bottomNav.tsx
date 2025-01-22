import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/16/solid';

const BottomNavigation = () => {
     return (
     <section className="fixed bottom-0 left-0 w-full h-20 flex md:none items-center justify-center bg-slate-800 border-t border-gray-200 shadow-lg text-white">
          <div className="w-[94%] flex justify-between items-center px-4 py-2">
               <Link href="/" className="flex items-center text-gray-500 hover:text-blue-500">
                    <div>
                         <HomeIcon />
                    </div>
                    <div className="ml-2">Home</div>
               </Link>
               <Link href="/order-now" className="flex items-center text-gray-500 hover:text-blue-500">
                    <div></div>
                    <div className="ml-2">Order Now</div>
               </Link>
               <Link href="/cart" className="flex items-center text-gray-500 hover:text-blue-500">
                    <div></div>
                    <div className="ml-2">Cart</div>
               </Link>
               <Link href="/account" className="flex items-center text-gray-500 hover:text-blue-500">
                    <div></div>
                    <div className="ml-2">My Account</div>
               </Link>
          </div>
     </section>
     );
};

export default BottomNavigation;