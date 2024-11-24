import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages Imports
import About from './pages/about/About';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import LoginCard from './pages/Loginpages/LoginCard';
import SignUpCard from './pages/Loginpages/Signup';
import Contact from './pages/contactus/Contact';
import NotFound from './pages/NotFound';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Tracking from './pages/Tracking';

// Admin Imports
import Admin from './pages/Admin/Admin';
import Admin2 from './pages/Admin/Admin2';
import Admin3 from './pages/Admin/Admin3';

// Waiter Imports
import Waiter from './pages/waiter/Waiter';

// Customer Imports
import Customer from './pages/customer/Customer';


function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get token and role from localStorage
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      setUserRole(role); // Set user role from localStorage
    }
  }, []);

  return (
    <Router>
      <Routes>
        

        {/* Admin Pages */}
        <Route path="/admin1" element={<Admin />} />
        <Route path="/admin2" element={<Admin2 />} />
        <Route path="/admin3" element={<Admin3 />} />

        {/* Waiter Pages */}
        <Route path="/waiter1" element={<Waiter />} />

        {/* Customer Pages */}
        <Route path="/customer1" element={<Customer />} />

        {/* Public Routes */}
        <Route path="/login" element={<LoginCard />} />
        <Route path="/signup" element={<SignUpCard />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Other Routes */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/tracking" element={<Tracking />} />

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
