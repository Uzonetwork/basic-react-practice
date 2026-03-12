import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductDetails() {

  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
    </div>
  );
}

export default ProductDetails;