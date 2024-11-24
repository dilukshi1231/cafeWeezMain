import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { FaClipboardList, FaUserFriends, FaCommentDots } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { MdFeedback } from 'react-icons/md';

const Customersidebar = () => {
  const navLinks = [
    { path: '/admin', label: 'Dining', icon: <FaClipboardList /> },
    { path: '/admin1', label: 'Online order', icon: <AiOutlineUser /> },
    { path: '/admin1', label: 'Profile', icon: <AiOutlineUser /> },
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
    <aside className="w-64 bg-gradient-to-r from-[#a91d3a] to-[#c73659] flex flex-col justify-between py-6 px-4">
      {/* Navigation Links in Sidebar */}
      <nav>
        <ul className="space-y-6">{renderNavItems()}</ul>
      </nav>

      {/* Footer Section */}
      <div className="mt-auto">
        <Link
          to="/login"
          className="py-2 px-4 bg-[#ed1b24] text-white rounded-md hover:bg-[#C73659] transition duration-200 flex items-center space-x-2"
        >
          <FaSignInAlt />
          <span>Login</span>
        </Link>
      </div>
    </aside>
  );
};

export default Customersidebar;
