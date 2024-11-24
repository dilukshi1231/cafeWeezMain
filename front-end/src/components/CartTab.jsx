import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem'; // Correctly import CartItem
import { toggleStatusTab } from '../store/Card';
import { Link } from 'react-router-dom';

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items); // Access cart items from Redux store
  const statusTab = useSelector((store) => store.cart.statusTab); // Access cart tab status
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab()); // Toggle the cart tab's visibility
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-white shadow-xl w-96 h-full grid grid-rows-[60px_1fr_60px]
      transform transition-transform duration-500 rounded-lg ${
        statusTab === false ? 'translate-x-full' : ''
      } sm:w-80 md:w-96 xl:w-1/3`}
    >
      <h2 className="p-5 text-[#a91d3A] text-2xl font-semibold">Shopping Cart</h2>
      <div className="p-5 overflow-y-auto space-y-4">
        {/* Render CartItem for each item in the cart */}
        {carts.length > 0 ? (
          carts.map((item, key) => <CartItem key={key} data={item} />)
        ) : (
          <p className="text-center text-[#a91d3a]">Your cart is empty.</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 p-5">
        <button
          className="bg-[#a91d3a] text-white py-2 rounded-lg hover:bg-[#9e1832] transition duration-200"
          onClick={handleCloseTabCart}
        >
          CLOSE
        </button>
        <button className="bg-[#ed1b24] text-white py-2 rounded-lg hover:bg-[#d9161f] transition duration-200">
          <Link to='/checkout'> CHECKOUT </Link>
        </button>
      </div>
    </div>
  );
};

export default CartTab;
