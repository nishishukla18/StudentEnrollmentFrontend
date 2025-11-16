import React from "react";

const EducatorProfile = () => {
  const educator = {
    name: "Dr. Neha Mehta",
    empId: "EDU204",
    department: "Computer Science",
    experience: "8 Years",
    courses: ["Data Structures", "Web Development", "Machine Learning"],
    email: "neha.mehta@edtech.com",
    phone: "+91 98765 43210",
    address: "Ghaziabad, Uttar Pradesh",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-md border border-gray-200 w-full max-w-3xl p-8 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10 uppercase tracking-wide">
          Educator Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <p className="text-lg mb-3">
              <span className="font-semibold text-gray-800">Name:</span> {educator.name}
            </p>
            <p className="text-lg mb-3">
              <span className="font-semibold text-gray-800">Employee ID:</span> {educator.empId}
            </p>
            <p className="text-lg mb-3">
              <span className="font-semibold text-gray-800">Department:</span> {educator.department}
            </p>
            <p className="text-lg mb-3">
              <span className="font-semibold text-gray-800">Experience:</span> {educator.experience}
            </p>
          </div>

          <div>
            <p className="text-lg mb-3">
              <span className="font-semibold text-gray-800">Email:</span> {educator.email}
            </p>
            <p className="text-lg mb-3">
              <span className="font-semibold text-gray-800">Phone:</span> {educator.phone}
            </p>
            <p className="text-lg mb-3">
              <span className="font-semibold text-gray-800">Address:</span> {educator.address}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
            Courses Taught
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {educator.courses.map((course, index) => (
              <li key={index} className="text-lg">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducatorProfile;
