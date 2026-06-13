import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

import { addToCart } from "../Redux/cartSlice";
import { addToWishlist } from "../Redux/wishlistSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const [wishlist, setWishlist] = useState(false);

    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );

    const isWishlisted = wishlistItems.some(
        (item) => item.id === product.id
    );

    const handleWishlist = () => {
        dispatch(addToWishlist(product));
    };

    return (
        <div className="rounded-lg overflow-hidden bg-slate-800 text-white shadow-lg border border-slate-700 transition duration-300 relative">

            {/* Wishlist Button */}
            <button
                onClick={handleWishlist}
                className="absolute top-3 right-3 z-10"
            >
                <FaHeart
                    className={`text-2xl ${isWishlisted
                            ? "text-red-600"
                            : "text-gray-400"
                        }`}
                />
            </button>

            {/* Product Image */}
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-contain p-4"
            />

            {/* Product Details */}
            <div className="p-4">
                <h2 className="font-bold text-lg mb-2 line-clamp-1">
                    {product.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {product.description}
                </p>

                <p className="text-xl font-bold text-green-600 mb-4">
                    ₹{product.price}
                </p>

                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;