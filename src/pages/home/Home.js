import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './hero/Hero'
import './home.css'
import Vision, { DetailsSction } from './vision/Vision'
import Service from './service/Service'
import SecondaryBtn from '../../components/secondaryBtn/SecondaryBtn'

const services = [
  {
    name: "AUTONOMOUS DRIVING",
    details: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    img: "https://static.wixstatic.com/media/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg/v1/fill/w_951,h_850,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg",
    side: 'l-r',
  },
  {
    name: "REAL-TIME INFORMATION",
    details: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    img: "https://static.wixstatic.com/media/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg/v1/fill/w_951,h_850,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg",
    side: 'r-l',
  },
  {
    name: "PERCEPTION ENABLED",
    details: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    img: "https://static.wixstatic.com/media/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg/v1/fill/w_951,h_850,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg",
    side: 'l-r',
  }
]

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="main">
        <Hero />
        <div className="gap"></div>
        <Vision data={{ title: "VISION", subtitle: "We’re Changing the Way the World Thinks About Cars", info: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." }} />
        <div className="services">
          <div className="details-container">
            <div className="details">
              <span>SERVICES</span>
              <p>We Deliver Exceptional Products and Services Around the World</p>
            </div>
          </div>
        </div>
        <Service data={services} />
        <div className="autono-div">
          <img src="https://static.wixstatic.com/media/c837a6_870aaf57c1d9484a9a6ee57f2465df75~mv2.jpg/v1/fill/w_1522,h_880,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_870aaf57c1d9484a9a6ee57f2465df75~mv2.jpg" alt="" />
          <div className="content">
            <div className="details-container">
              <div className="details">
                <div className="title">
                  <span>WHY AUTONO</span>
                  <p>A different approach, using a new method of manufacturing.</p>
                </div>
                <div className="info">
                  <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <SecondaryBtn content='Read More' theme='black' />
              </div>
            </div>
          </div>
        </div>
        <div className="autono-metrics">
          <img src="https://static.wixstatic.com/media/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg/v1/fill/w_951,h_950,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg" alt="" />
          <div className="metrics-div">
            <span>Autono In Numbers</span>
            <div className="metrics-container">
              <div className="metrics">
                <div className="number"><span>200</span></div>
                <p>EMPLOYEES</p>
              </div>
              <div className="metrics">
                <div className="number"><span>5</span></div>
                <p>CORE TEAMS</p>
              </div>
              <div className="metrics">
                <div className="number"><span>200M$</span></div>
                <p>CAPITAL</p>
              </div>
              <div className="metrics">
                <div className="number"><span>326</span></div>
                <p>PARTNERS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home