import React from 'react'
import bg from '../Images/bg.jpg'
import icons1 from '../Images/icons1.png'
import icons2 from '../Images/icons2.png'
import icons3 from '../Images/icons3.png'
import icons4 from '../Images/icons4.png'
import icons5 from '../Images/icons5.png'
import './Banner.css'

const ITEMS = [
  { icon: icons1, text: 'Оперативно отвечаем на все заявки.' },
  { icon: icons2, text: 'Экономия времени, не надо ни куда ходить.' },
  { icon: icons3, text: 'Курьер бесплатно заберёт и привезёт.' },
  { icon: icons4, text: 'Гарантия 30 дней на все услуги.' },
  { icon: icons5, text: 'Высокое качество работ.' },
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