import React from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { searchProduct } from "../Redux/ProductSlice";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate()

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (user && user.role === "admin") {
  return null;
}

  return (
    <header className="w-full shadow-md sticky top-0 z-50">
      {/* Top Bar */}

      {/* Main Navbar */}
      <div className="bg-blue-700 text-white px-4 py-4 overflow-auto sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <h1 className="text-3xl font-bold cursor-pointer">
            Shop<span className="text-yellow-300">Cart</span>
          </h1>

          {/* Search Bar */}
          <div className="w-full lg:w-1/2">
            <div className="flex">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-white text-black px-4 py-3 rounded-l-md outline-none"
                onChange={(e) => dispatch(searchProduct(e.target.value))}
              />
              <button className="bg-yellow-400 text-black px-5 rounded-r-md hover:bg-yellow-500">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-xl">
            <button onClick={() => navigate("/wishlist")} className="hover:text-yellow-300">
              <FaHeart />
            </button>

            <button onClick={()=>navigate("/profile")} className="hover:text-yellow-300">
              <FaUser />
            </button>

            <Link to={"/cart"} className="relative hover:text-yellow-300">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-black shadow text-amber-100">
        <div className="max-w-7xl mx-auto">
          <ul className="flex flex-wrap justify-center md:justify-start gap-8 px-4 py-3 font-medium">
            <li>
              <NavLink to="/" className="hover:text-blue-700">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/shop" className="hover:text-blue-700">
                Shop
              </NavLink>
            </li>


            <li>
              <NavLink to="/yourdeals" className="hover:text-blue-700">
                Deals
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="hover:text-blue-700">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders" className="hover:text-blue-700">
                My Orders
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="hover:text-blue-700">
                Contact Us
              </NavLink>
            </li>
            {user ? (<div className="ml-120"><span className="text-pink-500">Welcome {user.firstName}</span>
              <button className="text-2xl relative top-2 left-5" onClick={handleLogout}>
                <IoIosLogOut />
              </button>
            </div>
            ) : (
              <Link to={"/login"} className="relative hover:text-yellow-300 ml-160">
                Login
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;