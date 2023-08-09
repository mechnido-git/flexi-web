import React, { useState, useEffect } from 'react'
import SecondaryBtn from "../secondaryBtn/SecondaryBtn";


const carddata= [
  {
    head:"ELECTRICAL ENGINEER",
    subhead:"San Francisco, CA",
    para:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. "
  },
  {
    head:"DATA SCIENTIST",
    subhead:"San Francisco, CA",
    para:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
  },
  {
    head:"ARTIFICIAL INTELLIGENCE RESEARCHER",
    subhead:"San Francisco, CA",
    para:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
  },
  {
    head:"DEEP LEARNING ENGINEER",
    subhead:"San Francisco, CA",
    para:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
  }
]
export default function Cards() {
 const [index, setIndex]= useState(0);

  useEffect(() => {
    // document.getElementById('headcont').style.opacity = 0;
    // document.getElementById('paracont').style.opacity = 0;
    // document.getElementById('headcont').style.opacity = 1;
    // document.getElementById('paracont').style.opacity = 1;
    //Implementing the setInterval method
    const interval = setInterval(() => {
      // console.log("interval hits ", index);
        setIndex((index + 1)%4);
        document.getElementById('headcont').style.opacity = 1;
        document.getElementById('paracont').style.opacity = 1;
        
       setTimeout(()=>{
        document.getElementById('headcont').style.opacity = 0;
        document.getElementById('paracont').style.opacity = 0;
       },3700)
       
        
    }, 4000);

    //Clearing the interval
    return () => clearInterval(interval);
}, [index]);


  return (
    <>
         <div className="card-container">
            <div className="card">
            <span className='head' id='headcont'>{carddata[index].head}</span>
              <p className='subheading'>{carddata[index].subhead}</p>
              <p className='para' id='paracont'>{carddata[index].para} </p>
              
            </div>
            <div className='cardLower'>
            <SecondaryBtn content='Apply Now' theme='black' />
            <ul>
                <span style={{backgroundColor:index===0? "white":""}} onClick={()=>{setIndex(0); document.getElementById('headcont').style.opacity = 1;
        document.getElementById('paracont').style.opacity = 1;}}></span>
                <span style={{backgroundColor:index===1? "white":""}}  onClick={()=>{setIndex(1); document.getElementById('headcont').style.opacity = 1;
        document.getElementById('paracont').style.opacity = 1;}}></span>
                <span style={{backgroundColor:index===2? "white":""}}  onClick={()=>{setIndex(2); document.getElementById('headcont').style.opacity = 1;
        document.getElementById('paracont').style.opacity = 1;}}></span>
                <span style={{backgroundColor:index===3? "white":""}}  onClick={()=>{setIndex(3); document.getElementById('headcont').style.opacity = 1;
        document.getElementById('paracont').style.opacity = 1;}}></span>

                
              </ul>
            </div>
           
           
          </div>
    </>
  )
}
