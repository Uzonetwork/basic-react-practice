import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

function Products() {

  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <Link to={`/product/${product.id}`}>
            <h3>{product.title}</h3>
          </Link>

          <p>{product.description}</p>
          <strong>${product.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default Products;