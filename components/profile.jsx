"use client"
import React, { useState } from 'react'

const Profile = () => {
  const [description, setDescription] = useState('')
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Handle input changes for the description
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  // Handle video file selection
  const handleVideoChange = (e) => {
    setVideo(e.target.files[0])
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate a delay for video upload or form submission
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      // Reset form values
      setDescription('')
      setVideo(null)
    }, 2000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary">
      <div className="bg-primary p-8 rounded-lg shadow-xl w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Project Submission</h1>
        
        {/* Form for Project Description and Video Upload */}
        <form onSubmit={handleSubmit}>
          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Project Description</label>
            <textarea
              
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              rows="7"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a description of your project..."
              required
            />
          </div>

          {/* Video Upload Input */}
          <div className="mb-6">
            <label htmlFor="video" className="block text-gray-700 font-medium mb-2">Upload Video</label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={handleVideoChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Submit Project'}
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <div className="mt-4 text-center text-green-500">
            <p>Project submitted successfully!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
