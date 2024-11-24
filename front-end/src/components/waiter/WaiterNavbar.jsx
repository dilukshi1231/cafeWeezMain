import React from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardList, FaUserFriends, FaCommentDots } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { MdFeedback } from 'react-icons/md';

const WaiterNavbar = () => {
  const navLinks = [
    { path: '/admin', label: 'Order Management', icon: <FaClipboardList /> },
    { path: '/admin1', label: 'User Management', icon: <AiOutlineUser /> },
    { path: '/admin2', label: 'User Feedback', icon: <MdFeedback /> },
  ];

  const renderNavItems = () =>
    navLinks.map((link) => (
      <li key={link.path} className="flex items-center space-x-2">
        <span className="text-white text-lg">{link.icon}</span>
        <Link
          to={link.path}
          className="text-white hover:text-teal-400 transition-colors duration-200 font-medium py-2 px-4 rounded-md"
        >
          {link.label}
        </Link>
      </li>
    ));

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Company Logo" className="w-10 h-10" />
          <span className="ml-3 text-gray-800 font-bold text-lg">WEEZ CAFE</span>
        </Link>

        
      </div>

      {/* Right Section: User Email and Profile */}
      <div className="flex items-center space-x-4">
        <p className="hidden md:block text-gray-600 text-sm font-medium">waiter@example.com</p>
        <img
          src="/logo.png"
          alt="Profile"
          className="w-8 h-8 rounded-full border-2 border-teal-400"
        />
        
      </div>
    </header>
  );
};

export default WaiterNavbar;
