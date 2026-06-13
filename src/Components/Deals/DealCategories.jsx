import React from "react";

const DealCategories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">

      <div className="bg-gray-100 text-black p-5 rounded-xl text-center">
        🎧 Headphones
      </div>

      <div className="bg-gray-100 text-black p-5 rounded-xl text-center">
        📱 Mobiles
      </div>

      <div className="bg-gray-100 text-black p-5 rounded-xl text-center">
        💻 Laptops
      </div>

      <div className="bg-gray-100 text-black p-5 rounded-xl text-center">
        🛋 Furniture
      </div>

    </div>
  );
};

export default DealCategories;