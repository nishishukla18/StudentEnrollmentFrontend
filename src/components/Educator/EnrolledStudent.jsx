import React from "react";

const EnrolledStudents = () => {
  const students = [
    {
      id: 1,
      name: "Mansi Sharma",
      rollNo: "CSE101",
      age: 20,
      course: "Full Stack Development",
      address: "Ghaziabad, Uttar Pradesh",
    },
    {
      id: 2,
      name: "Rohan Gupta",
      rollNo: "ECE204",
      age: 21,
      course: "Data Science with Python",
      address: "Noida, Uttar Pradesh",
    },
    {
      id: 3,
      name: "Sneha Verma",
      rollNo: "ME305",
      age: 22,
      course: "Machine Learning",
      address: "Kanpur, Uttar Pradesh",
    },
    {
      id: 4,
      name: "Amit Yadav",
      rollNo: "CSE110",
      age: 23,
      course: "React & Node.js",
      address: "Lucknow, Uttar Pradesh",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wide">
        Enrolled Students
      </h1>

      <div className="overflow-x-auto shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-700">
          <thead className="bg-gray-800 text-white uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-semibold">Roll No</th>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Age</th>
              <th className="px-6 py-4 font-semibold">Course Enrolled</th>
              <th className="px-6 py-4 font-semibold">Address</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={`border-b hover:bg-gray-100 transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-4 font-medium">{student.rollNo}</td>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.age}</td>
                <td className="px-6 py-4">{student.course}</td>
                <td className="px-6 py-4">{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledStudents;
