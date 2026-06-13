import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeProducts = () => {
    const navigate = useNavigate()
    const products = [
        {
            id: 1,
            title: "Laptop",
            image: "https://tse2.mm.bing.net/th/id/OIP.vsWm4DBQzywmvUhM3jZ0dAHaEl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            price: "20000-400000",
        },
        {
            id: 2,
            title: "Headphone",
            image: "https://tse3.mm.bing.net/th/id/OIP.J1n5C9qhi0NLirNu153QOAHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
            price: "199-1999",
        },
        {
            id: 3,
            title: "Mobile",
            image: "https://tse2.mm.bing.net/th/id/OIP.6Ds_8M7uHSxCquMYooNv8wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            price: "10000-60000",
        },
        {
            id: 4,
            title: "Smart Watch",
            image: "https://store.blackview.hk/cdn/shop/files/R30-Black_01.jpg",
            price: "300-5000",
        },
    ];
    return (
        <section className="max-w-7xl mx-auto p-5 mt-100">
            <h2 className="text-3xl font-bold mb-6">
                Trending Products
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                    >
                        <img
                            src={product.image}
                            alt=""
                            className="w-full h-60 object-contain"
                        />

                        <div className="p-4">
                            <h3 className="font-semibold text-lg">
                                {product.title}
                            </h3>

                            <p className="text-blue-600 font-bold mt-2">
                               Price : {product.price}
                            </p>

                            <button className="w-full mt-4 bg-blue-700 text-white py-2 rounded-lg" onClick={()=>navigate("/shop")}>
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default HomeProducts
