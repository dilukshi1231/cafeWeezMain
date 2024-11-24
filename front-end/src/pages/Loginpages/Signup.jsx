import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import Logo from '/logo.png'; // Replace with your logo path

function SignUpCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Update form field values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the form
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.confirmPassword) errors.confirmPassword = 'Confirm password is required';

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (formData.password && formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password && !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      errors.password = 'Password must contain at least one special character';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission and Axios integration
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Prevent submission if validation fails
    }

    setIsLoading(true);
    setError(null);

    try {
      // Axios POST request to the registration endpoint
      const response = await axios.post('http://localhost:3001/api/auth/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data); // Debugging log
      navigate('/login'); // Redirect to login on success
    } catch (err) {
      if (err.response) {
        // Handle backend errors
        setError(err.response.data.message || 'Something went wrong. Please try again later.');
      } else {
        // Handle network/server errors
        setError('Network or server error. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#C73659]">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column (Image) */}
        <div className="flex justify-center items-center">
          <img
            src={Logo}
            alt="Company Logo"
            className="max-w-[300px] w-full h-auto"
          />
        </div>

        {/* Right column (Form) */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full mt-1 p-2 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full mt-1 p-2 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full mt-1 p-2 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full mt-1 p-2 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {formErrors.confirmPassword && <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#C73659] rounded-md text-white hover:bg-[#A91D3A] transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-teal-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
