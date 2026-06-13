import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../Redux/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/payment");
    }, 2000); // 2 seconds
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2 className="text-center text-xl">
          Cart is Empty
        </h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border rounded-xl p-4 mb-4 shadow"
            >
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />

                <div>
                  <h2 className="font-bold">
                    {item.title}
                  </h2>

                  <p className="text-gray-600">
                    ₹{item.price}
                  </p>
                </div>
              </div>

              {/* Quantity */}

              <div className="flex items-center gap-3 mt-4 md:mt-0">

                <button
                  onClick={() =>
                    dispatch(decreaseQty(item.id))
                  }
                  className="bg-yellow-600 text-black px-3 py-1 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increaseQty(item.id))
                  }
                  className="bg-yellow-600 text-black px-3 py-1 rounded"
                >
                  +
                </button>
              </div>

              {/* Total */}

              <div className="font-bold text-lg">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Remove */}

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Summary */}

          <div className="mt-8 rounded-xl p-6 bg-gray-900 text-white">

            <h2 className="text-2xl font-bold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>
                {cartItems.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full mt-5 bg-green-600 text-white py-3 rounded-lg"
            >
              {loading ? "Loading..." : "Proceed To Checkout"}
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;