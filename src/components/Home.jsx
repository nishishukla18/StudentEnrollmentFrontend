import React from "react";
import { FaUserGraduate, FaBookOpen, FaUniversity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/register"); // change this path to the page you want to go to
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Hero Section */}
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-gray-600">EduEnroll</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Simplify student enrollment and academic management with a smooth,
          intuitive experience.
        </p>

        {/* Button */}
        <button
          onClick={handleNavigation}
          className="bg-gray-800 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-700 transition"
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl w-full">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <FaUserGraduate className="text-5xl text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Student Management
          </h2>
          <p className="text-gray-600 text-sm">
            Manage student profiles, courses, and academic records easily.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <FaBookOpen className="text-5xl text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Course Enrollment
          </h2>
          <p className="text-gray-600 text-sm">
            Seamlessly enroll students into courses with one click.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <FaUniversity className="text-5xl text-gray-700 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Department Overview
          </h2>
          <p className="text-gray-600 text-sm">
            Keep track of all departments, instructors, and performance.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        © 2025 EduEnroll — All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
