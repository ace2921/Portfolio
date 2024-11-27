import React, { useState } from 'react'; // Import useState hook
import Icon from '../Components/Iconbar/Icon';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Prices = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Declare state here

  const cinemaPricing = [
    { format: "REGULAR 2D", price: "R110,00" },
    { format: "REGULAR 2D KIDS / PENSIONERS", price: "R80,00" },
    { format: "REGULAR 2D WOWZA WEDNESDAY", price: "R77,00" },
    { format: "REGULAR 3D", price: "R135,00" },
    { format: "REGULAR 3D KIDS / PENSIONERS", price: "R100,00" },
    { format: "REGULAR 3D WOWZA WEDNESDAY", price: "R87,00" },
    { format: "PRICE FREEZE 2D/3D", price: "R50,00" },
    { format: "VIP 2D/3D", price: "R200,00" },
    { format: "FULL VIP 2D", price: "R160,00" },
    { format: "FULL VIP 2D KIDS / PENSIONERS", price: "R115,00" },
    { format: "FULL VIP 3D", price: "R175,00" },
    { format: "FULL VIP 3D KIDS / PENSIONERS", price: "R130,00" },
    { format: "XTREME 2D/3D", price: "R185,00" },
    { format: "XTREME 2D/3D KIDS / PENSIONERS", price: "R115,00" },
    { format: "XTREME 2D/3D WOWZA WEDNESDAY", price: "R115,00" },
    { format: "4DX 2D/3D", price: "R210,00" }
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Function to toggle the dropdown
  };

  return (
    <div>
      <Icon />
      <Navbar />
      <img
        src="/Price-Main-page-Banner_1920x400.jpg"
        alt="Price Main Page Banner"
        style={{
          width: "100%",
          height: "230px",
          marginTop: '50px',
          paddingLeft: "100px",
          paddingRight: "100px"
        }}
        />

      <div className="price-matters" 
      
        style={{
          marginLeft: '90px',
          marginRight: '50px',
          
          }}>
        <p>
          Prices <span>Matters</span>
        </p>
        <p>
          Why pay more? Choose Nu Metro, where we save you money on movie ticket
          and snack prices – when compared to most other cinemas in South
          Africa.
          <br />
          Enjoy the hottest movies at great prices! Nu Metro takes money matters
          seriously, and when it comes to your wallet, price matters.
          <br />
          We appreciate your support and are committed to offering you awesome
          cinema experiences at a lot less than you expected.
          <br />
          Compare our movie ticket prices and you will see that we offer the
          best value at the best price.
        </p>
      </div>

      <div>
        <button onClick={toggleDropdown} style={{
          width:"88%",
          textAlign: "left",
          backgroundColor:"orange",
          border:"none",
          height: "50px",
          color: "white",
          marginLeft: '90px',
          marginRight: '50px',
          marginBottom: '30px',

        }}>
          {isDropdownOpen ? 'Ticket Prices' : 'Ticket Prices'}
        </button>

        {isDropdownOpen && (
          <div>
            {cinemaPricing.map((item) => (
              <div key={item.format}>
                <span>{item.format}</span> : <span>{item.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
        <Footer/>
    </div>
  );
};

export default Prices;
