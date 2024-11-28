import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Contexts/authContext'; // Custom auth context
import { doSignOut } from '../../../firebase/auth'; // Firebase sign-out function
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { userLoggedIn } = useAuth(); // Check if the user is logged in
  const navigate = useNavigate();

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await doSignOut(); // Sign out the user
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Failed to sign out:', error.message);
    }
  };

  return (
    <div className="navbar">
      <img src="/nu_metro_logo_orange.png" alt="Logo" />

      <ul>
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
        </li>
        <li onClick={() => setMenu("now-booking")}>
          <Link style={{ textDecoration: 'none' }} to="/now-booking">Now Booking</Link>
        </li>
        <li onClick={() => setMenu("showing-soon")}>
          <Link style={{ textDecoration: 'none' }} to="/showing-soon">Showing Soon</Link>
        </li>
        <li onClick={() => setMenu("cinemas")}>
          <Link style={{ textDecoration: 'none' }} to="/cinemas">Cinemas</Link>
        </li>
        <li onClick={() => setMenu("prices")}>
          <Link style={{ textDecoration: 'none' }} to="/prices">Prices</Link>
        </li>
        <li onClick={() => setMenu("about")}>
          <Link style={{ textDecoration: 'none' }} to="/about">About</Link>
        </li>

        {/* Conditional Login/Sign Out Link */}
        {!userLoggedIn ? (
          <li onClick={() => setMenu("login")}>
            <Link style={{ textDecoration: 'none', color: 'orange' }} to="/login">Login / Sign Up</Link>
          </li>
        ) : (
          <li>
            <button 
              onClick={handleSignOut} 
              style={{ textDecoration: 'none', color: 'orange', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
