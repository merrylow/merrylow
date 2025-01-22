// Define types
export interface Store {
     name: string;
     id: number;
     slug: string;
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
