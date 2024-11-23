import React, { useState } from "react";

const TableBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    persons: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle successful booking (e.g., show a success message)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <div className="p-[1rem] md:p-[4rem] bg-white">
      <div className="bg-gamboge">
        <div>
          <h1 className="flex justify-center text-white font-bold pt-12 text-4xl">
            Book A Table
          </h1>
          <div
            className="bg-white border-gamboge"
            style={{ borderWidth: "4rem" }}
          >
            <form
              className="border-white"
              style={{ borderWidth: "2rem" }}
              onSubmit={handleSubmit}
            >
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-between">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="border-b border-black bg-white focus:outline-none w-full"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="border-b border-black bg-white focus:outline-none w-full"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="border-b border-black bg-white focus:outline-none w-full"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-between py-5">
                <input
                  type="date"
                  placeholder="DD/MM/YYYY*"
                  className="border-b border-black bg-white focus:outline-none w-full"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <input
                  type="time"
                  placeholder="Time*"
                  className="border-b border-black bg-white focus:outline-none w-full"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  placeholder="Persons*"
                  className="border-b border-black bg-white focus:outline-none w-full"
                  name="persons"
                  value={formData.persons}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 3 */}
              <div className="flex flex-col">
                <textarea
                  placeholder="Message*"
                  className="border-b border-black bg-white focus:outline-none"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Error handling and submit button */}
              <div className="mt-12 flex justify-center">
                <button
                  type="submit"
                  className="btn bg-white border-gamboge text-gamboge hover:bg-gamboge hover:text-white px-6 py-2 rounded-md"
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBooking;
