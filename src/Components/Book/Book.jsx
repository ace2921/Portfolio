import React from 'react'
import './Book.css'
import { TiLocationArrow } from "react-icons/ti";

const Book = () => {
  return (
    <><div className='book'>
          Book a movie at <span>Nu Metro</span>
      </div><div className="choose-cinema">
      <TiLocationArrow />
      choose a cinema
        </div></>
  )
}

export default Book
