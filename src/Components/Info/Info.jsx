import React from 'react'
import gift from '../Images/info-gift.png'
import icon1 from '../Images/info-icon1.png'
import icon2 from '../Images/info-icon2.png'
import icon3 from '../Images/info-icon3.png'
import icon4 from '../Images/info-icon4.png'
import icon5 from '../Images/info-icon5.png'
import './Info.css'

const DELIVERY = [
  { icon: icon1, text: 'Доставка на дом в назначенное время.' },
  { icon: icon2, text: 'Курьер заберет изделия в удобное для Вас время.' },
  { icon: icon3, text: 'Стоимость доставки в пределах МКАД - 500 рублей.' },
  { icon: icon4, text: 'При заказе от 5000 рублей - доставка бесплатно.' },
  { icon: icon5, text: 'Нужна примерка при заказе пошива обуви, дополнительно оплачивается выезд специалиста.' },
]

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__promo">
          <h2 className="info__title">Акции</h2>

          <div className="info__promo-row">
            <div className="info__card">
              <p className="info__card-text">
                При заказе услуг от <br /> 30 000 руб.
              </p>
              <p className="info__card-discount">
                Скидка <span>10%</span>
              </p>
            </div>

            <div className="info__circle">
              <img src={gift} alt="Akciya" />
            </div>
          </div>
        </div>

        <div className="info__delivery">
          <h2 className="info__title">Информации о доставке</h2>

          <ul className="info__list">
            {DELIVERY.map((item, i) => (
              <li key={i} className="info__item">
                <span className="info__icon">
                  <img src={item.icon} alt="" />
                </span>
                <p className="info__item-text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Info