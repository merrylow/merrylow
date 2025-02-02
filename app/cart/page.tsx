import CartItems from "@/components/ui/cart/cartItems"
import { Suspense } from "react"
import Loading from "./loading"


const CartPage = () => {
     return (
          <section>
               <div>
                    <h1>My Cart</h1>
               </div>

               <Suspense fallback={<Loading />}>
                    <CartItems />
               </Suspense>
          </section>
     )
}

export default CartPage