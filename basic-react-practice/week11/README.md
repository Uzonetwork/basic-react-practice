import { linearSearch, bubbleSort, arrayOperations } from "./algorithms";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const numbers = [5, 2, 9, 1, 7];

  console.log("Linear Search (find 9):", linearSearch(numbers, 9));
  console.log("Sorted Array:", bubbleSort(numbers));
  console.log("Array Operations:", arrayOperations());

  return (
    <Router>

      {/* Week 11 Display */}
      <div style={{ padding: "10px" }}>
        <h2>Week 11 Algorithms Output</h2>
        <p>Check console for results</p>
      </div>

      {/* Navigation */}
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

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

    </Router>
  );
}

export default App;