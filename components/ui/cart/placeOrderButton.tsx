'use client'

import { Order } from '@/lib/definitions'
import { handlePlaceOrder } from '@/lib/utils'

const PlaceOrderButton = ({ order }: { order: Order }) => {
     return (
          <button 
               type="button" 
               onClick={() => handlePlaceOrder(order)}
          >
                    Place order
          </button>
     )
}

export default PlaceOrderButton