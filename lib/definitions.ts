// Define types
export interface Store {
     name: string;
     id: number;
     slug: string;
     products: [];
}


export interface Product {
     name: string;
     id: number;
     images: { src: string }[];
     store: { shop_name: string };
     price: string;
     currency: string;
     alt: string;
     stock_status: string;
}



export interface CartItem extends Product {
     'order-status': string;
};


export type CartContextType = {
     cart: CartItem[];
     addToCart: (cartItem: CartItem) => void;
     removeFromCart: (id: number) => void;
};



export type LineItem = {
     product_id: number;
     quantity: number;
};

export type Order = {
     customer_id?: number; //optional, only if user is logged in
     payment_method: string;
     payment_method_title: string;
     set_paid: boolean;
     billing: {
          first_name: string,
          last_name: string,
          address_1: string,
          city: string,
          country: string,
          email: string,
     };
     shipping: {
          first_name: string,
          last_name: string,
          address_1: string,
          city: string,
          country: string,
     };
     line_items: LineItem[];
}