import React from "react";
import DealBanner from "../Components/Deals/DealBanner";
import FlashSale from "../Components/Deals/FlashSale";
import DealCategories from "../Components/Deals/DealCategories";
import DealProducts from "../Components/Deals/DealProducts";

const Deals = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">

      <DealBanner />

      <FlashSale />

      <DealCategories />

      <DealProducts />

    </div>
  );
};

export default Deals;