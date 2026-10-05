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
import './Card.css'

const TEXT =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.'

const ITEMS = [
  { id: 1, img: shop1 },
  { id: 2, img: shop2 },
  { id: 3, img: shop3 },
  { id: 4, img: shop4 },
  { id: 5, img: shop5 },
  { id: 6, img: shop6 },
  { id: 7, img: shop7 },
  { id: 8, img: shop8 },
  { id: 9, img: shop9 },
]

export const Card = () => {
  return (
    <>
      <div className="card">
        <div className="container">
          <div className="card__container">
            <ul className="card__list">
              {ITEMS.map((item) => (
                <li className="card__item" key={item.id}>
                  <div className="card__img-wrap">
                    <img className="card__img" src={item.img} alt="trainers" loading="lazy" />
                  </div>
                  <p className="card__text">{TEXT}</p>
                </li>
              ))}
            </ul>

            <div className="card__more">
              <button type="button" className="card__more-btn">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card