import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { searchProduct } from "../Redux/ProductSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };


 useEffect(() => {
  if (!user) {
    const timer = setTimeout(() => {
      Swal.fire({
        title: "Please Login This Site",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [user]);

  return (
    <header className="sticky top-0 z-50 shadow-md">

      {/* Top Navbar */}
      <div className="bg-blue-700 text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-4">

          {/* Logo + Mobile Menu Button */}
          {user && user.role === "admin" ? <div className="ml-140 text-2xl">Welcome Admin</div>:
          <div className="w-full flex items-center justify-between lg:w-auto">
            <h1 className="text-3xl font-bold cursor-pointer">
              Shop<span className="text-yellow-300">Cart</span>
            </h1>

            <button
              className="lg:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

}
          {/* Search */}
          {user && user.role === "admin" ? "":
          <div className="w-full lg:flex-1 lg:max-w-2xl">
            <div className="flex">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-white text-black px-4 py-3 rounded-l-md outline-none"
                onChange={(e) =>
                  dispatch(searchProduct(e.target.value))
                }
              />

              <button className="bg-yellow-400 text-black px-5 rounded-r-md hover:bg-yellow-500">
                <FaSearch />
              </button>
            </div>
          </div>
}

          {/* Icons */}
          {user && user.role === "user" ?
          <div className="flex items-center gap-6 text-xl">
            <button
              onClick={() => navigate("/wishlist")}
              className="hover:text-yellow-300"
            >
              <FaHeart />
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="hover:text-yellow-300"
            >
              <FaUser />
            </button>

            <Link
              to="/cart"
              className="relative hover:text-yellow-300"
            >
              <FaShoppingCart />

              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            </Link>
          </div>:""}
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="bg-black text-amber-100">
        <div className="max-w-7xl mx-auto">
          <ul className="hidden lg:flex items-center gap-8 px-4 py-3 font-medium">
          {user && user.role === "admin" ? <div><marquee className="w-200">This site is only for admin</marquee></div>:
          <>
            <li>
              <NavLink to="/" className="hover:text-blue-500">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/shop" className="hover:text-blue-500">
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink to="/yourdeals" className="hover:text-blue-500">
                Deals
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="hover:text-blue-500">
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/orders" className="hover:text-blue-500">
                My Orders
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="hover:text-blue-500">
                Contact Us
              </NavLink>
            </li>
          </>
}
            <div className="ml-auto">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-pink-500">
                    Welcome {user.firstName}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="text-2xl"
                  >
                    <IoIosLogOut />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="hover:text-yellow-300"
                >
                  Login
                </Link>
              )}
            </div>

          </ul>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="lg:hidden flex flex-col gap-4 px-6 py-5 font-medium">

              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  onClick={() => setMenuOpen(false)}
                >
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/yourdeals"
                  onClick={() => setMenuOpen(false)}
                >
                  Deals
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/orders"
                  onClick={() => setMenuOpen(false)}
                >
                  My Orders
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>

              <div className="border-t border-gray-700 pt-4">
                {user ? (
                  <div className="flex items-center justify-between">
                    <span className="text-pink-500">
                      Welcome {user.firstName}
                    </span>

                    <button
                      onClick={handleLogout}
                      className="text-2xl"
                    >
                      <IoIosLogOut />
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>

            </ul>
          )}

        </div>
      </nav>
    </header>
  );
};

export default Navbar;