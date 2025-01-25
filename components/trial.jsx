"use client";
import React, { useState } from 'react';
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Trial= () => {
  const [fundsRaised, setFundsRaised] = useState(0);
  const [fundingGoal] = useState(5000); // example funding goal
  const [contributors, setContributors] = useState(25); // Example number of contributors
  const [totalContributions, setTotalContributions] = useState(35); // Total donations
  const [projectDescription, setProjectDescription] = useState("");

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const progress = (fundsRaised / fundingGoal) * 100;

  // Data for the charts
  const chartData = {
    labels: ['Supplies', 'Logistics', 'Marketing', 'Others'],
    datasets: [
      {
        data: [1500, 2000, 1000, 500], // Example data
        backgroundColor: ['#4C51BF', '#ED8936', '#F6AD55', '#38B2AC'],
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Community Project Platform</h1>
          <p className="text-lg text-gray-600">Create, Contribute, and Track the Progress of Community Projects</p>
        </header>

        {/* Create Project Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Create Your Project</h2>
          <form className="space-y-6">
            <textarea
              value={projectDescription}
              onChange={handleProjectDescriptionChange}
              className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Describe your project's purpose and expected impact..."
            />
            <input
              type="number"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Set your funding goal (e.g., 5000 Rs)"
            />
            <input
              type="date"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Create Project
            </button>
          </form>
        </div>

        {/* Contribute to Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Project Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Neighborhood Cleanup</h3>
            <p className="text-gray-600 mb-4">Help us clean up the local park and make it a beautiful space for the community.</p>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Contribute Now
            </button>
          </div>
        </div>

        {/* Fund Tracking Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Fund Tracking</h2>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Funds Raised: {fundsRaised} Rs</h3>
              <h3 className="text-lg font-semibold text-gray-700">Goal: {fundingGoal} Rs</h3>
            </div>
            <div>
              <p className="text-lg text-gray-600">Contributors: {contributors}</p>
            </div>
          </div>

          <div className="h-64 mb-8">
            <Bar
              data={{
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                  {
                    label: 'Funds Raised',
                    data: [500, 1500, 3000, 4500],
                    backgroundColor: '#4C51BF',
                  },
                ],
              }}
            />
          </div>

          <div className="h-64 mb-8">
            <Doughnut data={chartData} />
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-lg">Progress: {progress.toFixed(0)}%</p>
            <div className="w-3/4 h-4 bg-gray-300 rounded-full relative">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Impact Visualization */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Impact Visualization</h2>
          <div className="flex space-x-8">
            <div className="w-1/2">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Fund Allocation</h3>
              <Doughnut data={chartData} />
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Progress Updates</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">Week 1</span> - Initial Fundraising Goal Met
                </li>
                <li>
                  <span className="font-semibold">Week 2</span> - Supplies Ordered, Community Volunteers Onboarded
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community Recognition Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Community Recognition</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-600">Top Contributor - 1000 Rs</p>
              <button className="mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
