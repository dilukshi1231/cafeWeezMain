import React from 'react';

const UserTable = ({ users }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-md font-semibold text-gray-800 mt-6">Users</h3>
      <table className="w-full mt-4 text-left border">
        <thead>
          <tr>
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Email</th>
            <th className="p-2 border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="p-2 border-b">{user.name}</td>
              <td className="p-2 border-b">{user.email}</td>
              <td className="p-2 border-b">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
