import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './hero/Hero'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="main">
      <Hero />
      <div className="gap"></div>
      <div className="vision">
        <div className="details-container">
          <div className="details">
            <div className="title">
              <span>VISION</span>
              <p>We’re Changing the Way the World Thinks About Cars</p>
            </div>
            <div className="info">
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
          </div>
        </div>
        <div className="show">
          <img src="https://static.wixstatic.com/media/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg/v1/fill/w_913,h_840,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg" alt="" />
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Home