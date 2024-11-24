import React from "react";

const TableBooking = () => {
  return (
    <div className="p-4 md:p-16 bg-white">
      <div className="bg-[#A91D3A] py-12">
        <h1 className="text-center text-white font-bold text-4xl">Book A Table</h1>
        <div className="bg-white p-8 rounded-xl shadow-lg mt-8 mx-auto max-w-4xl">
          <form>
            {/* Row1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name*"
                className="border-b border-[#A91D3A] focus:outline-none w-full py-2 px-3"
                required
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="border-b border-[#A91D3A] focus:outline-none w-full py-2 px-3"
                required
              />
              <input
                type="tel"
                placeholder="Phone*"
                className="border-b border-[#A91D3A] focus:outline-none w-full py-2 px-3"
                required
              />
            </div>

            {/* Row2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                placeholder="DD/MM/YYYY*"
                className="border-b border-[#A91D3A] focus:outline-none w-full py-2 px-3"
                required
              />
              <input
                type="text"
                placeholder="Time*"
                className="border-b border-[#A91D3A] focus:outline-none w-full py-2 px-3"
                required
              />
              <input
                type="text"
                placeholder="Person*"
                className="border-b border-[#A91D3A] focus:outline-none w-full py-2 px-3"
                required
              />
            </div>

            {/* Row3 */}
            <div className="mb-6">
              <textarea
                placeholder="Message*"
                className="border-b border-[#A91D3A] focus:outline-none w-full py-2 px-3 h-32"
                required
              />
            </div>

            {/* Submit button */}
            <div className="mt-8 flex justify-center">
              <button className="btn bg-[#A91D3A] text-white py-2 px-6 rounded-full hover:bg-[#C43B56] transition duration-300">
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TableBooking;
