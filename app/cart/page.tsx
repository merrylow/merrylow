import CartItems from "@/components/ui/cart/cartItems"
import { Suspense } from "react"
import Loading from "../loading"
import PlaceOrderButton from "@/components/ui/cart/placeOrderButton"


const CartPage = () => {
     return (
          <section>
               {/* <section> */}
                    <div>
                         <h1>My Cart</h1>
                    </div>
                    
                    {/* <div> */}
                         {/* <PlaceOrderButton order={} /> */}
                    {/* </div> */}
               {/* </section> */}

               <Suspense fallback={<Loading />}>
                    <CartItems />
               </Suspense>
          </section>
     )
}

export default CartPage