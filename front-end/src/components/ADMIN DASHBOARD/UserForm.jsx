import React from 'react';

const UserForm = ({ onAddUser, toggleForm, showForm }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <button
        onClick={toggleForm}
        className="w-full py-2 mb-4 bg-[#c73659] text-white rounded-md hover:bg-[#a91d3a] transition"
      >
        {showForm ? 'Close Form' : 'Create New User'}
      </button>

      {showForm && (
        <form onSubmit={onAddUser} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Role</label>
            <select
              name="role"
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="" disabled selected>
                Select Role
              </option>
              <option value="Waiter">Waiter</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#00C49F] text-white rounded-md hover:bg-[#0088FE] transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default UserForm;
