// import React, { useContext } from "react";
// import { CourseContext } from "../CourseContext";

// function Courses() {
//   const { courses } = useContext(CourseContext);

//   return (
//     <div className="p-10 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course) => (
//           <div key={course.id} className="bg-white shadow rounded-xl p-5">
//             <h2 className="text-xl font-bold">{course.name}</h2>
//             <p className="text-gray-700 mt-2">{course.details}</p>

//             <p className="text-sm text-gray-500 mt-2">
//               <strong>Date:</strong> {course.date}
//             </p>
//             <p className="text-sm text-gray-500">
//               <strong>Time:</strong> {course.time}
//             </p>

//             <a
//               href={course.pdf ? URL.createObjectURL(course.pdf) : "#"}
//               target="_blank"
//               className="mt-4 inline-block text-blue-600 underline"
//             >
//               View PDF
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;

import React, { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">{course.name}</h2>

            <p className="text-gray-700 mt-2">{course.details}</p>

            <p className="text-sm text-gray-500 mt-2">
              <strong>Date:</strong> {course.date}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Time:</strong> {course.time}
            </p>

            <a
              href={`http://localhost:5000/uploads/${course.pdf}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 underline"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;

