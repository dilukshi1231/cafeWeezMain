import React from 'react';

export default function Footer() {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover" href="#">Table Booking</a>
        <a className="link link-hover" href="#">Online Ordering</a>
        <a className="link link-hover" href="#">Inhouse Ordering</a>
      </nav>
      <nav>
        <h6 className="footer-title">Reach Us</h6>
        <a className="link link-hover" href="#">About us</a>
        <a className="link link-hover" href="#">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}


/*

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutgoingMail, MdOutlinePhoneForwarded } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-background bg-black text-white py-8 h-[80vh] sm:h-auto">
      <div className="container mx-auto h-auto flex flex-col md:flex-row sm:items-end md:items-center space-y-10 md:space-x-[10rem] items-center">
        {/* Google Map Embed 
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.631634101585!2d80.61977657410317!3d7.282686213877585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae369224c87d109%3A0x1f9ee574a1cc3a!2sCafe%20Weez!5e0!3m2!1sen!2slk!4v1729875452350!5m2!1sen!2slk"
            className="image w-full h-[30vh] md:h-[450px] border-0 p-1 md:pr-3"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />{" "}
        </div>
        {/* Footer Content 
        <div className="h-[20vh] flex flex-col space-y-5 sm:space-y-10">
          <div className="text-gamboge text-2xl sm:text-4xl underline">
            CONTACT US
          </div>
          <div className="flex flex-row space-x-5">
            <FaMapMarkerAlt className="text-gamboge text-2xl sm:text-4xl" />
            <h4 className="text-sm">
              Address : No 589 Peradeniya Rd,
              <br /> Kandy 20000
            </h4>
          </div>
          <div className="flex flex-row space-x-5">
            <MdOutlinePhoneForwarded className="text-gamboge text-2xl sm:text-4xl" />
            <h4 className="text-sm">Phone : (+94) 77 442 2448</h4>
          </div>
          <div className="flex flex-row space-x-5">
            <MdOutgoingMail className="text-gamboge text-2xl sm:text-4xl" />
            <h4 className="text-sm">
              eMail : <br />
              cafeweez@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

*/