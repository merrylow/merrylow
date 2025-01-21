import { Bars3Icon, MapPinIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
     return (
          <nav className="h-12 flex justify-between items-center px-3 pt-1">
               <section className="location flex items-center">
                    <span>
                         <MapPinIcon width={24} />
                    </span>
                    <h2 className="pt-1">University of Ghana</h2>
               </section>

               <section className="hamburger md:hidden">
                    <Bars3Icon className="border-[1px] rounded-[2px] px-[3px]" width={38} />
               </section>
          </nav>
     );
}