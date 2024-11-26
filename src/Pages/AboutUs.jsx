import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Icon from '../Components/Iconbar/Icon';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerStyle = {
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
    overflow: 'hidden',
  };

  const headerStyle = {
    backgroundColor: '#f60', // Orange color
    color: 'white',
    padding: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const contentStyle = {
    backgroundColor: '#f1f1f1', // Light gray color
    padding: '15px',
    borderTop: '1px solid #ddd',
  };

  const arrowStyle = {
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <div 
        style={headerStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span style={arrowStyle}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div style={contentStyle}>{children}</div>}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div>
      <Icon />
      <Navbar />
      <div style={{ margin: '20px' }}>
        <Dropdown title="Living in a Nu Metro World">
          <p>
            Beginning in February 1902, Nu Metro started as South Africa’s first cinema exhibitor. 
            120 years later, there are currently over 22 Nu Metro cinemas with 152 cinema screens 
            spread across cities in Southern Africa, including:
          </p>
          <ul>
            <li>Cape Town</li>
            <li>Worcester</li>
            <li>Port Elizabeth</li>
            <li>Durban</li>
            <li>Amanzimtoti</li>
            <li>Bloemfontein</li>
            <li>Johannesburg</li>
            <li>Pretoria</li>
            <li>Giyani</li>
            <li>Welkom</li>
            <li>Lusaka, Zambia</li>
            <li>Maputo, Mozambique</li>
          </ul>
          <p>
            The first Nu Metro cinemas to house all of our new experiences opened at the brand new 
            Cornubia Mall in Umhlanga Rocks in September 2017. Nu Metro has also opened new cinemas 
            in Ballito, Lenasia, Mamelodi, Westgate, Welkom, Pretoria East, and Giyani. Nu Metro’s 
            footprint has also eagerly expanded into Zambia and Mozambique.
          </p>
        </Dropdown>
      </div>
    </div>
  );
};

export default AboutUs;
