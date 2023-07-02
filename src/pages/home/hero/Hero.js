import React from 'react'
import scooter from '../../../assets/videos/file.mp4'
import './hero.css'
import PrimaryBtn from '../../../components/primaryBtn/PrimaryBtn'

function Hero() {
    return (
        <div className='hero'>
            <video src={scooter} autoPlay muted loop preload='auto' />
            <div className="content">
                <div className="titles">
                    <p className="title">MODEL E</p>
                    <p className="subtitle">Revolutionise your commute with electric kick scooters</p>
                </div>
                <div className="cover">
                    <div className="btns">
                        <PrimaryBtn content='Order Now' theme='white' />
                        <PrimaryBtn content='Know More' theme='black' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero