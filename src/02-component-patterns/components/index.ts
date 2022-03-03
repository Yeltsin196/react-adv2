import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductBottons } from "./ProductBottons";
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductBottons } from "./ProductBottons";
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';




export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle, Image: ProductImage, Buttons: ProductBottons
});

export default ProductCard;