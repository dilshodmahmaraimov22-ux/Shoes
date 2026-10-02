import React from 'react'
import map from '../Images.map.png'
import { Link } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div className="container">
        <div className="footer__container">
          <ul className='footer__list'>
            <li className='footer__item'>
              <img className='footer__img' src={map} alt="" />
              <h1 className='footer__title'>Адреса</h1>
              <p className='footer__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </li>
          </ul>
          <ul className='footer__list2'>
            <li className='footer__item2'>
              <h1 className='footer__title2'>REFRESHOES</h1>
              <p className='footer__text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </li>
            <li className='footer__item2'>
              <p className='footer__text2'>Lorem Ipsum is simply dummy text of the printing and </p>
              <Link className='footer__link'><FaPhone/>+7 (999) 999-09-99</Link>
              <div className='footer__links'>
                <Link className='footer__link2'>Главная</Link>
                <Link className='footer__link2'>Контентная страница</Link>
                <Link className='footer__link2'>Видео галерея</Link>
                <Link className='footer__link2'>Фото галерея</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer