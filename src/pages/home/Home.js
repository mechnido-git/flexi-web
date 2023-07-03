import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './hero/Hero'
import './home.css'
import Vision from './vision/Vision'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="main">
        <Hero />
        <div className="gap"></div>
        <Vision />
        <div className="services">
          <div className="details-container">
            <div className="details">
              <span>SERVICES</span>
              <p>We Deliver Exceptional Products and Services Around the World</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home