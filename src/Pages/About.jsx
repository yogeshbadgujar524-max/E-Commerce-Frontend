import React from "react";

const About = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[500px] ">
        <img
          src="https://img.freepik.com/premium-photo/seamless-eshopping-experience-3d-shopping-online-with-laptop-product-shipping_954894-95840.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">About ShopCart</h1>
            <p className="text-xl">
              Your Trusted Online Shopping Destination
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-4">
              ShopCart was created with a simple mission: to make online
              shopping easy, affordable, and enjoyable for everyone.
            </p>

            <p className="text-gray-600 leading-8">
              We offer a wide range of quality products, from electronics
              and fashion to home essentials and accessories. Our goal is
              to provide customers with the best products at competitive
              prices while delivering an exceptional shopping experience.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Our Team"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-gray-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="font-bold text-xl mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and reliable shipping across the country.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="font-bold text-xl mb-2">
                Secure Payments
              </h3>
              <p className="text-gray-600">
                Safe and trusted payment methods.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-bold text-xl mb-2">
                Quality Products
              </h3>
              <p className="text-gray-600">
                Carefully selected products from trusted brands.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🎧</div>
              <h3 className="font-bold text-xl mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Dedicated customer support whenever you need help.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p>Happy Customers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">5K+</h3>
              <p>Products</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p>Brands</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p>Customer Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Start Shopping?
        </h2>

        <p className="text-gray-600 mb-8">
          Explore thousands of products and find exactly what you need.
        </p>

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition">
          Shop Now
        </button>
      </section>

    </div>
  );
};

export default About;