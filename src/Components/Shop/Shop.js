import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
export default function Shop() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) =>
    setCart((prevCart) => [...prevCart, product]);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product, index) => (
          <Product
            handleAddToCart={handleAddToCart}
            key={index}
            product={product}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
}
