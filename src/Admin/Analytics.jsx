import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";



const Analytics = () => {

  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get(
      "https://e-commerce-backend-chi-three.vercel.app/users/all-users"
    )
      .then((res) =>
        setUsers(res.data.users)
      );

    axios.get(
      "https://e-commerce-backend-chi-three.vercel.app/users/all-orders"
    )
      .then((res) =>
        setOrders(res.data.orders)
      );

    axios.get(
      "https://e-commerce-backend-chi-three.vercel.app/products/all-products"
    )
      .then((res) =>
        setProducts(res.data.products)
      );

  }, []);

  const totalRevenue = orders.reduce(
    (acc, order) =>
      acc + Number(order.total || 0),
    0
  );

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const rejectedOrders = orders.filter(
    (order) => order.status === "Rejected"
  ).length;

  const processingOrders = orders.filter(
    (order) => order.status === "Processing"
  ).length;

  const shippedOrders = orders.filter(
    (order) => order.status === "Shipped"
  ).length;

  const orderStatusData = [
    {
      name: "Pending",
      value: pendingOrders,
    },
    {
      name: "Processing",
      value: processingOrders,
    },
    {
      name: "Shipped",
      value: shippedOrders,
    },
    {
      name: "Delivered",
      value: deliveredOrders,
    },
    {
      name: "Rejected",
      value: rejectedOrders,
    },
  ];

  const statsData = [
    {
      name: "Users",
      value: users.length,
    },
    {
      name: "Orders",
      value: orders.length,
    },
    {
      name: "Products",
      value: products.length,
    },
  ];

  const COLORS = [
    "#facc15",
    "#3b82f6",
    "#8b5cf6",
    "#22c55e",
    "#ef4444",
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">

      <h1 className="text-4xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      {/* Stats Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-blue-500 p-6 rounded-xl">
          <h3>Total Users</h3>

          <p className="text-4xl font-bold">
            {users.length}
          </p>
        </div>

        <div className="bg-purple-500 p-6 rounded-xl">
          <h3>Total Products</h3>

          <p className="text-4xl font-bold">
            {products.length}
          </p>
        </div>

        <div className="bg-yellow-500 p-6 rounded-xl">
          <h3>Total Revenue</h3>

          <p className="text-4xl font-bold">
            ₹{totalRevenue.toLocaleString()}
          </p>
        </div>

      </div>

      <hr className="mt-10"/>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 m-5 p-2">
      <div className="bg-cyan-500 p-6 rounded-xl">
        <h3>Delivered Orders</h3>

        <p className="text-4xl font-bold">
          {deliveredOrders}
        </p>
      </div>

      <div className="bg-red-500 p-6 rounded-xl">
        <h3>Rejected Orders</h3>

        <p className="text-4xl font-bold">
          {rejectedOrders}
        </p>
      </div>

      <div className="bg-orange-500 p-6 rounded-xl">
        <h3>Pending Orders</h3>

        <p className="text-4xl font-bold">
          {pendingOrders}
        </p>
      </div>
      </div>


      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        {/* Bar Chart */}

        <div className="bg-gray-800 p-6 rounded-xl">

          <h2 className="text-2xl font-bold mb-5">
            Store Overview
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={statsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#06b6d4"
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

        {/* Pie Chart */}

        <div className="bg-gray-800 p-6 rounded-xl">

          <h2 className="text-2xl font-bold mb-5">
            Order Status
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>

              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {orderStatusData.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
              <Legend />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Recent Orders */}

      <div className="mt-10 bg-gray-800 p-6 rounded-xl">

        <h2 className="text-2xl font-bold mb-5">
          Recent Orders
        </h2>

        {orders
          .slice(-5)
          .reverse()
          .map((order) => (

            <div
              key={order.id}
              className="flex justify-between border-b border-gray-700 py-3"
            >

              <div>
                <p className="font-bold">
                  Order #{order.id}
                </p>

                <p className="text-gray-400">
                  {order.date}
                </p>
              </div>

              <div>
                ₹{order.total}
              </div>

              <div
                className={`font-bold ${order.status ===
                  "Delivered"
                  ? "text-green-400"
                  : order.status ===
                    "Rejected"
                    ? "text-red-400"
                    : "text-yellow-400"
                  }`}
              >
                {order.status}
              </div>

            </div>

          ))}

      </div>

    </div>
  );
};

export default Analytics;