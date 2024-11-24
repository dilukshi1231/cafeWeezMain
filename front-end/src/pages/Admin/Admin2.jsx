import React, { useState } from 'react';
import AdminNavbar from '../../components/ADMIN DASHBOARD/AdminNavBar';
import Adminsidebar from '../../components/ADMIN DASHBOARD/Adminsidebar';
import UserForm from '../../components/ADMIN DASHBOARD/UserForm';
import UserTable from '../../components/ADMIN DASHBOARD/UserTable';
import { BsBoxSeam } from 'react-icons/bs';
import { FaUserFriends, FaUserTie } from 'react-icons/fa';

const Admin2 = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
    };
    setUsers([...users, newUser]);
    e.target.reset();
    setShowForm(false);
  };

  const totalUsers = users.length;
  const totalWaiters = users.filter((user) => user.role === 'Waiter').length;
  const totalAdmins = users.filter((user) => user.role === 'Admin').length;

  return (
    <div className="h-screen flex flex-col">
      <AdminNavbar />

      <main className="flex-1 bg-gray-100 flex">
        <Adminsidebar />

        <div className="flex-1 p-6">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
            <p className="text-gray-600 mt-2">
              Manage users and assign roles.
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Total Users Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Total Users</h2>
                <p className="text-gray-600 mt-1">{totalUsers} users</p>
              </div>
              <FaUserFriends className="text-4xl text-blue-500" />
            </div>

            {/* Total Waiters Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Total Waiters</h2>
                <p className="text-gray-600 mt-1">{totalWaiters} waiters</p>
              </div>
              <BsBoxSeam className="text-4xl text-teal-400" />
            </div>

            {/* Total Admins Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Total Admins</h2>
                <p className="text-gray-600 mt-1">{totalAdmins} admins</p>
              </div>
              <FaUserTie className="text-4xl text-indigo-600" />
            </div>
          </div>

          {/* User Management Form */}
          <UserForm
            onAddUser={handleAddUser}
            toggleForm={() => setShowForm(!showForm)}
            showForm={showForm}
          />

          {/* User List */}
          <UserTable users={users} />
        </div>
      </main>
    </div>
  );
};

export default Admin2;
