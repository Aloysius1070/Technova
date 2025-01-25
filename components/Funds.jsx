"use client";
import React from 'react';
import { Bar, Doughnut, Line } from "react-chartjs-2";
import source from './source.json';
import Target from "./target";

// Example data for contributors
const contributorsData = [
  { id: 1, name: "John Doe", amount: 1000, anonymous: false },
  { id: 2, name: "Jane Smith", amount: 500, anonymous: false },
  { id: 3, name: "Alex Johnson", amount: 2500, anonymous: true },
  { id: 4, name: "Maria Garcia", amount: 2000, anonymous: false },
  { id: 5, name: "Sarah Lee", amount: 750, anonymous: true },
  { id: 6, name: "David Brown", amount: 1500, anonymous: false },
];

const Funds = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-200 py-12 px-6 sm:px-10">
     
      <div className="max-w-screen-xl mx-auto space-y-16">

        
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">Funds Progress Overview</h1>
          <p className="text-xl text-gray-600 mb-6">Dive into a visual representation of your fund progress and how close you are to your goals!</p>
        </div>

        
        <div className="flex justify-between gap-8">
            
          {/* Line Graph */}
          <div className="w-full sm:w-1/3 h-80 bg-accent p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Line Graph</h3>
            <Line
              data={{
                labels: source.map((data) => data.label),
                datasets: [{
                  label: "Count",
                  data: source.map((data) => data.value),
                  borderColor: '#4C51BF',
                  backgroundColor: 'rgba(76, 81, 191, 0.2)',
                  tension: 0.4,
                }],
              }}
            />
          </div>

          {/* Contributors List Section */}
          <div className="w-full sm:w-1/3 bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 max-h-80 overflow-y-auto">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Top Contributors</h3>
            <div className="space-y-4">
              {contributorsData.map((contributor) => (
                <div key={contributor.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
                  <div className="font-semibold text-lg text-gray-700">
                    {contributor.anonymous ? "Anonymous" : contributor.name}
                  </div>
                  <div className="text-sm text-gray-500">{contributor.amount} Rs</div>

                  {/* Contributor Badges */}
                  <div className="flex items-center space-x-2">
                    {contributor.amount >= 2000 && (
                      <span className="text-xs text-white bg-green-600 py-1 px-2 rounded-full">Top Contributor</span>
                    )}
                    {contributor.amount < 1000 && !contributor.anonymous && (
                      <span className="text-xs text-white bg-blue-500 py-1 px-2 rounded-full">First Time Donor</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doughnut Graph */}
          <div className="w-full sm:w-1/3 h-80 bg-accent p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Doughnut Graph</h3>
            <Doughnut
              data={{
                labels: source.map((data) => data.label),
                datasets: [{
                  label: "Count",
                  data: source.map((data) => data.value),
                  backgroundColor: ['#4C51BF', '#F6AD55', '#ED8936', '#48BB78', '#38B2AC'],
                }],
              }}
            />
          </div>
        </div>

        {/* Target Progress Section */}
        <div className="bg-accent p-8 rounded-2xl shadow-xl flex justify-center items-center mt-12 transform hover:scale-105 transition-all duration-300">
          <div className="w-full sm:w-2/3 lg:w-1/2">
            <Target />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Funds;
