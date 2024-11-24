import React, { useState } from 'react';
import AdminNavbar from '../../components/ADMIN DASHBOARD/AdminNavBar';
import Adminsidebar from '../../components/ADMIN DASHBOARD/Adminsidebar';
import MenuManagement from '../../components/ADMIN DASHBOARD/MenuManagement';
import OrderApproval from '../../components/ADMIN DASHBOARD/OrderApproval';
import { BsBoxSeam } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';

const Admin = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([
    { id: 1, name: 'John Doe', food: 'Burger', status: 'Pending' },
    { id: 2, name: 'Jane Smith', food: 'Pizza', status: 'Pending' },
  ]);

  // Calculate total categories dynamically
  const uniqueCategories = new Set(menuItems.map((item) => item.category));

  const approveOrder = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: 'Approved' } : order
      )
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <AdminNavbar />

      <main className="flex-1 bg-gray-100 flex">
        <Adminsidebar />

        <div className="flex-1 p-6">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Welcome back! Manage orders, menu, and categories efficiently.
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Total Orders */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Total Orders</h2>
                <p className="text-gray-600 mt-1">{orders.length} orders</p>
              </div>
              <BsBoxSeam className="text-4xl text-teal-400" />
            </div>

            {/* Total Menu Items */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Total Menu Items</h2>
                <p className="text-gray-600 mt-1">{menuItems.length} items</p>
              </div>
              <FaThList className="text-4xl text-green-500" />
            </div>

            {/* Total Categories */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Total Categories</h2>
                <p className="text-gray-600 mt-1">{uniqueCategories.size} categories</p>
              </div>
              <FaThList className="text-4xl text-indigo-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MenuManagement menuItems={menuItems} setMenuItems={setMenuItems} />
            <OrderApproval orders={orders} approveOrder={approveOrder} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
