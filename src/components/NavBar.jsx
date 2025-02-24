import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartCount } from "../features/cartSlice";

function NavBar() {
  // const cartItems = useSelector((state) => state.cart.items);
  // const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = useSelector(selectCartCount); // ✅ Use selector for cart count

  const navigate = useNavigate();
  // console.log("rendered...");
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-6">
          <img
            src="https://i.pinimg.com/736x/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg"
            alt="Quick Shopping Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold">Quick Shopping</h1>
        </div>

        {/* Right Side: Navigation Links, Profile & Cart */}
        <div className="flex items-center space-x-5">
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a href="/" className="text-white!">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white!">
                Contact
              </a>
            </li>
          </ul>
          <button className="flex items-center space-x-2 cursor-pointer ">
            <FaUser />
            <span>Profile</span>
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="flex items-center space-x-2 cursor-pointer "
          >
            <FaShoppingCart />
            <span>Cart {cartCount > 0 && `${cartCount}`}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
