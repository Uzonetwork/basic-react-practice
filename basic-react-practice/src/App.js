import React, { useState, useRef, useEffect } from "react";
import useProducts from "./hooks/useProducts";

function App() {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  // Auto-focus input when page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Week 5 – React Hooks Practice</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />

      {loading ? (
        <p>Loading products...</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} style={{ marginBottom: "10px" }}>
            <strong>{product.title}</strong> - ${product.price}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
