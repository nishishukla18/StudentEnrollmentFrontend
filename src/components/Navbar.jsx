import React, { useState,useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleRoleSelect = (role) => {
    navigate(`/register?role=${role}`);
    setIsOpen(false); // close dropdown after selection
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-slate-800" >EduPortal</h1>

      {/* Right Side */}
      <div>
        {!isSignedIn ? (
          <div className="relative">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Login 
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                <button
                  onClick={() => handleRoleSelect("student")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Student Login
                </button>
                <button
                  onClick={() => handleRoleSelect("educator")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Educator Login
                </button>
              </div>
            )}
          </div>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
