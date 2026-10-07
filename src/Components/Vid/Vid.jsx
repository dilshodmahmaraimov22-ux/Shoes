import React from 'react'
import vid from '../Images/vid.png'
import { Link } from 'react-router-dom'
import './Vid.css'

const TEXT =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.'

const VIDEOS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  img: vid,
  text: TEXT,
}))

const Vid = () => {
  return (
    <>
      <div className="vid">
        <div className="container">
          <div className="vid__container">
            <h1 className="vid__title">Видео галерея</h1>

            <ul className="vid__list">
              {VIDEOS.map((item) => (
                <li className="vid__item" key={item.id}>
                  <div className="vid__img-wrap">
                    <img className="vid__img" src={item.img} alt="video" loading="lazy" />
                  </div>
                  <p className="vid__text">{item.text}</p>
                </li>
              ))}
            </ul>

            <div className="vid__more">
              <Link className="vid__link" to="/">
                Show more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vid