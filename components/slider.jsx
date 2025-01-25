"use client"
import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50); // Initial value set to 50%

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <label className="text-lg font-semibold">Percentage Slider</label>
      <div className="relative w-64">
        {/* Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none"
        />

        {/* Markers */}
        <div className="absolute top-0 left-0 w-full flex justify-between text-sm text-gray-500">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Display the current value */}
      <div className="text-xl font-semibold">{value}%</div>
    </div>
  );
};

export default Slider;
