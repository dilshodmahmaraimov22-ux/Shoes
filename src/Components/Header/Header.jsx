import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaInstagram, FaPhone, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import logo from '../Images/logo.png'
import location from '../Images/location.png'
import './Header.css'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <ul className="header__list">
            <li className="header__item">
              <img className="header__img header__logo" src={logo} alt="logo" />
              <p className="header__text">Время работы: <br /> 11:00 до 20:00</p>
              <div className="header__socials">
                <Link to="/" className="header__link"><FaWhatsapp /></Link>
                <Link to="/" className="header__link"><FaInstagram /></Link>
              </div>
            </li>
            <li className="header__item">
              <img className="header__img header__location" src={location} alt="location" />
              <p className="header__text">Lorem Ipsum is simply dummy text of the printing.</p>
              <Link to="/" className="header__link2"><FaPhone />+7 (999) 999-09-99</Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li><Link className="nav__link" to="/">Главная</Link></li>

          <li className="nav__dropdown">
            <button className="nav__link nav__btn" onClick={() => setOpen(!open)}>
              Галерея {open ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {open && (
              <div className="nav__menu">
                <Link to="/video" onClick={() => setOpen(false)}>Видео галерея</Link>
                <Link to="/" onClick={() => setOpen(false)}>Фото галерея</Link>
              </div>
            )}
          </li>

          <li><Link className="nav__link" to="/content">Контентная страница</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header