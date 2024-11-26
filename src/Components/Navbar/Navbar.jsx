import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='navbar'>
      <img src="/nu_metro_logo_orange.png" alt="" />
      <ul>
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === "home" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("now-booking")}>
          <Link style={{ textDecoration: 'none' }} to='/now-booking'>Now Booking</Link>
          {menu === "now-booking" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("showing-soon")}>
          <Link style={{ textDecoration: 'none' }} to='/showing-soon'>Showing Soon</Link>
          {menu === "showing-soon" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("cinemas")}>
          <Link style={{ textDecoration: 'none' }} to='/cinemas'>Cinemas</Link>
          {menu === "cinemas" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("prices")}>
          <Link style={{ textDecoration: 'none' }} to='/prices'>Prices</Link>
          {menu === "prices" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("about")}>
          <Link style={{ textDecoration: 'none' }} to='/about'>About</Link>
          {menu === "about" ? <hr /> : null}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
