import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Contact Us
        </h1>

        <p className="text-gray-600 mt-3">
          We'd love to hear from you. Get in touch with our team.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className=" text-white shadow-lg rounded-xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Send Us A Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows="5"
              placeholder="Write Your Message"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-6 p-10">

          <div className="bg-slate-800 text-white shadow-lg p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-5">
              Contact Information
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <span>support@shopcart.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>
                  Ahmedabad, Gujarat, India
                </span>
              </div>

            </div>
          </div>

          {/* Support Hours */}
          <div className="bg-slate-800 text-white shadow-lg p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              Customer Support
            </h2>

            <p>
              Monday - Saturday
            </p>

            <p>
              9:00 AM - 8:00 PM
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-slate-800 text-white shadow-lg p-6 rounded-xl">

            <h2 className="text-2xl font-bold mb-4">
              Follow Us
            </h2>

            <div className="flex gap-5 text-2xl">

              <a href="#">
                <FaFacebook className="text-blue-600" />
              </a>

              <a href="#">
                <FaInstagram className="text-pink-600" />
              </a>

              <a href="#">
                <FaTwitter className="text-sky-500" />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Map Section */}
      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-5">
          Our Location
        </h2>

        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-[400px] rounded-xl"
          loading="lazy"
        ></iframe>

      </div>

    </div>
  );
};

export default ContactUs;