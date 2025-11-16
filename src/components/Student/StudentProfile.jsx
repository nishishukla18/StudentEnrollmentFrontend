import React from "react";

function StudentProfile() {
  const student = {
    name: "Nishi Shukla",
    age: 20,
    rollNo: "IT(2024-27)",
    enrolledCourses: ["Web Development", "Data Structures", "Database Systems"],
    address: "Ghaziabad, Uttar Pradesh, India",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 h-36 relative">
          <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Body Section */}
        <div className="pt-16 pb-8 px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{student.name}</h1>
          <p className="text-gray-500 text-sm mb-6">{student.rollNo}</p>

          <div className="text-left space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Age:</span>
              <span className="text-gray-600">{student.age}</span>
            </div>

            <div>
              <span className="font-semibold text-gray-700 block mb-1">
                Enrolled Courses:
              </span>
              <ul className="list-disc list-inside text-gray-600">
                {student.enrolledCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-semibold text-gray-700 block mb-1">
                Address:
              </span>
              <p className="text-gray-600">{student.address}</p>
            </div>
          </div>

          <button
            onClick={() => window.history.back()}
            className="mt-8 bg-gray-800 text-white px-6 py-2 rounded-xl shadow-md hover:bg-gray-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        © 2025 EduEnroll — Student Profile Page
      </footer>
    </div>
  );
}

export default StudentProfile;
