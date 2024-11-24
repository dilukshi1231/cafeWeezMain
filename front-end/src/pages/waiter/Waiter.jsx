import React, { useState } from 'react';
import WaiterNavbar from '../../components/waiter/waiterNavbar';
import WaiterSidebar from '../../components/waiter/waiterSidebar';
import { BsBoxSeam } from 'react-icons/bs';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

// Order Approval Table Component with Approve and Pending Buttons
const OrderApprovalTable = ({ orders, changeOrderStatus }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
    <h3 className="text-lg font-bold text-gray-800">Order Approval</h3>
    <table className="w-full mt-4 text-left border">
      <thead>
        <tr>
          <th className="p-2 border-b">Customer Name</th>
          <th className="p-2 border-b">Food Item</th>
          <th className="p-2 border-b">Status</th>
          <th className="p-2 border-b">Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td className="p-2 border-b">{order.name}</td>
            <td className="p-2 border-b">{order.food}</td>
            <td className="p-2 border-b">{order.status}</td>
            <td className="p-2 border-b flex gap-2">
              {order.status === 'Approved' && (
                <button
                  onClick={() => changeOrderStatus(order.id, 'Pending')}
                  className="px-4 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                >
                  Set Pending
                </button>
              )}
              {order.status === 'Pending' && (
                <button
                  onClick={() => changeOrderStatus(order.id, 'Approved')}
                  className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  Approve
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Chat with Customer Component
const ChatWithCustomer = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
    <h3 className="text-lg font-bold text-gray-800">Chat with Customer</h3>
    <div className="mt-4 space-y-4">
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-sm text-gray-700">
          <strong>Customer:</strong> Hi, can you help me with my order?
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-sm text-gray-700">
          <strong>Waiter:</strong> Sure! How can I assist you?
        </p>
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l-md"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition">
          Send
        </button>
      </div>
    </div>
  </div>
);

const Waiter = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'John Doe', food: 'Burger', status: 'Approved' },
    { id: 2, name: 'Jane Smith', food: 'Pizza', status: 'Pending' },
    { id: 3, name: 'Alice Brown', food: 'Pasta', status: 'Pending' },
    { id: 4, name: 'Mark Lee', food: 'Steak', status: 'Approved' },
  ]);

  // Calculate order counts
  const totalOrders = orders.length;
  const approvedOrders = orders.filter((order) => order.status === 'Approved').length;
  const waitingOrders = orders.filter((order) => order.status === 'Pending').length;

  const changeOrderStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <WaiterNavbar />

      <main className="flex-1 bg-gray-100 flex">
        <WaiterSidebar />

        <div className="flex-1 p-6">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Waiter Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Welcome back! Manage orders efficiently.
            </p>
          </header>

          {/* Order Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Total Orders Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Total Orders</h2>
                <p className="text-gray-600 mt-1">{totalOrders} orders</p>
              </div>
              <BsBoxSeam className="text-4xl text-teal-400" />
            </div>

            {/* Approved Orders Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Approved Orders</h2>
                <p className="text-gray-600 mt-1">{approvedOrders} approved</p>
              </div>
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>

            {/* Waiting Orders Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Waiting Orders</h2>
                <p className="text-gray-600 mt-1">{waitingOrders} waiting</p>
              </div>
              <FaClock className="text-4xl text-yellow-500" />
            </div>
          </div>

          {/* Order Approval Table */}
          <OrderApprovalTable orders={orders} changeOrderStatus={changeOrderStatus} />

          {/* Chat with Customer */}
          <ChatWithCustomer />
        </div>
      </main>
    </div>
  );
};

export default Waiter;
