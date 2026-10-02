import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'
import map from '../Images/map1.png'
import leo from '../Images/leo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__map-section">
        <img className='footer__map-img' src={map} alt="Map" />
        <div className="container">
          <div className='footer__address-card'>
            <h1 className='footer__address-title'>Адреса</h1>
            <p className='footer__address-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-container">

            <div className='footer__col'>
              <div className="footer__brand">
                <img className='footer__logo' src={leo} alt="Logo" />
                <h2 className='footer__brand-title'>Refreshoes</h2>
              </div>
              <p className='footer__desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            <div className='footer__col'>
              <p className='footer__desc'>
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <Link to='tel:+79999990999' className='footer__phone-btn'>
                <FaPhone /> +7 (999) 999-09-99
              </Link>
            </div>

            <div className='footer__col footer__links'>
              <Link to='#' className='footer__link'>Главная</Link>
              <Link to='#' className='footer__link'>Контентная страница</Link>
              <Link to='#' className='footer__link'>Галерея</Link>
              <Link to='#' className='footer__link'>Видео галерея</Link>
              <Link to='#' className='footer__link'>Фото галерея</Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer