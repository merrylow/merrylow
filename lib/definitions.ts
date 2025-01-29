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



export interface Order {
     name:string;
     id: number;
     images: { src: string }[];
     store: { shop_name: string };
     price: string;
     status: string;
     currency: string;
     total: string;
     total_tax: string;
     customer_id: string;
     alt: string;
}