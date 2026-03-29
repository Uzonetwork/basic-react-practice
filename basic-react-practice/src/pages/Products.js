import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

function Products() {
  const { products, loading } = useContext(ProductContext);

  const [search, setSearch] = useState("");

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading products...</h2>;
  }

  // Filter logic
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "10px" }}>Products</h1>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      {/* 🛍 Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: "100%", borderRadius: "10px" }}
                />

                <h3 style={{ marginTop: "10px" }}>{product.title}</h3>
              </Link>

              <p style={{ fontSize: "14px", color: "gray" }}>
                {product.description.substring(0, 60)}...
              </p>

              <strong style={{ color: "green" }}>
                ${product.price}
              </strong>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;