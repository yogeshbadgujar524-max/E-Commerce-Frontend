import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProcessingPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/orders");
          Swal.fire({
            title: "You'r Order is done !",
            icon: "success",
            draggable: true
          });
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black flex flex-col justify-center items-center text-white">

      {/* Spinner */}
      <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Heading */}
      <h1 className="mt-8 text-4xl font-bold">
        Processing Payment
      </h1>

      {/* Message */}
      <p className="mt-3 text-gray-300 text-lg">
        Please don't refresh or close this page.
      </p>

      {/* Countdown */}
      <div className="mt-8 bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl">
        <p className="text-2xl font-semibold">
          Redirecting in
          <span className="text-green-400 ml-2">
            {count}s
          </span>
        </p>
      </div>

      {/* Fake Progress Bar */}
      <div className="w-80 h-3 bg-gray-700 rounded-full mt-8 overflow-hidden">
        <div
          className="h-full bg-green-500 animate-pulse"
          style={{
            width: `${((10 - count) / 10) * 100}%`,
          }}
        ></div>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        Verifying payment and creating your order...
      </p>
    </div>
  );
};

export default ProcessingPage;