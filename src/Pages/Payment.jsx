import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../Redux/OrderSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("");

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  console.log(cartItems);


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {

    try {

      const user =
        JSON.parse(
          localStorage.getItem("user")
        );

      await axios.post(
        "https://e-commerce-backend-chi-three.vercel.app/users/create",
        {
          userId: user._id,

          items: cartItems,

          total: total,

          paymentMethod:
            paymentMethod,

          paymentStatus: "Paid",

          status: "Pending",
        }
      );

      navigate("/proccess");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Secure Checkout
      </h1>

      <div className="bg-slate-800 text-white shadow-lg rounded-xl p-6">

        <h2 className="text-2xl font-semibold mb-4">
          Select Payment Method
        </h2>

        <div className="space-y-3">

          <label className="block">
            <input
              type="radio"
              name="pay"
              value="cod"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            <span className="ml-2">
              Cash On Delivery
            </span>
          </label>

          <label className="block">
            <input
              type="radio"
              name="pay"
              value="credit"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            <span className="ml-2">
              Credit Card
            </span>
          </label>

          <label className="block">
            <input
              type="radio"
              name="pay"
              value="debit"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            <span className="ml-2">
              Debit Card
            </span>
          </label>

          <label className="block">
            <input
              type="radio"
              name="pay"
              value="upi"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            <span className="ml-2">
              UPI
            </span>
          </label>

          <label className="block">
            <input
              type="radio"
              name="pay"
              value="paypal"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            <span className="ml-2">
              PayPal
            </span>
          </label>

          <label className="block">
            <input
              type="radio"
              name="pay"
              value="qr"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            <span className="ml-2">
              QR Payment
            </span>
          </label>

        </div>

        {/* Credit Card */}

        {paymentMethod === "credit" && (
          <div className="mt-5 space-y-3">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
              className="w-full border p-3 rounded"
            />

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="border p-3 rounded w-full"
              />

              <input
                type="password"
                placeholder="CVV"
                className="border p-3 rounded w-full"
              />
            </div>
          </div>
        )}

        {/* Debit Card */}

        {paymentMethod === "debit" && (
          <div className="mt-5 space-y-3">
            <input
              type="text"
              placeholder="Debit Card Number"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
              className="w-full border p-3 rounded"
            />
          </div>
        )}

        {/* UPI */}

        {paymentMethod === "upi" && (
          <div className="mt-5">
            <input
              type="text"
              placeholder="Enter UPI ID (example@upi)"
              className="w-full border p-3 rounded"
            />
          </div>
        )}

        {/* PayPal */}

        {paymentMethod === "paypal" && (
          <div className="mt-5">
            <input
              type="email"
              placeholder="PayPal Email"
              className="w-full border p-3 rounded"
            />
          </div>
        )}

        {/* QR Payment */}

        {paymentMethod === "qr" && (
          <div className="mt-5 flex flex-col items-center">

            <h3 className="text-xl font-semibold mb-4">
              Scan QR Code To Pay
            </h3>

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ShopCartPayment"
              alt="QR Code"
              className="border p-2 rounded-lg shadow-lg"
            />

            <p className="mt-4 text-gray-600">
              Scan using any UPI App
            </p>

          </div>
        )}

        <div className="mt-6 border-t pt-4">

          <h3 className="text-2xl font-bold">
            Total : ₹{total.toFixed(2)}
          </h3>

          <button
            onClick={handlePayment}
            className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
          >
            Pay ₹{total.toFixed(2)}
          </button>

        </div>

      </div>
    </div>
  );
};

export default Payment;