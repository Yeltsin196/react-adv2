import {
  ProductCard,
  ProductImage,
  ProductBottons,
  ProductTitle,
} from "./../components";

export const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
  };
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductImage img={product.img}></ProductImage>
          <ProductTitle title={product.title}></ProductTitle>
          <ProductBottons></ProductBottons>
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image img={product.img}></ProductCard.Image>
          <ProductCard.Title title={product.title}></ProductCard.Title>
          <ProductCard.Buttons></ProductCard.Buttons>
        </ProductCard>
      </div>
    </div>
  );
};
