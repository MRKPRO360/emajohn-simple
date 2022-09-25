import logo from "../../images/Logo.svg";
import "./Header.css";
export default function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Ema John Logo" />
      <div>
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
