import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};