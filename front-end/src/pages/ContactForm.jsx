import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (


    <div className="max-w-lg mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold text-center mb-14 text-gray-800">
    Contact Us
  </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 h-32"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          className="w-full bg-green-700 hover:bg-green-800 text-red font-bold py-2 px-4 rounded-lg shadow"
          type="submit"
        >
          Send
        </button>
      </form>

      <div className="mt-6">
        {error.length > 0 &&
          error.map((e, index) => (
            <div
              key={index}
              className={`text-center px-4 py-2 rounded-lg ${
                success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-600"
              }`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}
