import React from "react";

const Service = () => {
  return (
    <div className="relative p-4 overflow-hidden">
      <img
        src="/Images/RiceAndKottu.jpg"
        alt="Rice and Kottu"
        className="w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center space-y-6 py-20 px-10">
        <h2 className="text-3xl font-semibold" style={{ fontFamily: "Dancing Script, cursive" }}>
          KANDY
        </h2>
        <h1 className="text-5xl font-bold leading-tight">
          WEEZ CAFE
        </h1>
        <p className="mt-2 text-lg font-semibold max-w-lg">
          CHOOSE YOUR FAVORITE FLAVORS
        </p>
      </div>
    </div>
  );
};

export default Service;
