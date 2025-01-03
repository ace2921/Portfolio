import React from 'react'
import './Option.css'
import { HiOutlineFilm } from "react-icons/hi";

import { FaLocationDot } from "react-icons/fa6";



const Option = () => {
  return (
    <><div className='option-div'>
          <hr /><p>OR</p><hr />
      </div><div className="choices">
            <div className="choose">
            <FaLocationDot />
            <p>Choose a cinema</p>
            </div>
            <div className="choose">
            <HiOutlineFilm />
            <p>Find a movies</p>
            </div>
            <div className="choose">
            <p>Choose an experience</p>
            </div>
        </div></>
  )
}

export default Option
