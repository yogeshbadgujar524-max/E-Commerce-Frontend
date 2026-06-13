import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  const [orders, setOrders] = useState([]);

  const wishlist = useSelector(
    (state) => state.wishlist?.wishlistItems || []
  );

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users/all-orders")
      .then((res) => {
        setOrders(res.data.orders);
      })
      .catch((err) => console.log(err));
  }, []);

  const userOrders = orders.filter(
    (order) => order.userId === user?._id
  );

  const totalSpend = userOrders.reduce(
    (acc, order) => acc + order.total,
    0
  );

  console.log("User:", user);
  console.log("Orders:", orders);
  console.log("User Orders:", userOrders);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          My Profile
        </h1>

        <div className="bg-gray-900 rounded-2xl shadow-lg p-8">

          {/* Profile Header */}

          <div className="flex flex-col md:flex-row items-center gap-6">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-cyan-500"
            />

            <div>

              <h2 className="text-3xl font-bold">
                {user?.firstName} {user?.lastName}
              </h2>

              <p className="text-gray-400 mt-2">
                {user?.email}
              </p>

              <p className="text-gray-400">
                {user?.phone}
              </p>

              <span className="inline-block mt-3 bg-cyan-500 px-4 py-1 rounded-full text-sm">
                {user?.role}
              </span>

            </div>

          </div>

          {/* Stats */}

          <div className="bg-blue-600 p-6 m-5 rounded-xl">
            <h3 className="text-lg">
              Total Orders
            </h3>

            <p className="text-3xl font-bold mt-2">
              {userOrders.length}
            </p>
          </div>

          <div className="bg-pink-600 p-6 m-5 rounded-xl">
            <h3 className="text-lg">
              Wishlist
            </h3>

            <p className="text-3xl font-bold mt-2">
              {wishlist.length}
            </p>
          </div>

          <div className="bg-green-600 p-6 m-5 rounded-xl">
            <h3 className="text-lg">
              Total Spend
            </h3>

            <p className="text-3xl font-bold mt-2">
              ₹{totalSpend.toFixed(2)}
            </p>
          </div>

          {/* Address */}

          <div className="mt-10 bg-gray-800 p-6 rounded-xl">

            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              Delivery Address
            </h2>

            <p className="text-gray-300">
              123 Main Street,
              Jamnagar,
              Gujarat,
              India - 361001
            </p>

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <button
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Edit Profile
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;