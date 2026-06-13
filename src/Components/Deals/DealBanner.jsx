import React from 'react'

const DealBanner = () => {
  return (
    <div className="relative mb-10">

      <img
        src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
        alt=""
        className="w-full h-[350px] object-cover rounded-xl"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">

        <h1 className="text-5xl font-bold">
          Mega Deals Day
        </h1>

        <p className="text-xl mt-3">
          Up To 70% OFF
        </p>

        <button className="bg-red-600 px-6 py-3 mt-5 rounded-lg">
          Shop Now
        </button>

      </div>
    </div>
  )
}

export default DealBanner