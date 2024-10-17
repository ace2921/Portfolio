import React from 'react'
import './Option.css'
import { MdOutlineLocalMovies } from "react-icons/md";
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
            <MdOutlineLocalMovies />
            <p>hjb</p>
            </div>
            <div className="choose">
            <p>ycdgbx</p>
            </div>
        </div></>
  )
}

export default Option
