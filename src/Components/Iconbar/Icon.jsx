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
      <div className="search-bar">
        <input type='search' placeholder='Find a movie'  />
        <FaSearch className='search-icon'/>
      </div>
    </div>
  )
}

export default Icon
