import React from 'react'
import shop1 from '../Images/shop1.png'
import shop2 from '../Images/shop2.png'
import shop3 from '../Images/shop3.png'
import shop4 from '../Images/shop4.png'
import shop5 from '../Images/shop5.png'
import shop6 from '../Images/shop6.png'
import shop7 from '../Images/shop7.png'
import shop8 from '../Images/shop8.png'
import shop9 from '../Images/shop9.png'

export const Card = () => {
  return (
    <>
    <div className="card">
        <div className="container">
            <div className="card__container">
                <ul className='card__list'>
                    <li className='card__item'>
                        <img className='card__img' src={shop1} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src={shop2} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src={shop3} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src={shop4} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src={shop4} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src={shop5} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src={shop6} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src={shop7} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src={shop8} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src={shop9} alt="trainers" />
                        <p className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
