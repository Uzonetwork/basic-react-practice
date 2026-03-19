import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>

      <nav style={{
  padding: "15px 20px",
  borderBottom: "1px solid #ddd",
  display: "flex",
  gap: "20px",
  fontWeight: "bold"
}}>
  <Link to="/">Home</Link>
  <Link to="/products">Products</Link>
</nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>

    </Router>
  );
}

export default App;