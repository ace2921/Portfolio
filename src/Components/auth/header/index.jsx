import React from 'react';
import { useNavigate } from 'react-router-dom';
import { doSignOut } from '../../../firebase/auth';
import { useAuth } from '../../../Contexts/authContext';

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const handleSignOut = async () => {
    try {
      await doSignOut(); // Sign out the user
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Sign-out failed:', error.message);
      alert('Failed to sign out. Please try again.');
    }
  };

  return (
    <div className="header">
      {userLoggedIn && (
        <button
          onClick={handleSignOut}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
