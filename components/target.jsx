"use client";
import React, { useState } from 'react';

const Target = () => {
  const [amount, setAmount] = useState(1000); // State to keep track of the amount entered
  const target = 100000; // Target amount

  // Input change handler with validation to ensure it's within the target range
  const handleInputChange = (e) => {
    let value = e.target.value;

    // Allow empty string, to reset if needed, or convert to a valid number
    if (value === "") {
      setAmount(""); // Allow input to be cleared
      return;
    }

    // Ensure the input is a valid number and within the range
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      let newValue = parsedValue;
      // Ensure the amount does not exceed the target
      if (newValue > target) newValue = target;
      // Ensure the amount is non-negative
      if (newValue < 0) newValue = 0;
      setAmount(newValue);
    }
  };

  const progress = (amount / target) * 100;

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-r text-black from-indigo-100 to-teal-100 rounded-lg shadow-xl max-w-md mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800">Target to 200 Rs</h1>

      {/* Input to update amount */}
      <div className="flex flex-col items-center space-y-4">
        <input
          type="number"
          value={amount}
          onChange={handleInputChange}
          className="w-full sm:w-3/4 md:w-1/2 p-3 border-2 border-indigo-400 rounded-xl text-center text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Enter amount"
          min="0" // Prevents negative values
          max={target} // Prevents values greater than the target
        />
        <span className="text-sm text-gray-600">Enter the amount towards 200 Rs</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-4 rounded-full relative">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-in-out ${
            progress === 100 ? "bg-green-500" : "bg-blue-600"
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Display Progress */}
      <div className="text-xl font-semibold text-gray-700 mt-2">
        {amount} Rs / {target} Rs
      </div>

      {/* Status Message */}
      <div className={`text-xl font-semibold ${progress === 100 ? "text-green-600" : "text-gray-700"}`}>
        {progress === 100
          ? 'Congratulations! Target Achieved.'
          : `Progress: ${Math.min(progress, 100).toFixed(0)}%`}
      </div>
    </div>
  );
};

export default Target;
