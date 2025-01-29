import Link from 'next/link';
import { HomeIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/16/solid';

const BottomNavigation = () => {
     return (
     <section className="fixed bottom-0 left-0 w-full h-20 flex items-center justify-center bg-slate-800 border-t border-gray-200 shadow-lg text-white">
          <div className="w-[94%] flex justify-between items-center px-4 py-2">
               <Link href="/" className="text-gray-500 hover:text-blue-500">
                    <span>
                         <HomeIcon fontSize={10} />
                    </span>
                    <span className="ml-2">Home</span>
               </Link>
               <Link href="/order-now" className="text-grayb-500 hover:text-blue-500">
                    <div>
                         
                    </div>
                    <div className="ml-2">Order Now</div>
               </Link>
               <Link href="/cart" className=" text-gray-500 hover:text-blue-500">
                    <div>
                         {/* <ShoppingCartIcon /> */}
                    </div>
                    <div className="ml-2">Cart</div>
               </Link>
               <Link href="/my-account" className="text-gray-500 hover:text-blue-500">
                    <div>
                         {/* <UserCircleIcon width={150} height={30} /> */}
                    </div>
                    <div className="ml-2">My Account</div>
               </Link>
          </div>
     </section>
     );
};

export default BottomNavigation;