import React,{useState,useContext} from 'react'
import { toast } from 'react-hot-toast';
import { CourseContext } from '../CourseContext';

function AddCourse() {
    const { addCourse } = useContext(CourseContext);

    const [formData,setFormData]=useState({
        name:"",
        details:"",
        pdf:null,
    });
    const handleChange = (e)=>{
        const {name,value,files} = e.target;
        if(name==="pdf"){
            setFormData({...formData,pdf:files[0]});
        }
        else{
            setFormData({...formData,[name]:value});
        }
    }

    // const handleSubmit = (e)=>{
    //     e.preventDefault();

    //     const now = new Date();
    //     const date = now.toLocaleDateString('en-GB',{day:'2-digit',month:'2-digit',year:'numeric'});
    //     const time = now.toLocaleTimeString();

    //     const courseData = {
    //         ...formData,
    //         date,
    //         time,
    //         id: Date.now()
    //     };

    //     addCourse(courseData);  // ⬅️ Store course globally

    //     toast.success("Course Added Successfully")
    // }

    const handleSubmit = async (e) => {
  e.preventDefault();

  const now = new Date();
  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString();

  const form = new FormData();
  form.append("name", formData.name);
  form.append("details", formData.details);
  form.append("pdf", formData.pdf);
  form.append("date", date);
  form.append("time", time);

  const response = await fetch("http://localhost:5000/add-course", {
    method: "POST",
    body: form
  });

  const res = await response.json();
  console.log(res);  // Course Added

  toast.success("Course Added Successfully");
};

  return (
     <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className=" rounded-xl p-8 w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add New Course
        </h2>

        {/* Course Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Course Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter course name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Course Details */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Course Details
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter course details"
            rows="4"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* PDF Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Upload PDF
          </label>
          <input
            type="file"
            name="pdf"
            accept="application/pdf"
            onChange={handleChange}
            className="w-full cursor-pointer border rounded-lg px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-slate-700 hover:file:bg-slate-800"
            required
          />
        </div>

      <div className="text-sm text-gray-600">
          <p>
            <strong>Date:</strong> {new Date().toLocaleDateString()}
          </p>
          <p>
            <strong>Time:</strong> {new Date().toLocaleTimeString()}
          </p>
        </div>

        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-800 transition font-medium"
        >
          Add Course
        </button>
      </form>
    </div>
  )
}

export default AddCourse