import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems }) => {
  // Ensure cartItems is an array and calculate the total amount
  const totalAmount = Array.isArray(cartItems) 
    ? cartItems.reduce((sum, item) => sum + parseFloat(item.price || 0), 0) 
    : 0;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Checkout</h1>

        {/* Display cart items */}
        <div className="space-y-4">
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              item && item.image && item.name && item.price ? (
                <div key={index} className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-sm text-gray-600">{item.price} LKR</p>
                    </div>
                  </div>
                </div>
              ) : null
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Total and Payment Button */}
        <div className="mt-6 flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">Total: {totalAmount.toFixed(2)} LKR</span>
          <Link
            to="/payment"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Proceed to Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
