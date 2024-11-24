// components/OrderApproval.jsx
import React from 'react';

const OrderApproval = ({ orders, approveOrder }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Order Approval</h2>
      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="p-2 border-b">Order ID</th>
            <th className="p-2 border-b">Customer</th>
            <th className="p-2 border-b">Food</th>
            <th className="p-2 border-b">Status</th>
            <th className="p-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="p-2 border-b">{order.id}</td>
              <td className="p-2 border-b">{order.name}</td>
              <td className="p-2 border-b">{order.food}</td>
              <td className="p-2 border-b">{order.status}</td>
              <td className="p-2 border-b">
                {order.status === 'Pending' && (
                  <button
                    onClick={() => approveOrder(order.id)}
                    className="py-1 px-2 bg-[#00C49F] text-white rounded-md hover:bg-[#0088FE] transition"
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
};

export default OrderApproval;
