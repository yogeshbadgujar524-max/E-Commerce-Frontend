import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../Redux/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.Wishlist.items
  );
  

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        My Wishlist
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-58 object-contain"
            />

            <h2 className="font-bold mt-2">
              {item.title}
            </h2>

            <p>₹{item.price}</p>

            <button
              onClick={() =>
                dispatch(removeFromWishlist(item.id))
              }
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;