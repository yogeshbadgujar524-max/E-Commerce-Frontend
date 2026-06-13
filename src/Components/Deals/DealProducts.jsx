import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const DealProducts = () => {
  const products = useSelector(
    (state) => state.product.products
  );

  const dealProducts = products.filter(
    (item) => item.discountPercentage > 10
  );

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">
          🔥 Today's Best Deals
        </h2>

        <span className="bg-red-500 text-white px-4 py-2 rounded-full">
          {dealProducts.length} Deals Available
        </span>
      </div>

      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
        {Math.round(dealProducts.discountPercentage)}% OFF
      </div>
    </section>
  );
};

export default DealProducts;