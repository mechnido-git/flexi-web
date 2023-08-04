import React from 'react'
import SecondaryBtn from "../secondaryBtn/SecondaryBtn";

export default function Cards(props) {
  return (
    <>
         <div className="card-container">
            <div className="card">
            <span>{props.head}</span>
              <p className='subheading'>{props.subhead}</p>
              <p className='para'>{props.para} </p>
              <SecondaryBtn content='Apply Now' theme='black' />
              <ul>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                
              </ul>
            </div>
          </div>
    </>
  )
}
