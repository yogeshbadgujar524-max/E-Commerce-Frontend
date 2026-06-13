import React from "react";
import data from "../Product"

const Products = () => {
  const products = data.products;

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        All Products
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white text-black rounded-xl shadow-lg p-4 hover:shadow-xl transition"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />

            <h2 className="font-bold text-lg line-clamp-2">
              {product.title}
            </h2>

            <p className="text-gray-500 text-sm mt-2 line-clamp-3">
              {product.description}
            </p>

            <div className="mt-3 space-y-1">

              <p>
                <span className="font-semibold">
                  Category:
                </span>{" "}
                {product.category}
              </p>

              <p>
                <span className="font-semibold">
                  Price:
                </span>{" "}
                ₹{product.price}
              </p>

              <p>
                <span className="font-semibold">
                  Rating:
                </span>{" "}
                ⭐ {product.rating.rate}
              </p>

              <p>
                <span className="font-semibold">
                  Reviews:
                </span>{" "}
                {product.rating.count}
              </p>

            </div>

            <div className="flex gap-2 mt-5">

              <button
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Edit
              </button>

              <button
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Products;