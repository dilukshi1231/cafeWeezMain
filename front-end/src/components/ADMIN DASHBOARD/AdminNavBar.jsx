import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminNavbar = () => {
  const [userEmail, setUserEmail] = useState('');
  const [profileImage, setProfileImage] = useState('/logo.png'); // Default profile image
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from localStorage
        if (!token) {
          setError('No token found!');
          setLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:3001/api/auth/users', {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token for authentication
          },
        });

        // Log the response for debugging
        console.log('User data response:', response.data);

        if (response.status === 200) {
          const { email, profilePicture } = response.data;
          setUserEmail(email);

          // Check if profilePicture exists, and set the default if not
          if (profilePicture) {
            setProfileImage(profilePicture);
          } else {
            setProfileImage('/logo.png'); // Fallback to default if no profile picture
          }
        } else {
          setError('Failed to fetch user data');
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Show error message
  }
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
        <p className="hidden md:block text-gray-600 text-sm font-medium">{userEmail}</p>
        <img
          src={profileImage}
          alt="Profile"
          className="w-8 h-8 rounded-full border-2 border-teal-400"
        />
      </div>
    </header>
  );
};

export default AdminNavbar;
