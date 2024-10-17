import React from 'react'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { TfiYoutube } from "react-icons/tfi";
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
      <img src="/nu_metro_logo_orange.png" alt="" />
      <br />
      <p>068 087 5965</p>
      <a href="https://www.facebook.com/numetro/">
      <FaFacebookSquare />
      </a>
      <a href="https://twitter.com/numetro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
      <FaTwitter />
      </a>
        <a href="https://www.youtube.com/@numetro">
        <TfiYoutube /></a>
        
        <a href="https://www.instagram.com/numetro/">
          <FaInstagram />
        </a>
        <a href="0861 246 362."><FaWhatsapp /></a>
      </div>
      <div className="quick-links-section">
        <span>Quick Links</span>
        <p>Terms and Conditions</p>
        <p>Privacy and Policy</p>
        <p>PAIA Manual</p>
        <p>Contact Us</p>
        <p>Website FAQs</p>
      </div>
      <div className="movie-links-section">
        <span>Movies</span>
        <p>Now Showing</p>
        <p>Showing Soon</p>
        <p>Find a movie</p>
      </div>
      <div className="movie-links-section2">
        <p>Choose a cinema</p>
        <p>Choose an experience</p>
        <p>Choose a genre</p>
      </div>
    </div>
  )
}

export default Footer
