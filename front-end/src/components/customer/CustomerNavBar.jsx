import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../../store/Card';
import CartTab from '../CartTab'; // Adjust the import path if necessary

const CustomerNavbar = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const statusTabCart = useSelector((store) => store.cart.statusTabCart); // Assuming you store this in Redux
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className=" flex flex-col py-2 px-6 ">
      {/* Navbar */}
      <header className="bg-white  py-2 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Company Logo" className="w-10 h-10" />
            <span className="ml-3 text-gray-800 font-bold text-lg">WEEZ CAFE</span>
          </Link>
        </div>

        {/* Right Section: Cart and Profile */}
        <div className="flex items-center space-x-6">
          <div
            className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative"
            onClick={handleOpenTabCart}
          >
            <FaShoppingBag />
            <span
              className="absolute top-2/3 right-1/2 bg-[#a91d3a] text-white text-sm
            w-5 h-5 rounded-full flex justify-center items-center"
            >
              {totalQuantity}
            </span>
          </div>

          {/* Profile */}
          <img
            src="/logo.png"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-teal-400"
          />
        </div>
      </header>

      {/* Main Content and Cart Tab */}
      <main
        className={`w-[1200px] max-w-full m-auto transform transition-transform duration-500 ${
          statusTabCart === false ? '' : '-translate-x-56'
        }`}
      >
        {/* Content goes here */}
      </main>
      <CartTab />
    </div>
  );
};

export default CustomerNavbar;
