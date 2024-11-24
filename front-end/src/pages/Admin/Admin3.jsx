import React, { useState } from 'react';
import AdminNavbar from '../../components/ADMIN DASHBOARD/AdminNavBar';
import Adminsidebar from '../../components/ADMIN DASHBOARD/Adminsidebar';

const Admin3 = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Customer', name: 'John Doe', text: 'Hi, I have a question about my order.' },
    { id: 2, sender: 'Customer', name: 'Jane Smith', text: 'Can you help me with the menu?' },
    { id: 3, sender: 'Admin', text: 'Sure, let me know how I can assist you.' },
  ]);

  const [messageText, setMessageText] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'Admin',
      text: messageText.trim(),
    };

    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  return (
    <div className="h-screen flex flex-col">
      <AdminNavbar />

      <main className="flex-1 bg-gray-100 flex">
        <Adminsidebar />

        <div className="flex-1 p-6">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Customer Messages</h1>
            <p className="text-gray-600 mt-2">View and respond to customer messages.</p>
          </header>

          {/* Chat Box */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-50%">
            <div className="flex-1 overflow-y-auto mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'Admin' ? 'justify-end' : 'justify-start'
                  } mb-2`}
                >
                  <div
                    className={`max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'Admin'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.sender === 'Customer' && (
                      <p className="text-sm font-bold mb-1">{message.name}</p>
                    )}
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={sendMessage} className="flex items-center">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg mr-2"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin3;
