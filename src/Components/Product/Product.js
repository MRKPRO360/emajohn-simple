import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Product({
  product: { name, img, seller, price, ratings },
  handleAddToCart,
  product,
}) {
  return (
    <div className="product">
      <img src={img} alt="Product" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button
        className="btn-cart"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        <p className="btn-text">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
}
