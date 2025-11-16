import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Register from "./components/Register";
import EducatorDashboard from "./components/Educator/EducatorDashboard";
import StudentDashboard from "./components/Student/StudentDashboard";
import StudentProfile from "./components/Student/StudentProfile";
import Courses from "./components/Educator/Courses"
import EnrolledCourses from "./components/Student/EnrolledCourses";
import EnrolledStudent from "./components/Educator/EnrolledStudent";
import AddCourse from "./components/Educator/AddCourse";
import EducatorProfile from "./components/Educator/EducatorProfile";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register/*" element={<Register />} />

          {/* Educator Dashboard */}
          <Route path="educator/dashboard" element={<EducatorDashboard />}>
            <Route path="edu-profile" element={<EducatorProfile />} />
            <Route path="add-courses" element={<AddCourse />} />
             <Route path="courses" element={<Courses />} />
            <Route path="stu-enrolled" element={<EnrolledStudent />} />
          </Route>

          {/* Student Dashboard */}
          <Route path="student/dashboard" element={<StudentDashboard />}>
            <Route path="profile" element={<StudentProfile />} />
            {/* <Route path="courses" element={<Courses />} /> */}
            <Route path="enrolled" element={<EnrolledCourses />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
