import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google'; // Import Google Login
import Logo from '/logo.png'; 

function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in and retrieve their role
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (token && userRole) {
      setRole(userRole); // Set role from localStorage
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Reset any previous errors

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password,
      });

      console.log('Response from server:', response.data); // Debugging log

      // Extract token and role from the response
      const { token, role } = response.data;

      if (token && role) {
        localStorage.setItem('token', token); // Store token in localStorage
        localStorage.setItem('role', role); // Store role in localStorage
        setRole(role); // Update role in state

        // Redirect user based on their role
        if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'waiter') {
          navigate('/waiter');
        } else if (role === 'customer') {
          navigate('/customer');
        } else {
          setError('Unknown role. Please contact support.');
        }
      } else {
        // If no token or role is returned
        setError('No token or role received from the server.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading spinner after the attempt
    }
  };

  const handleGoogleSignIn = async (response) => {
    try {
      console.log('Google Response:', response); // Log the response to inspect its structure
  
      const { credential } = response;
      if (!credential) {
        setError('Google sign-in failed: No credential found.');
        return;
      }
  
      // Send the Google token (credential) to your backend to authenticate the user
      const backendResponse = await axios.post('http://localhost:3001/api/auth/google-login', {
        token: credential, // Send Google token to your server
      });
  
      const { token, role } = backendResponse.data;
  
      if (token && role) {
        localStorage.setItem('token', token); // Store token in localStorage
        localStorage.setItem('role', role); // Store role in localStorage
        setRole(role); // Update role in state
  
        // Redirect user based on their role
        if (role === 'admin') {
          navigate('/admin1');
        } else if (role === 'waiter') {
          navigate('/waiter1');
        } else if (role === 'customer') {
          navigate('/customer1');
        }
      } else {
        setError('Google login failed: No token or role received.');
      }
    } catch (error) {
      console.error('Error in Google sign-in:', error);
      setError('Google login failed.');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login'); // Redirect to the login page or home page after logout
  };
  
  

  return (
    <div className="bg-[#C73659] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl px-6 lg:px-20 py-16 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Logo */}
        <div className="flex justify-center items-center">
          <img
            src={Logo} // Logo Image
            alt="Company Logo"
            className="max-w-[300px] w-full h-auto"
          />
        </div>

        {/* Right Column: Login Form */}
        <div className="flex flex-col justify-center">
          {role ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-[#A91D3A]">
                Welcome, {role.charAt(0).toUpperCase() + role.slice(1)}!
              </h2>
              <button
                onClick={handleLogout}
                className="w-full py-2 mt-4 bg-red-600 rounded-md hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-center text-[#A91D3A]">Login to Your Account</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full mt-1 p-3 rounded-md bg-white border border-[#A91D3A] text-black focus:outline-none focus:ring-2 focus:ring-[#A91D3A]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full mt-1 p-3 rounded-md bg-white border border-[#A91D3A] text-black focus:outline-none focus:ring-2 focus:ring-[#A91D3A]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#A91D3A] text-white rounded-md hover:bg-[#B92D50] transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>

              {error && <p className="text-red-500 text-center">{error}</p>}

              <div className="mt-6 flex justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleSignIn}
                  onError={() => setError('Google Sign-In failed.')}
                  useOneTap
                  theme="outline"
                  shape="circle"
                  width="100%"
                />
              </div>
            
              <p className="text-center text-sm mt-4">
                Don't have an account?{' '}
                <Link to="/signup" className="text-[#A91D3A] hover:underline">Sign Up</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
