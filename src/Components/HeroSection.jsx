import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className="relative h-[500px]">
      {/* Background Image */}
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/035/328/527/small_2x/ai-generated-the-allure-of-designer-handbags-in-a-chic-retail-fashion-store-showcase-photo.jpg"
        alt="Fashion Store"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome To ShopCart
        </h1>

        <p className="text-lg md:text-2xl mb-6">
          Discover Amazing Products At Great Prices
        </p>

        <button onClick = {()=>navigate("/shop")}className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;