import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Slider, Paper } from '@mui/material';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Icon from '../Components/Iconbar/Icon';

function Cinemas() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cinemas = [
    { name: 'Bedford', distance: 'n/a', travelTime: '0 min' },
    { name: 'Clearwater', distance: 'n/a', travelTime: '0 min' },
    { name: 'The Glen', distance: 'n/a', travelTime: '0 min' },
    { name: 'Hyde Park', distance: 'n/a', travelTime: '0 min' },
    { name: 'Loch Logan', distance: 'n/a', travelTime: '0 min' },
    { name: 'Menlyn Park', distance: 'n/a', travelTime: '0 min' },
    { name: 'The Pavilion', distance: 'n/a', travelTime: '0 min' },
    { name: 'Canal Walk', distance: 'n/a', travelTime: '0 min' },
    { name: 'Mountain Mill', distance: 'n/a', travelTime: '0 min' },
    { name: 'Boardwalk', distance: 'n/a', travelTime: '0 min' },
    { name: 'Galleria', distance: 'n/a', travelTime: '0 min' },
    { name: 'Emperors Palace', distance: 'n/a', travelTime: '0 min' },
    { name: 'Woodlands', distance: 'n/a', travelTime: '0 min' },
    { name: 'The Strip', distance: 'n/a', travelTime: '0 min' },
    { name: 'Balito Junction', distance: 'n/a', travelTime: '0 min' },
    { name: 'Cornubia', distance: 'n/a', travelTime: '0 min' },
    { name: 'Westgate', distance: 'n/a', travelTime: '0 min' },
  ];

  return (
    <div>
      <Icon/>
      <Navbar/>
      <Typography variant="h6" gutterBottom style={{ width: '700px', margin: '30px' }}>
      Select your favourite Cinema
      </Typography>
      <Typography variant="body1" gutterBottom>
      </Typography>
      <div style={{ width: '700px', margin: '30px' }}>
        <Slider
          value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
          valueLabelDisplay="auto"
        />
      </div>
      <Typography variant="body1" style={{ width: '700px', margin: '30px' }}>
        Display only cinemas within: {value} KM
      </Typography>

      
      <TableContainer component={Paper} style={{ width: '96%', marginLeft: '30px', marginRight: '30px', marginBottom: '50px' }}>
        <Table>
          <TableHead>
            <TableRow style={{ width: '700px', margin: '30px', backgroundColor: '#f60' }}>
              <TableCell style={{color: "white"}}><b>Cinema</b></TableCell>
              <TableCell align="center" style={{color: "white"}}><b>Distance</b></TableCell>
              <TableCell align="center" style={{color: "white"}}><b>Travel Time</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cinemas.map((cinema, index) => (
              <TableRow key={index}>
                <TableCell>{cinema.name}</TableCell>
                <TableCell align="center">{cinema.distance}</TableCell>
                <TableCell align="center">{cinema.travelTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p style={{  marginLeft: '30px', marginRight: '30px', marginBottom: '10px' }}>*Travel time is estimated based on current traffic information and is subject to change.</p>
      <Footer/>
    </div>
  );
}

export default Cinemas;
