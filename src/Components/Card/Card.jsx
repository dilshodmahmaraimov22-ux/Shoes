import React from 'react'
import shop1 from '../Images/shop1.png'
import shop1 from '../Images/shop1.png'
import shop1 from '../Images/shop1.png'
import shop1 from '../Images/shop1.png'
import shop1 from '../Images/shop1.png'
import shop1 from '../Images/shop1.png'
import shop1 from '../Images/shop1.png'
import shop1 from '../Images/shop1.png'
import shop1 from '../Images/shop1.png'

export const Card = () => {
  return (
    <>
    <div className="card">
        <div className="container">
            <div className="card__container">
                <ul className='card__list'>
                    <li className='card__item'>
                        <img className='card__img' src={shop1} alt="trainers" />
                        <p className='card__text'></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
