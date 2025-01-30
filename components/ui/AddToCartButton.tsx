"use client";

import { Product } from "@/lib/definitions";
import { handleAddToCart } from "@/lib/utils";
import { Button } from "./button";

export default function AddToCartButton({ product }: { product: Product }) {
     return <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>;
}
