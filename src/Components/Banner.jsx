import React from 'react'

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto p-6">
            <div className="relative h-100  rounded-xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                    alt=""
                    className="w-full h-[100%] object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-10">
                    <h2 className="text-4xl font-bold text-blue-600">
                        Grab Upto 50% Off
                    </h2>

                    <p className="text-2xl text-red-800 mb-4">
                        On Selected Headphones
                    </p>

                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-fit">
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Banner
