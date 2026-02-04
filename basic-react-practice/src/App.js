import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [products] = useState([
    "Laptop",
    "Phone",
    "Tablet",
    "Headphones",
  ]);

  return (
    <div>
      <h1>Basic React Practice</h1>
      <ProductList items={products} />
    </div>
  );
}

export default App;
