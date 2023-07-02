import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './hero/Hero'
import './home.css'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home