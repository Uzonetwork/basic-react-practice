import React, { useContext } from "react";
import { ProductContext } from "./context/ProductContext";

function App() {

  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <strong>${product.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default App;