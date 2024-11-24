import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to an API or email)
    alert("Your message has been sent!");
  };

  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-50 w-full  shadow-md">
        <NavBar/>
    </div>
 
    <div className=" bg-white min-h-screen pt-20">
      {/* Header Section */}
      <header className="bg-[#151515] text-white py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We're here to help. Get in touch!</p>
        </div>
      </header>

      {/* Contact Information Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#A91D3A]">Contact Information</h2>
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-4xl text-[#A91D3A]" />
            <h3 className="mt-4 text-xl font-semibold">Our Address</h3>
            <p className="text-lg text-gray-700 mt-2">
              123, Main Street, Kandy, Sri Lanka
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-4xl text-[#A91D3A]" />
            <h3 className="mt-4 text-xl font-semibold">Email Us</h3>
            <p className="text-lg text-gray-700 mt-2">info@weezcafe.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <FaPhoneAlt className="text-4xl text-[#A91D3A]" />
            <h3 className="mt-4 text-xl font-semibold">Call Us</h3>
            <p className="text-lg text-gray-700 mt-2">+94 123 456 789</p>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="relative">
        <div className="w-full h-96">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.214784461238!2d80.63395545077224!3d7.2906836541841345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f08a7c5c9a5%3A0x6b028d9073a07544!2sKandy!5e0!3m2!1sen!2slk!4v1614692451314!5m2!1sen!2slk"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#A91D3A]">Get in Touch</h2>
        <div className="mt-8 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleInputChange}
                className="border-b border-[#A91D3A] bg-white focus:outline-none w-full sm:w-1/2 p-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleInputChange}
                className="border-b border-[#A91D3A] bg-white focus:outline-none w-full sm:w-1/2 p-3"
                required
              />
            </div>

            <div className="flex flex-col mt-6">
              <textarea
                name="message"
                placeholder="Your Message*"
                value={formData.message}
                onChange={handleInputChange}
                className="border-b border-[#A91D3A] bg-white focus:outline-none w-full p-3 h-40"
                required
              ></textarea>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="btn bg-[#A91D3A] text-white hover:bg-[#B92D50] w-full sm:w-auto py-3 px-6 font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer/>
    </div>

    </>
  );
};

export default Contact;
