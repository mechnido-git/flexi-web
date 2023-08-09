import React, { useContext, useEffect, useState } from 'react'
import scooter from '../../../assets/videos/file.mp4'
import './hero.css'
import PrimaryBtn from '../../../components/primaryBtn/PrimaryBtn'
import { StoreContext } from '../../../store/StoreContext'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Hero() {
    const { model, setModel, models, slides } = useContext(StoreContext)

    return (
        <div className='hero'>
            <video src={scooter} autoPlay muted loop preload='auto' />
            <div className="content">
                <Splide
                    ref={slides}
                    hasTrack={false}
                    options={{
                        width: '100%',
                        pagination: false,
                        height: '100%',
                        speed: 1000,
                        type: 'loop',
                        easing: "cubic-bezier(0.25, 0.5, 0.5, 0.8)",
                        drag:true,
                        direction:"ltr"
                       
                    }}
                    onMove={(splide, prev, next) => {
                        setModel(prev);
                      }}
                >
                    <SplideTrack>
                        {models.map((item, index) => (
                            <SplideSlide>
                                <div className="titles">
                                    <p className="title">{item.name}</p>
                                    <p className="subtitle">Revolutionise your commute with electric kick scooters</p>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev"><span class="material-symbols-outlined">
                            arrow_back_ios
                        </span></button>
                        <button className="splide__arrow splide__arrow--next"><span class="material-symbols-outlined">
                            arrow_forward_ios
                        </span></button>
                    </div>
                </Splide>
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