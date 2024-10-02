import React from 'react'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { TfiYoutube } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa"

import './Icon.css'

const Icon = () => {
  return (
    <div className='iconbar'>
      <i className="fa fa-phone" aria-hidden="true"></i>
      <p>068 087 5965</p>
      <div className="socials-icons">
        <FaFacebookSquare />
        <FaTwitter />
        <TfiYoutube />
        <a href="https://www.instagram.com/numetro/">
          <FaInstagram />
        </a>
        
        <FaWhatsapp /> 
      </div>
      <div className="search-bar">
        <input type='search' placeholder='Find a movie'  />
        <FaSearch className='search-icon'/>
      </div>
    </div>
  )
}

export default Icon
