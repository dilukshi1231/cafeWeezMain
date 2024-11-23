import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhoneForwarded, MdOutgoingMail } from "react-icons/md";
import aboutImage from "../../assets/about_image.jpeg";

const About = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* About Section */}
      <div className="text-center text-3xl pt-10 text-gray-700 font-semibold">
   
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 items-center">
        {/* Image Section */}
        <img
          className="w-full md:max-w-md rounded-lg shadow-lg"
          src={aboutImage}
          alt="About Us"
        />

        {/* Text Section */}
        <div className="flex flex-col gap-6 md:w-3/5 text-gray-700">
          <p className="text-lg">
            Welcome to <span className="font-bold">Cafe Weez</span>, your
            ultimate destination for great food, warm ambiance, and seamless
            dining experiences. We’re dedicated to making your time with us
            memorable, whether you're dining in, ordering online, or planning a
            special celebration.
          </p>
          <p>
            With our cutting-edge services, including in-house ordering with QR
            codes, online food delivery, and party bookings, Cafe Weez offers
            convenience, quality, and a welcoming atmosphere all under one
            roof.
          </p>
          <b className="text-gray-800 text-xl">Our Mission</b>
          <p>
            To create a vibrant and welcoming space where good food brings
            people together. Cafe Weez is committed to delivering an excellent
            culinary experience every time.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-xl my-10">
        <p>
          WHY <span className="text-red-600 font-bold">CHOOSE US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
      <div className="border-2 border-red-500 rounded-lg p-8 flex flex-col gap-4 text-center hover:bg-yellow-500 hover:text-gray-800 transition-all duration-300 shadow-md cursor-pointer transform hover:scale-105">
  <b className="text-lg">Online Ordering</b>
  <p>
    Enjoy your favorite meals delivered to your doorstep quickly and
    conveniently.
  </p>
</div>


  <div className="border-2 border-yellow-500 rounded-lg p-8 flex flex-col gap-4 text-center hover:bg-yellow-500 hover:text-gray-800 transition-all duration-300 shadow-md cursor-pointer transform hover:scale-105">
    <b className="text-lg">In-House Ordering</b>
    <p>
      Experience fast and efficient service through our advanced QR code
      ordering system.
    </p>
  </div>

  {/* Party Bookings Section */}
  <div className="border-2 border-yellow-500 rounded-lg p-8 flex flex-col gap-4 text-center hover:bg-yellow-500 hover:text-gray-800 transition-all duration-300 shadow-md cursor-pointer transform hover:scale-105">
    <b className="text-lg">Party Bookings</b>
    <p>
      Host unforgettable events with our fully customizable party
      booking services.
    </p>
  </div>
</div>

      {/* Contact Us Section */}
      <div className="text-center text-2xl my-10">
        <p>
          CONTACT <span className="text-red-600 font-bold">US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start space-y-10 md:space-y-0 md:space-x-10">
        {/* Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.631634101585!2d80.61977657410317!3d7.282686213877585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae369224c87d109%3A0x1f9ee574a1cc3a!2sCafe%20Weez!5e0!3m2!1sen!2slk!4v1729875452350!5m2!1sen!2slk"
            className="rounded-lg shadow-lg w-full h-60 md:h-80 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cafe Weez Location"
          />
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-row items-center gap-4">
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
            <h4 className="text-lg">
              Address: No 589 Peradeniya Rd,
              <br /> Kandy 20000
            </h4>
          </div>

          <div className="flex flex-row items-center gap-4">
            <MdOutlinePhoneForwarded className="text-red-500 text-3xl" />
            <h4 className="text-lg">Phone: (+94) 77 442 2448</h4>
          </div>

          <div className="flex flex-row items-center gap-4">
            <MdOutgoingMail className="text-red-500 text-3xl" />
            <h4 className="text-lg">
              Email:
              <br />
              cafeweez@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
