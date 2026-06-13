import React, {
  useEffect,
  useState
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate()

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios
      .get(
        "https://e-commerce-backend-chi-three.vercel.app/users/all-orders"
      )
      .then((res) => {

        setOrders(
          res.data.orders
        );

      })
      .catch((err) =>
        console.log(err)
      );

  }, []);

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const userOrders =
    orders.filter(
      (order) =>
        order.userId === user?._id
    );

    return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-cyan-400">
          My Orders
        </h1>

        {userOrders.length === 0 ? (

          <div className="bg-gray-900 rounded-xl p-10 text-center shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
              alt="No Orders"
              className="w-40 mx-auto mb-5"
            />

            <h2 className="text-2xl font-bold">
              No Orders Found
            </h2>

            <p className="text-gray-400 mt-2">
              You haven't placed any order yet.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-5 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Continue Shopping
            </Link>
          </div>

        ) : (

          <div className="space-y-6">

            {userOrders.map((order) => (

              <div
                key={order._id}
                className="bg-gray-900 rounded-2xl shadow-lg border border-gray-800 overflow-hidden"
              >

                {/* Order Header */}

                <div className="flex flex-col md:flex-row justify-between items-center p-5 border-b border-gray-800">

                  <div>
                    <h2 className="font-bold text-lg text-cyan-400">
                      Order #{order._id.slice(-6)}
                    </h2>

                    <p className="text-gray-400 text-sm">
                      {order.date}
                    </p>
                  </div>

                  {/* <div className="mt-3 md:mt-0">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold
                    ${order.status === "Delivered"
                          ? "bg-green-500/20 text-green-400"
                          : order.status === "Rejected"
                            ? "bg-red-500/20 text-red-400"
                            : order.status === "Shipped"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                    >
                      {order.status}
                    </span>

                  </div> */}

                </div>

                {/* Products */}

                <div className="p-5">

                  {order.items?.map((item) => (

                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-5 items-center border-b border-gray-800 py-4"
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-contain bg-white rounded-lg p-2"
                      />

                      <div className="flex-1">

                        <h3 className="font-semibold text-lg">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 text-sm">
                          Quantity: {item.quantity}
                        </p>

                      </div>

                      <div className="text-green-400 font-bold text-lg">
                        ₹{item.price}
                      </div>

                    </div>

                  ))}

                </div>

                {/* Footer */}

                <div className="bg-gray-800 p-5 flex justify-between items-center">

                  <div>
                    <p className="text-gray-400">
                      Total Amount
                    </p>

                    <h2 className="text-2xl font-bold text-green-400">
                      ₹{order.total}
                    </h2>
                  </div>

                  <button onClick = {()=>navigate("/tracking")}className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold">
                    Track Order
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </div>
  );

};

export default Orders;