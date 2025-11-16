import React from "react";
import { Link, Outlet } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-3">
          Student Dashboard
        </h2>
        <nav className="flex flex-col space-y-4">
          <Link
            to="profile"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Student Profile
          </Link>
          <Link
            to="courses"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Courses
          </Link>
          <Link
            to="enrolled"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Courses Enrolled
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

export default StudentDashboard;
