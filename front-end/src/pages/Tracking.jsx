import React from 'react';

const Tracking = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Order Tracking</h1>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">Order #12345</span>
            <span className="text-teal-600 font-medium">In Transit</span>
          </div>

          <div className="text-sm text-gray-600">
            <p>Estimated Delivery: 3-5 days</p>
            <p>Current Location: Colombo, Sri Lanka</p>
          </div>

          <div className="mt-4 bg-teal-100 text-teal-600 p-4 rounded-lg">
            <h2 className="font-semibold">Tracking Updates:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Shipped: 12th Nov, 2024</li>
              <li>Out for Delivery: 18th Nov, 2024</li>
              <li>Delivered: 20th Nov, 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
