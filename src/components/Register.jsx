import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useLocation } from 'react-router-dom';

function Register() {
  const location = useLocation();

  // Extract role from query
  const role = new URLSearchParams(location.search).get('role');

  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn
        path="/register"
        routing="path"
        signUpUrl="/register"
        afterSignInUrl={role === 'educator' ? '/educator/dashboard' : '/student/dashboard'}
      />
    </div>
  );
}

export default Register;
