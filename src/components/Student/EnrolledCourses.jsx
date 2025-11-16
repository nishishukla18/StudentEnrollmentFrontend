import React from "react";

function EnrolledCourses() {
  // Hardcoded course data
  const courses = [
    {
      id: 1,
      name: "Web Development",
      instructor: "Dr. Riya Patel",
      duration: "6 Months",
      description:
        "Learn HTML, CSS, JavaScript, and React to build modern, responsive websites.",
    },
    {
      id: 2,
      name: "Data Structures & Algorithms",
      instructor: "Prof. Arjun Mehta",
      duration: "4 Months",
      description:
        "Master problem-solving skills and algorithmic thinking using C++ and Python.",
    },
    {
      id: 3,
      name: "Database Systems",
      instructor: "Dr. Neha Gupta",
      duration: "5 Months",
      description:
        "Understand database design, SQL queries, and management with MySQL and MongoDB.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        Enrolled Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-xl  p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {course.name}
            </h2>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold text-gray-700">Instructor:</span>{" "}
              {course.instructor}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold text-gray-700">Duration:</span>{" "}
              {course.duration}
            </p>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>

            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow-md hover:bg-gray-700 transition"
              onClick={() => alert(`You selected: ${course.name}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default EnrolledCourses;
