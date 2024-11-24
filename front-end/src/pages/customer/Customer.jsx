import React, { useState } from 'react';
import CustomerNavbar from '../../components/customer/CustomerNavBar';
import Customersidebar from '../../components/customer/CustomerSideBar';
import Card from '../../components/FoodCard'; // Assuming Card is stored here

const customer = () => {
  const [cartItems, setCartItems] = useState([]); // Cart state to store added items

  // Sample data for Card items
  const sampleItems = [
    {
      id: 1,
      name: 'Burger',
      price: 500,
      image: '/path/to/burger-image.jpg',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 800,
      image: '/path/to/pizza-image.jpg',
    },
    {
      id: 3,
      name: 'Pasta',
      price: 600,
      image: '/path/to/pasta-image.jpg',
    },,
    {
      id: 4,
      name: 'Pasta',
      price: 600,
      image: '/path/to/pasta-image.jpg',
    },
    {
      id: 5,
      name: 'Pasta',
      price: 600,
      image: '/path/to/pasta-image.jpg',
    },
    {
      id: 6,
      name: 'Pasta',
      price: 600,
      image: '/path/to/pasta-image.jpg',
    }
  ];

  // Add item to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]); // Add the selected item to the cart
  };

  return (
    <div className="h-screen flex flex-col">
      <CustomerNavbar cartItems={cartItems.length} /> {/* Pass cart item count to Navbar */}
      <main className="flex-1 bg-gray-100 flex">
        <Customersidebar  /> 
        <div className="flex-1 p-6">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
            <p className="text-gray-600 mt-2">Manage users and assign roles.</p>
          </header>

          {/* Product Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 ">
            {sampleItems.map((item) => (
              <Card key={item.id} item={item} handleAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default customer;
