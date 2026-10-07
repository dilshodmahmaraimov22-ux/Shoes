import React from 'react'
import bg from '../Images/banner-bg.png'
import icon1 from '../Images/banner-icon1.png'
import icon2 from '../Images/banner-icon2.png'
import icon3 from '../Images/banner-icon3.png'
import icon4 from '../Images/banner-icon4.png'
import icon5 from '../Images/banner-icon5.png'
import './Banner.css'

const ITEMS = [
  { icon: icon1, text: 'Оперативно отвечаем на все заявки.' },
  { icon: icon2, text: 'Экономия времени, не надо ни куда ходить.' },
  { icon: icon3, text: 'Курьер бесплатно заберёт и привезёт.' },
  { icon: icon4, text: 'Гарантия 30 дней на все услуги.' },
  { icon: icon5, text: 'Высокое качество работ.' },
]

const Banner = () => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <h2 className="banner__title">Наши преимущества</h2>

        <ul className="banner__list">
          {ITEMS.map((item, i) => (
            <li key={i} className="banner__item">
              <span className="banner__circle">
                <img src={item.icon} alt="" />
              </span>
              <p className="banner__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Banner