import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa'; // Importing a 404-related icon

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-xl">
        {/* 404 Error Icon */}
        <FaExclamationTriangle className="text-6xl text-red-600 mb-4 mx-auto text-[#c73659]" />
        
        {/* Error Message */}
        <h1 className="text-6xl font-extrabold text-[#a91d3a] mb-4">404</h1>
        <p className="text-2xl text-[#c73659] mb-6">Oops! Page Not Found</p>
        <p className="text-[#a91d3a] mb-6">The page you're looking for doesn't exist or has been moved.</p>

        {/* Button to Go Back to Home */}
        <Link
          to="/"
          className="text-white bg-[#a91d3a] hover:bg-[#ed1b24] font-semibold py-2 px-6 rounded-md transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
