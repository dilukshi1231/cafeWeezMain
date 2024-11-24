import React, { useState } from 'react';

const MenuManagement = ({ menuItems, setMenuItems }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddMenu = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const imageFile = formData.get('image');
    const newMenu = {
      name: formData.get('foodName'),
      category: formData.get('category'),
      image: imageFile ? URL.createObjectURL(imageFile) : null,
      price: formData.get('price'),
    };
    setMenuItems([...menuItems, newMenu]);
    e.target.reset();
    setShowForm(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Menu Management</h2>

      <button
        onClick={() => setShowForm(!showForm)}
        className="w-full py-2 mb-4 bg-[#c73659] text-white rounded-md hover:bg-[#a91d3a] transition"
      >
        {showForm ? 'Close Form' : 'Add Menu'}
      </button>

      {showForm && (
        <form onSubmit={handleAddMenu} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Food Name</label>
            <input
              type="text"
              name="foodName"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Category</label>
            <select
              name="category"
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="Foods">Foods</option>
              <option value="Drinks">Drinks</option>
              <option value="Desserts">Desserts</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Price</label>
            <input
              type="number"
              name="price"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#00C49F] text-white rounded-md hover:bg-[#0088FE] transition"
          >
            Submit
          </button>
        </form>
      )}

      <h3 className="text-md font-semibold text-gray-800 mt-6">Menu Items</h3>
      <table className="w-full mt-4 text-left border">
        <thead>
          <tr>
            <th className="p-2 border-b">Food Name</th>
            <th className="p-2 border-b">Category</th>
            <th className="p-2 border-b">Image</th>
            <th className="p-2 border-b">Price</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index}>
              <td className="p-2 border-b">{item.name}</td>
              <td className="p-2 border-b">{item.category}</td>
              <td className="p-2 border-b">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover"
                  />
                )}
              </td>
              <td className="p-2 border-b">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuManagement;
