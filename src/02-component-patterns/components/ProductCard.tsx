import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { useProduct } from "./../hooks/useProduct";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { Counter, increaseBy } = useProduct();
  return (
    <Provider value={{ Counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
