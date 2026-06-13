import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus } from "../Redux/OrderSlice";

const OrdersAdmin = () => {
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders()
  }, []);

  const fetchOrders = async () => {
    const res =
      await axios.get(
        "https://e-commerce-backend-chi-three.vercel.app/api/users/all-orders"
      );

    setOrders(res.data.orders);
  };

  const handleStatusChange =
    async (id, status) => {

      try {
        await axios.put(
          `http://localhost:4000/api/users/update-order/${id}`,
          { status }
        );

        fetchOrders();

      } catch (error) {
        console.log(error);
      }

    };

  const deleteOrder = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this order?"
      );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:4000/api/users/delete-order/${id}`
      );

      fetchOrders();

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Orders Management
      </h1>

      {orders.length === 0 ? (

        <div className="bg-white text-black p-10 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold">
            No Orders Found
          </h2>
        </div>

      ) : (

        <div className="space-y-6">

          {orders.map((order,id) => (

            <div
              key={id}
              className="bg-slate-800 text-white shadow-lg p-6 rounded-xl p-6"
            >

              {/* Header */}

              <div className="flex justify-between items-center mb-4">

                <div>
                  <h2 className="text-xl font-bold">
                    Order #{order.id}
                  </h2>

                  <p className="text-gray-500">
                    {order.date}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full font-bold
                  ${order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-yellow-100 text-yellow-600"
                    }`}
                >
                  {order.status}
                </span>

              </div>

              {/* Products */}

              <div className="space-y-3">

                {order.items?.map((item) => (

                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-3"
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold">
                        {item.title}
                      </h3>

                      <p className="text-gray-500">
                        Qty : {item.quantity}
                      </p>
                    </div>

                    <div className="font-bold text-green-600">
                      ₹{item.price}
                    </div>

                  </div>

                ))}

              </div>

              {/* Footer */}

              <div className="flex gap-3">

                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(
                      order._id,
                      e.target.value
                    )
                  }
                  className="border p-2 rounded-lg"
                >
                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Delivered">
                    Delivered
                  </option>

                  <option value="Rejected">
                    Rejected
                  </option>

                </select>

                <button
                  onClick={() =>
                    deleteOrder(order._id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default OrdersAdmin;