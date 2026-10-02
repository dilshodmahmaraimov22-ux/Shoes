import React from 'react'
import shoes1 from '../Images.shoes1.png'
import shoes2 from '../Images.shoes1.jpg'
import shoes3 from '../Images.shoes3.webp'

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="container">
            <div className="hero__container">
                <ul className='hero__list'>
                    <li className='hero__item'>
                        <img className='hero__img' src={shoes1} alt="trainers" />
                        <img className='hero__img' src={shoes1} alt="trainers" />
                        <img className='hero__img' src={shoes1} alt="trainers" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero