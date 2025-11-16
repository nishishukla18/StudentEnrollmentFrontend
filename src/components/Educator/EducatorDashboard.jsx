import React from "react";
import { Link, Outlet } from "react-router-dom";

function EducatorDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-3">
          Educator Dashboard
        </h2>
        <nav className="flex flex-col space-y-4">
          <Link
            to="edu-profile"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Educator Profile
          </Link>
          <Link
            to="add-courses"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 transition"
          >
             Add Course
          </Link>
          <Link
            to="courses"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 transition"
          >
             Courses
          </Link>
          <Link
            to="stu-enrolled"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 transition"
          >
             Enrolled Students
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default EducatorDashboard;
