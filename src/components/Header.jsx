import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link ,useLocation,useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    //const {openSignIn} = useClerk()
    const {isSignedIn} = useUser()
  return (
     <header className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My App</h1>

     {/* Desktop navigation */}
     <div>
        {isSignedIn &&(
            <>
            <button>
                <Link/>
            </button>
            </>
        )}
     </div>
      {/* Authentication buttons */}
      <div>
        <SignedOut>
          <SignInButton>Sign In</SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}

export default Header