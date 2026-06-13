import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderTracking = () => {
  const [latestOrder, setLatestOrder] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users/all-orders")
      .then((res) => {
        const orders = res.data.orders;

        if (orders.length > 0) {
          setLatestOrder(
            orders[orders.length - 1]
          );
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!latestOrder) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          No Order Found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Track Order
      </h1>

      <div className="bg-slate-800 text-white shadow-lg p-6 rounded-xl">

        <h2 className="text-xl font-bold">
          Order ID:
          {latestOrder._id}
        </h2>

        <p className="mt-2">
          Total: ₹{latestOrder.total}
        </p>

        <p className="mt-2">
          Status:
          <span
            className={`ml-2 font-bold ${
              latestOrder.status === "Delivered"
                ? "text-green-600"
                : latestOrder.status === "Rejected"
                ? "text-red-600"
                : "text-orange-500"
            }`}
          >
            {latestOrder.status}
          </span>
        </p>

      </div>

      <div className="mt-10 flex justify-between text-center">

        <div>
          <div className="text-4xl">✅</div>
          <p>Ordered</p>
        </div>

        <div>
          <div className="text-4xl">📦</div>
          <p>Processing</p>
        </div>

        <div>
          <div className="text-4xl">🚚</div>
          <p>Shipped</p>
        </div>

        <div>
          <div className="text-4xl">🎉</div>
          <p>Delivered</p>
        </div>

      </div>

    </div>
  );
};

export default OrderTracking;